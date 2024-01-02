// Urbuddy.ts
import { Page } from 'playwright';
import locators from '../locators/UrbuddyLocators';
import { expect } from 'playwright/test';

export default class UrbuddyLogin {
    page: Page;

    constructor(driver: Page) {
        this.page = driver;
    }

    async launchURL(URL: string, pageTitle: string) {
        await this.page.goto(URL);
        await expect(this.page).toHaveURL(URL);
        await expect(this.page).toHaveTitle(pageTitle);
        await expect(this.page.getByAltText(locators.urbuddiCompanyLogo)).toBeVisible()
    }

    async inputCredentials(username: string, password: string) {
        await expect(this.page.locator(locators.usernameField)).toBeVisible();
        await expect(this.page.locator(locators.passwordField)).toBeVisible();
        await this.page.fill(locators.usernameField, username);
        await this.page.fill(locators.passwordField, password);
    }

    async clickOnLoginButton() {
        await expect(this.page.locator(locators.loginButton)).toBeVisible();
        await this.page.click(locators.loginButton);
    }

    async verifyIsLoginSuccessful() {
        await expect(this.page.locator(locators.profile)).toBeVisible();
        await expect(this.page.locator(locators.notification)).toBeVisible();
        await expect(this.page.getByRole('link', { name: locators.dashboardText })).toBeVisible();
        await expect(this.page.locator(locators.upcomingBirthday)).toBeAttached();
    }
}
