import { test, expect } from '@playwright/test'; 
import { config } from 'process';
const path = require('path');

test.describe('Login', () => {
    test('Login Zeemart Buyer Hub page', async ({ page }) => {
 
 //Open Url
 await page.goto('https://dev-buyer.zeemart.asia/login')
 await page.waitForTimeout(8000);

 // verify Url
 await expect(page).toHaveURL("https://dev-buyer.zeemart.asia/login");

 //Fill the emailId
 await page.locator('input[type="email"]').fill('mohan777buyer@gmail.com');
//  await expect.soft(page.locator('input[type="email"]')).toHaveText('mohan777buyer@gmail.com');  //test text of email in text box
 await page.waitForTimeout(5000);

 //Fill the password
 await page.locator('input[type="password"]').fill('!123456Zm');
 await page.waitForTimeout(5000);

 //click Login button
 await page.locator('button[type="submit"]').click();
 //add soft assertion
//  await expect.soft(page.locator('button[type="submit"]')).toHaveText("Log in");   //test text - login text in elements
 await page.waitForTimeout(5000);

  //user click invoice button and upload file
  await page.locator('//span[text()="Invoices "]')
  .waitFor({state:'visible', timeout:50000}) // wait for visible element

  await page.locator('//span[text()="Invoices "]').click();
  await page.
  waitForTimeout(8000);

  // user click upload invoice button
  await page.locator('.wth18').click();
  await page.waitForTimeout(5000);

  //user select outlet
  await page.locator('//div[text()="Amohan Cake6"]').click();
  await page.waitForTimeout(5000);

 //provide file path
  const filePath = path.join(__dirname, '../data/download1.png'); //path set 
  await page.waitForTimeout(5000);

  //upload test file                //locator                                                      //file path
  await page.setInputFiles('//div[text()=" Drag and drop files here or click to upload "]', filePath );
  await page.waitForTimeout(5000);

  //user click done button
  await page.locator('//button[@class="btn btn-success mt-3 ng-star-inserted"]').click();
  await page.waitForTimeout(5000);

  //verify the success message using soft assert 
  await expect.soft(page.locator('div[id="toast-container"]'))
  .toHaveText("Successfully uploaded", {timeout :10000});  //timeout the specific locator  
    
    // and .toContainText('success mes')
  await page.waitForTimeout(5000);
  


  
        
})
     
})