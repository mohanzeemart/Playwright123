import { test, expect, Page } from '@playwright/test'; 
import LoginPage from '../Pages/login.page';

import InvoiceUpload from '../Pages/buyerInvoiceUpload.page';
import BaseClass from '../Pages/BaseClass.page';
import { config } from 'process';
import path from 'path';


test.describe.serial('login zeemart ', () => {
  let page: Page;
  let loginPage: LoginPage;
  let baseClass: BaseClass;
  let invoiceUpload: InvoiceUpload;

  test.beforeAll(async ({ browser }) => {

        page =await browser.newPage()
        baseClass = new BaseClass();
        loginPage = new LoginPage(page);
        console.log('Before Login');


        // Open URL
        await loginPage.openBuyerUrl();
        await baseClass.timeOut(5000);

        //Fill the emailId
        await loginPage.getEmailAddressTextBox.fill('Shwethabuyerautotesting@zeemart.asia');
        await baseClass.timeOut(5000);
        await loginPage.getEmailPasswordTextBox.fill('!1234567Zm');
        await baseClass.timeOut(5000);
        await loginPage.clickLoginBtn();
        await baseClass.timeOut(10000);  
        await baseClass.timeOut(5000);
  
    })

  
    
    test.afterAll(async () => {
      console.log('After Logout');
    });
     
});

/* await loginPage.openBuyerUrl()
        // await baseClass.timeOut(5000);

        //  //Fill the emailId
        // await loginPage.getEmailAddressTextBox.fill('mohan777buyer@gmail.com');
        // await baseClass.timeOut(5000);
        // await loginPage.getEmailPasswordTextBox.fill('!123456Zm');
        // await baseClass.timeOut(5000);
        // await loginPage.clickLoginBtn();
        // await baseClass.timeOut(10000);
    
    // await page.goto('https://dev-buyer.zeemart.asia/login')
    // await page.waitForTimeout(8000);

    // await page.locator('input[type="email"]').fill('mohan777buyer@gmail.com');
    // await expect.soft(page.locator('input[type="email"]')).toHaveText('mohan777buyer@gmail.com');  //test text of email in text box
    // await page.waitForTimeout(5000);

    //Fill the password
    // await page.locator('input[type="password"]').fill('!123456Zm');
    // await page.waitForTimeout(5000);

    //click Login button
    // await page.locator('button[type="submit"]').click();
    //add soft assertion
    // await expect.soft(page.locator('button[type="submit"]')).toHaveText("Login");   //test text - login text in elements
    // await page.waitForTimeout(9000);

    //Can view dashboard page and URL verify
    // await expect(page).toHaveURL("https://dev-buyer.zeemart.asia/sg/pages/orders/allorders")
    // await page.waitForTimeout(5000);  */
