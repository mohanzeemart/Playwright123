import { defineConfig, devices } from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  // testMatch: [
  //   // '**.spec.js',  /*run all test files*/
    
  //   'login.spec.ts', 
  //   'buyerInvoiceUpload.spec.ts' 
  // ],
  // testIgnore: 'login.spec.ts',

  timeout: 50*1000,
  expect:{ 
    timeout:15000

  },
  /* Run tests in files in parallel */
  /* fullyParallel: true,*/
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,   /*0 change to 2 means two times retry the test cases.*/

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 
   [['html'], ['list']  ],

        /* ['allure-playwright', {outputFolder: 'test result mohan 123'}] */
      
      

    /* globalSetup: require.resolve('./utils/global.setup'),*/
        
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    /* Base URL to use in actions like `await page.goto('/')`. */
    /* baseURL: 'https://dev-buyer.zeemart.asia',*/

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',

    launchOptions: {
      // 1
      args: ["--start-maximized"]  //maximaze window commend
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        // ...devices['Desktop Chrome'],
        headless: false,   //Open window commend -false , close- true
        viewport: null,   //maximaze window commend
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
