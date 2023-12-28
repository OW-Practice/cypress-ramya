
import { test } from '@playwright/test';
import UrbuddiLogin from '../pages/UrbuddiLoginPage';
import UrbuddyEmployeeDetails from '../pages/UrbuddiAddEmployeePage'
import { URL, pageTitle, reportingToEmail } from '../testdata.json'
import { adminUsername, adminPassword } from '../credentials.json'
import { faker } from '@faker-js/faker'
const logger = require('../utilities/logger.ts')

let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let employeeID = "OW" + faker.number.int({ min: 50000, max: 150000 });
let email = faker.internet.email();
let role = faker.helpers.arrayElement(['Employee', 'Admin', 'HR', 'Lead']);
let password = faker.internet.password();
let dob = faker.date.past().toISOString().split('T')[0];
let joiningDate = faker.date.past().toISOString().split('T')[0];
let qualification = faker.helpers.arrayElement(['Degree', 'B.Tech', 'PG']);
let department = faker.person.jobArea();
let gender = faker.helpers.arrayElement(['Male', 'Female', 'Others']);
let mobileNumber = faker.number.int({ min: 1000000000, max: 9999999999 });
let bloodGroup = faker.helpers.arrayElement(['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-']);
let designation = faker.person.jobTitle();
let salary = faker.number.int({ min: 50000, max: 150000 });
let location = faker.location.city();

test.describe('urbuddy test cases', () => {

    test('login test case', async ({ page }) => {
        const uLogin = new UrbuddiLogin(page);
        try {
            await uLogin.launchURL(URL, pageTitle);
            await uLogin.inputCredentials(adminUsername, adminPassword);
            await uLogin.clickOnLoginButton();

            logger.info('Login test case passed');
        } catch (error) {
            logger.error('Login test case failed', { error });
            throw error;
        }
    });

    test('add employee test case', async ({ page }) => {
        const uLogin = new UrbuddiLogin(page);
        const uEmployee = new UrbuddyEmployeeDetails(page)

        await uLogin.launchURL(URL, pageTitle);
        await uLogin.inputCredentials(adminUsername, adminPassword);
        await uLogin.clickOnLoginButton();

        await uEmployee.goToEmployeesMenu();
        await uEmployee.clickOnAddEmployee();
        await uEmployee.inputIntoAddEmployee(firstName, lastName, employeeID, email, role, password, dob, joiningDate,
            qualification, department, gender, mobileNumber, bloodGroup,
            designation, salary, location, reportingToEmail);
        await uEmployee.clickOnAddButton();
    })
});
