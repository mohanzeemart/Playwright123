import { test, expect } from '@playwright/test';

test.describe('Create Recurring orders in Buyer', () => {
    


test('Create Recurring orders in Buyer Hub', async ({ page }) => {
  await page.goto('https://dev-buyer.zeemart.asia/login');
  await page.getByPlaceholder('Email Address').click();
  await page.getByPlaceholder('Email Address').fill('Shwethabuyerautotesting@zeemart.asia');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('!1234567Zm');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Orders' }).click();
  await page.getByRole('button', { name: 'New order' }).click();
  await page.getByText('New recurring order').click();
  await page.getByRole('combobox').first().selectOption('OANCF');
  await page.getByRole('combobox').nth(1).selectOption('SABLM');
  await page.getByText('M', { exact: true }).click();
  await page.getByText('T', { exact: true }).nth(1).click();
  await page.getByLabel('Public holidays').check();
  await page.getByLabel('Ongoing').check();
  await page.getByRole('combobox').nth(2).selectOption('648ad087e7ab9e0001939132');
  await page.getByRole('combobox').nth(3).selectOption('6 hours');
  await page.getByRole('button', { name: 'Next: Add SKU' }).click();
  await page.getByPlaceholder('Search SKU').click();
  await page.getByPlaceholder('Search SKU').fill('Milk Powder');
  await page.getByPlaceholder('Search SKU').press('Enter');
  await page.locator('order-qty-plus-minus div').click();
  await page.getByRole('button', { name: '' }).dblclick();
  await page.getByRole('button', { name: 'Review (1 item)' }).click();
  await page.getByText('Estimated total (1 item)').click();
  await page.getByRole('button', { name: 'Add from catalogue' }).click();
  await page.getByText('Add to order').first().click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: 'Review (2 items)' }).click();
  await page.getByText('Estimated total (2 items)').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('a').filter({ hasText: 'Recurring orders' }).click();
  await page.locator('datatable-body-cell:nth-child(4) > .datatable-body-cell-label').first().click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByText('Estimated total (2 items)').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('a').filter({ hasText: 'Recurring orders' }).click();
});
});