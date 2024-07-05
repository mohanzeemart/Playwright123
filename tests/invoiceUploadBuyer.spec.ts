import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev-buyer.zeemart.asia/login');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('Shwethabuyerautotesting@zeemart.asia');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('!1234567Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.locator('a').filter({ hasText: 'Uploads' }).click();
  await page.getByRole('button', { name: 'Upload invoice' }).click();
  await page.getByRole('dialog').getByText('Mohan Zeemart Outlet').click();
  await page.getByText('Drag and drop files here or').click();
  await page.getByRole('dialog').setInputFiles('download - Copy - Copy.jpg');
  await page.getByRole('button', { name: 'Done' }).click();
});