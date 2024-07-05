import { test, expect, Page } from '@playwright/test'; 
import { config } from 'process';

test.describe.serial('login', () => {
   let page: Page

    test.beforeAll(async ({ browser }) => {
        page =await browser.newPage()

        //open URL
        await page.goto('https://dev-buyer.zeemart.asia/login');
        //verify URL
        await expect(page).toHaveURL("https://dev-buyer.zeemart.asia/login");
        //verify title
        await expect(page).toHaveTitle("Buyer Hub");
    })
    

     test('User click Login butoon', async () => {
        //open URL
        await page.goto('https://dev-buyer.zeemart.asia/login');
        //click Login button
        const textHeading = await page.locator('text=Log in to ');


        //before verify text heading
        await expect(textHeading).not.toBeHidden();
        // verify text heading
        await expect(textHeading).toBeVisible();
    
    })
    test('User email search box xpath selecter', async () => {
        //open URL
        await page.goto('https://dev-buyer.zeemart.asia/login');
        
        const search = await page.locator('//input[@name="loginEmail"]');
        //verify text heading
        await expect(search).toBeVisible();
    
    })
    test('Multipul elements print dropdown menus', async () => {
        //open URL
        await page.goto('https://dev-buyer.zeemart.asia/sg/pages/orders/allorders');
        
    
        const expectedMenus =[
            "New order", 
            "New recurring order" , 
            "New weekly order"];

        const dropdownbutton = page.locator('//div[@class="btn-group open show"]');

        // expect(await dropdownbutton.allTextContents()).toEqual(expectedMenus);

        for (const ele of await dropdownbutton.elementHandles()) {
            console.log(await ele.textContent());

        }
        // console.log(expectedMenus);
    
    })
})
