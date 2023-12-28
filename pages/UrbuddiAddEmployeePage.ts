import { Page } from 'playwright';
import locators from '../locators/UrbuddyLocators';
import { expect } from 'playwright/test';

export default class UrbuddyEmployeeDetails {
    page: Page;

    constructor(driver: Page) {
        this.page = driver;
    }

    async goToEmployeesMenu() {
        await expect(this.page.locator(locators.employeesMenu)).toBeVisible();
        await this.page.click(locators.employeesMenu);
    }

    async clickOnAddEmployee() {
        await expect(this.page.getByRole('button', { name: locators.addEmployeeLink })).toBeVisible();
        await this.page.getByRole('button', { name: locators.addEmployeeLink }).click();
    }

    async inputIntoAddEmployee(firstName: string, lastName: string, employeeID: string, email: string, role: string, password: string, dob: string, joiningDate: string, qualification: string, department: string, gender: string, mobileNumber: number, bloodGroup: string
        , designation: string, salary: number, location: string, reportingTo: string) {

        await this.page.fill(locators.firstName, firstName);
        await expect(this.page.locator(locators.firstName).inputValue()).resolves.toBe(firstName);
        await this.page.fill(locators.lastName, lastName);
        await expect(this.page.locator(locators.lastName).inputValue()).resolves.toBe(lastName);
        await this.page.fill(locators.employeeID, employeeID);
        await expect(this.page.locator(locators.employeeID).inputValue()).resolves.toBe(employeeID);
        await this.page.fill(locators.email, email);
        await expect(this.page.locator(locators.email).inputValue()).resolves.toBe(email);
        await this.page.selectOption(locators.role, { value: role });
        await expect(this.page.locator(locators.role).inputValue()).resolves.toBe(role);
        await this.page.fill(locators.password, password);
        await expect(this.page.locator(locators.password).inputValue()).resolves.toBe(password);
        await this.page.fill(locators.dob, dob);
        await expect(this.page.locator(locators.dob).inputValue()).resolves.toBe(dob);
        await this.page.waitForSelector(locators.joiningDate);
        await this.page.fill(locators.joiningDate, joiningDate);
        await expect(this.page.locator(locators.joiningDate).inputValue()).resolves.toBe(joiningDate);
        await this.page.waitForSelector(locators.qualifications);
        await this.page.selectOption(locators.qualifications, { value: qualification });
        await expect(this.page.locator(locators.qualifications).inputValue()).resolves.toBe(qualification);
        await this.page.fill(locators.department, department);
        await expect(this.page.locator(locators.department).inputValue()).resolves.toBe(department);
        await this.page.selectOption(locators.gender, { value: gender });
        await expect(this.page.locator(locators.gender).inputValue()).resolves.toBe(gender);
        await this.page.fill(locators.mobileNumber, mobileNumber.toString());
        await expect(this.page.locator(locators.mobileNumber).inputValue()).resolves.toBe(mobileNumber.toString());
        await this.page.selectOption(locators.bloodGroup, { value: bloodGroup });
        await expect(this.page.locator(locators.bloodGroup).inputValue()).resolves.toBe(bloodGroup);
        await this.page.fill(locators.designation, designation);
        await expect(this.page.locator(locators.designation).inputValue()).resolves.toBe(designation);
        await this.page.fill(locators.salary, salary.toString());
        await expect(this.page.locator(locators.salary).inputValue()).resolves.toBe(salary.toString());
        await this.page.fill(locators.location, location);
        await expect(this.page.locator(locators.location).inputValue()).resolves.toBe(location);
        await this.page.selectOption(locators.reportingTo, reportingTo);
        await expect(this.page.locator(locators.reportingTo).inputValue()).resolves.toBe(reportingTo);
    }

    async clickOnAddButton() {
        await this.page.click(locators.addButton);
    }
}