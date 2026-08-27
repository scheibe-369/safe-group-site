"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { SAFE_MARK_G, SAFE_MARK_S, SAFE_MARK_VIEWBOX } from "./safe-mark-paths";

type SafeMark3DSceneProps = {
  /** Com o menu fechado a cena para de desenhar, para nao gastar GPU escondida. */
  active: boolean;
  className?: string;
};

/**
 * Versao tridimensional da marca: o monograma e extrudido a partir dos mesmos
 * caminhos do vetor, com o S em metal prateado e o G em vermelho Safe
 * lacado, luz de recorte vermelha e um ambiente de estudio para os reflexos.
 * Roda devagar sozinho e inclina-se com o rato. O three so entra no bundle
 * quando o painel o pede (import dinamico no MenuPanel); ate a cena estar
 * pronta fica a silhueta plana por baixo.
 */
export function SafeMark3DScene({ active, className = "" }: SafeMark3DSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = environment;

    const camera = new THREE.PerspectiveCamera(30, 1, 1, 10000);
    camera.position.set(0, 0, 1750);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${SAFE_MARK_VIEWBOX}"><path id="s" d="${SAFE_MARK_S}"/><path id="g" d="${SAFE_MARK_G}"/></svg>`;
    const group = new THREE.Group();
    const materialS = new THREE.MeshPhysicalMaterial({ color: 0xd9d9d6, metalness: 0.95, roughness: 0.22, clearcoat: 0.6, clearcoatRoughness: 0.15 });
    const materialG = new THREE.MeshPhysicalMaterial({ color: 0xc9021f, metalness: 0.5, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12 });
    const geometries: THREE.BufferGeometry[] = [];
    for (const path of new SVGLoader().parse(svg).paths) {
      const geometry = new THREE.ExtrudeGeometry(SVGLoader.createShapes(path), { depth: 120, bevelEnabled: true, bevelThickness: 6, bevelSize: 5, bevelSegments: 3, curveSegments: 24 });
      geometries.push(geometry);
      group.add(new THREE.Mesh(geometry, (path.userData?.node as SVGElement | undefined)?.id === "g" ? materialG : materialS));
    }
    // O SVG tem o y para baixo: centra a marca e vira-a para o eixo do three.
    const center = new THREE.Box3().setFromObject(group).getCenter(new THREE.Vector3());
    group.children.forEach((mesh) => mesh.position.sub(center));
    group.scale.y = -1;
    scene.add(group);

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(-600, 700, 900);
    const rim = new THREE.DirectionalLight(0xff1a35, 0.9);
    rim.position.set(900, -500, 300);
    const fill = new THREE.DirectionalLight(0x9fb3ff, 0.6);
    fill.position.set(400, 200, -800);
    scene.add(key, rim, fill, new THREE.AmbientLight(0xffffff, 0.25));

    let pointerX = 0;
    let pointerY = 0;
    const onPointer = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    const clock = new THREE.Clock();
    let frame = 0;
    const tick = () => {
      frame = requestAnimationFrame(tick);
      if (!activeRef.current) return;
      const t = reduceMotion ? 0 : clock.getElapsedTime();
      group.rotation.y = Math.sin(t * 0.45) * 0.42 + pointerX * 0.35;
      group.rotation.x = Math.sin(t * 0.32) * 0.12 - pointerY * 0.25;
      group.rotation.z = Math.sin(t * 0.2) * 0.04;
      renderer.render(scene, camera);
    };
    renderer.render(scene, camera);
    setReady(true);
    tick();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
      geometries.forEach((geometry) => geometry.dispose());
      materialS.dispose();
      materialG.dispose();
      environment.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} data-ready={ready} className={`site-nav__scene ${className}`} />;
}
