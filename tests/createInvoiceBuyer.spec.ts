import { test, expect } from '@playwright/test';

test.describe('Zeemart Buyer Hub', () => {
  
  test('Invoice creation in the Buyer Hub', async ({ page }) => {
  
  await page.goto('https://dev-buyer.zeemart.asia/login');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('Shwethabuyerautotesting@zeemart.asia');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('!1234567Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Invoices' }).click();
  await page.locator('a').filter({ hasText: 'Uploads' }).click();
  await page.getByRole('button', { name: 'Process' }).click();
  await page.locator('#country').selectOption('SABLM');
  await page.getByPlaceholder('Invoice number').click();
  await page.getByPlaceholder('Invoice number').fill('Mohan Invoice');
  await page.getByRole('button', { name: 'Validate' }).click();
  await page.getByPlaceholder('Select date').click();
  await page.getByLabel('5 July 2024', { exact: true }).getByText('5').click();
  await page.locator('ng-select').filter({ hasText: 'Order number' }).getByRole('textbox').click();
  await page.getByText('202407040155').click();
  await page.getByRole('button', { name: 'Use data' }).click();
  await page.getByRole('button', { name: 'Yes, proceed!' }).click();
  await page.locator('#paymentterm').selectOption('COD');
  await page.getByRole('button', { name: 'Add SKU' }).click();
  await page.locator('ng-select').filter({ hasText: /^Enter SKU name or code×$/ }).getByRole('textbox').click();
  await page.getByText('MOHAN-002-Sweet Cake').click();
  await page.locator('div').filter({ hasText: /^3Enter SKU name or code×MOHAN-002-Sweet Cake pcs 70\.00$/ }).getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^3Enter SKU name or code×MOHAN-002-Sweet Cake pcs 70\.00$/ }).getByRole('textbox').nth(1).fill('1');
  await page.locator('div:nth-child(4) > .cell_amount > .form-control').click();
  await page.locator('div:nth-child(4) > .cell_amount > .form-control').press('ArrowRight');
  await page.locator('div:nth-child(4) > .cell_amount > .form-control').press('ArrowRight');
  await page.locator('div:nth-child(4) > .cell_amount > .form-control').press('ArrowRight');
  await page.locator('div:nth-child(4) > .cell_amount > .form-control').fill('9');
  await page.getByRole('button', { name: 'Publish this invoice' }).click();
  await page.locator('a').filter({ hasText: /^Invoices$/ }).click();
  await page.locator('datatable-body-cell').filter({ hasText: '05/07/' }).first().click();
  await page.locator('div').filter({ hasText: /^Mohan Zeemart Outlet 12$/ }).click();
  await page.getByRole('paragraph').click();
});
});

