
import test from '../utilities/baseTest';
import { pageTitle, reportingToEmail } from '../testdata.json';
import { adminUsername, adminPassword } from '../credentials.json'
import { faker } from '@faker-js/faker';
import { getBaseUrl } from '../utilities/config';
import CustomReporterConfig from '../utilities/logger';

test.use({ reporter: CustomReporterConfig });

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

    test.beforeEach(async ({ urbuddiLogin }) => {
        test.step('launch URL', async () => {
            await urbuddiLogin.launchURL(getBaseUrl(), pageTitle);
        })

        test.step('input credentials into respective fields', async () => {
            await urbuddiLogin.inputCredentials(adminUsername, adminPassword);
        })

        test.step('input credentials into respective fields', async () => {
            await urbuddiLogin.clickOnLoginButton();
        })
    })

    test('verify login', async ({ urbuddiLogin }) => {
        await urbuddiLogin.verifyIsLoginSuccessful()
    });

    test('add employee test case', async ({ urbuddiEmployee }) => {
        await urbuddiEmployee.goToEmployeesMenu();
        await urbuddiEmployee.clickOnAddEmployee();
        await urbuddiEmployee.inputIntoAddEmployee(firstName, lastName, employeeID, email, role, password, dob, joiningDate,
            qualification, department, gender, mobileNumber, bloodGroup,
            designation, salary, location, reportingToEmail);
        await urbuddiEmployee.clickOnAddButton();
    })
});
