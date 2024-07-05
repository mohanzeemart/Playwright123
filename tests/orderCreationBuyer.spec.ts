import { test, expect } from '@playwright/test';

test('Zeemart Buyer Order creation', async ({ page }) => {
  await page.goto('https://dev-buyer.zeemart.asia/login');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('Shwethabuyerautotesting@zeemart.asia');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('!1234567Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Orders' }).click();
  await page.getByRole('button', { name: 'New order' }).click();
  await page.getByLabel('Shwetha Buyer Auto Testing').getByText('New order').click();
  await page.getByRole('heading', { name: 'Mohan Zeemart Outlet 12 ' }).locator('i').click();
  await page.getByRole('list').getByText('Mohan Zeemart Outlet').click();
  await page.getByRole('dialog').getByText('Mohan liven supplier').click();
  await page.getByPlaceholder('Search SKU').click();
  await page.getByPlaceholder('Search SKU').fill('Milk Powder');
  await page.getByPlaceholder('Search SKU').press('Enter');
  await page.getByText('Add to order').click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('button', { name: 'Review (1 item)' }).click();
  await page.getByRole('button', { name: 'Add from catalogue' }).click();
  await page.getByText('Add to order').first().click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: 'Review (2 items)' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.locator('a').filter({ hasText: 'All orders' }).click();
  await page.locator('datatable-body-cell:nth-child(6)').first().click();
});
