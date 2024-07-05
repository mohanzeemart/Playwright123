import { test, expect } from '@playwright/test';

test.describe('Orders Zeemart', () => {
    

    test('Orders screen Overview', async ({ page }) => {
        await page.goto('https://dev-buyer.zeemart.asia/login');
        await page.getByPlaceholder('Email Address').click();
        await page.waitForTimeout(3000);
        await page.getByPlaceholder('Email Address').fill('Shwethabuyerautotesting@zeemart.asia');
        await page.waitForTimeout(3000);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('!1234567Zm');
        await page.waitForTimeout(3000);
        await page.getByRole('button', { name: 'Log in' }).click();
        await page.getByRole('link', { name: 'Orders' }).click();
        await page.waitForTimeout(4000);
        await page.getByText('Needs approval0').click();
        await page.waitForTimeout(4000);
        await page.locator('a').filter({ hasText: 'Drafts' }).click();
        await page.waitForTimeout(4000);
        await page.locator('a').filter({ hasText: 'Recurring orders' }).click();
        await page.waitForTimeout(4000);
        await page.getByRole('button', { name: 'New order' }).click();
        await page.waitForTimeout(4000);
        await page.getByRole('button', { name: 'Download' }).click();
        await page.locator('a').filter({ hasText: 'All orders' }).click();
        await page.getByText('May 2024 - 04 Aug 2024').click();
        await page.getByText('YTD').click();
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByPlaceholder('Search order ID').click();
        await page.getByPlaceholder('Search order ID').fill('202407040155');
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByPlaceholder('Placed on').click();
        await page.getByLabel('4 July 2024', { exact: true }).getByText('5').click();
        await page.getByLabel('5 July 2024', { exact: true }).getByText('5').click();
        await page.getByRole('button', { name: 'Search' }).click();
        await page.getByText('Filter').click();
        await page.getByText('Reset').click();
        await page.waitForTimeout(5000);
      
      });
      

});



