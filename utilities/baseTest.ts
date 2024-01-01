import { test as baseTest } from '@playwright/test'
import UrbuddyLogin from '../pages/UrbuddiLoginPage'
import UrbuddyEmployeeDetails from '../pages/UrbuddiAddEmployeePage'

const test = baseTest.extend<{
    urbuddiLogin: UrbuddyLogin,
    urbuddiEmployee: UrbuddyEmployeeDetails
}>
    ({
        urbuddiLogin: async ({ page }, use) => {
            await use(new UrbuddyLogin(page));
        },

        urbuddiEmployee: async ({ page }, use) => {
            await use(new UrbuddyEmployeeDetails(page));
        }
    })

export default test