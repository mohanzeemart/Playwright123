import { test, expect } from '@playwright/test'; 
import { config } from 'process';

test.describe('Login', () => {
    test('Login Zeemart Buyer Hub page', async ({ page }) => {

       //Before expect Open url // Assertions
       await expect(page).not.toHaveURL("https://dev-buyer.zeemart.asia/login");

        //Open Url
        await page.goto('https://dev-buyer.zeemart.asia/login')
        await page.waitForTimeout(8000);

        // verify Url
        await expect(page).toHaveURL("https://dev-buyer.zeemart.asia/login");

        //Fill the emailId
        await page.locator('input[type="email"]').fill('mohan777buyer@gmail.com');
        // await expect.soft(page.locator('input[type="email"]')).toHaveText('mohan777buyer@gmail.com');  //test text of email in text box
        await page.waitForTimeout(5000);

        //Fill the password
        await page.locator('input[type="password"]').fill('!123456Zm');
        await page.waitForTimeout(5000);

        //click Login button
        await page.locator('button[type="submit"]').click();
        //add soft assertion
        await expect.soft(page.locator('button[type="submit"]')).toHaveText("Login");   //test text - login text in elements
        // await page.waitForTimeout(9000);

        //Can view dashboard page and URL verify
        // await expect(page).toHaveURL("https://dev-buyer.zeemart.asia/sg/pages/orders/allorders")
        // await page.waitForTimeout(5000);

       
        




    
        
    })
     
})
