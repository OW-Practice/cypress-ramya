import { Reporter, TestCase, TestError, TestResult, TestStep } from "@playwright/test/reporter"
const winston = require('winston');

let console = new winston.transports.Console()
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [new winston.transports.File({
        filename: 'logs/error.log',
        level: 'info'
    })]
})
logger.add(console)

export default class CustomReporterConfig implements Reporter {
    onTestBegin(test: TestCase): void {
        logger.info(`Test case execution started: ${test.title}`)
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        logger.info(`Test case execution completed: ${test.title} Test case result status: ${result.status}`)
    }

    onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === 'test.step') {
            logger.info(`Test step execution started': ${step.title}`)
        }
    }

    onStepEnd(test: TestCase, result: TestResult, step: TestStep): void {
        if (step.category === 'test.step') {
            logger.info(`Test step execution completed': ${step.title} Test step result status: ${result.status}`)
        }
    }

    onError(error: TestError): void {
        logger.error(error.message)
    }
}



