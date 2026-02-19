from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173/#/module/module-1/fundamental-theorem")

    # Wait for content to load
    page.wait_for_selector("h1")

    # Take a screenshot
    page.screenshot(path="verification/module_1_3.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
