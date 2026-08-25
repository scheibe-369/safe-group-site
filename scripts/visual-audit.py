from pathlib import Path
from playwright.sync_api import sync_playwright

BASE_URL = "http://127.0.0.1:3000"
ARTIFACTS = Path("audit-artifacts")
VIEWPORTS = {
    "mobile-375": {"width": 375, "height": 812},
    "tablet-768": {"width": 768, "height": 1024},
    "desktop-1024": {"width": 1024, "height": 768},
    "desktop-1440": {"width": 1440, "height": 1000},
}
ROUTES = ["/", "/sobre", "/solucoes", "/metodo", "/cases", "/contacto"]


def main() -> None:
    ARTIFACTS.mkdir(exist_ok=True)
    errors: list[str] = []
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        for name, viewport in VIEWPORTS.items():
            page = browser.new_page(viewport=viewport)
            console_errors: list[str] = []
            page.on("console", lambda message: console_errors.append(message.text) if message.type == "error" else None)
            response = page.goto(f"{BASE_URL}/", wait_until="networkidle")
            if not response or response.status >= 400:
                errors.append(f"{name}: Home returned an invalid response")
            overflow = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
            if overflow:
                errors.append(f"{name}: horizontal overflow")
            if page.get_by_role("heading", name="Crescimento com estrutura.", exact=False).count() != 1:
                errors.append(f"{name}: Hero heading missing")
            page.screenshot(path=str(ARTIFACTS / f"home-{name}.png"), full_page=True)
            errors.extend(f"{name}: console: {item}" for item in console_errors)
            page.close()

        page = browser.new_page(viewport={"width": 1280, "height": 900})
        for route in ROUTES:
            response = page.goto(f"{BASE_URL}{route}", wait_until="networkidle")
            if not response or response.status >= 400:
                errors.append(f"{route}: invalid response")
            if page.locator("h1").count() != 1:
                errors.append(f"{route}: expected one h1")
            if page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth"):
                errors.append(f"{route}: horizontal overflow")
        page.goto(f"{BASE_URL}/contacto", wait_until="networkidle")
        if not page.get_by_role("button", name="Envio disponível em breve").is_disabled():
            errors.append("/contacto: deferred form must be disabled")
        browser.close()

    if errors:
        raise SystemExit("\n".join(errors))
    print("Visual audit passed for 4 viewports and 6 routes.")


if __name__ == "__main__":
    main()
