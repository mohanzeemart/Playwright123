
import  { test, expect, Page } from "@playwright/test";
import LoginPage from "../Pages/login.page";
import OrderCreation from "../Pages/orderCreation.page";
import BaseClass from "../Pages/BaseClass.page";


test.describe('Order creation in zeemart', () => {
    let page: Page;
    let loginPage: LoginPage;
    let ordercreation: OrderCreation;
    let baseclass: BaseClass;
       
test('Create order Particular supplier', async ({ page }) => {
    loginPage = new LoginPage(page);
    baseclass = new BaseClass();

    ordercreation = new OrderCreation(page);
    console.log('Before Login and order creation');

    await ordercreation.clickNewOrderButton.click();
    await baseclass.timeOut(5000);
    await ordercreation.clickNewOrderDropdownButton.click();
    await baseclass.timeOut(5000);
    await ordercreation.clickOrderButton.click();
    await baseclass.timeOut(5000);
    await ordercreation.createNewOrderFor.click();
    await baseclass.timeOut(5000);
    await ordercreation.selectOutlet.click();
    await baseclass.timeOut(5000);
    await ordercreation.selectSupplier.click();
    await baseclass.timeOut(5000);
    await ordercreation.searchProductBox.fill('Milk Powder')
    await baseclass.timeOut(5000);
    await ordercreation.increateProductPlusIcon.click();
    await baseclass.timeOut(5000);
    await ordercreation.searchProductBox.fill('Green graps')
    await baseclass.timeOut(5000);
    await ordercreation.increateProductPlusIcon.click();
    await baseclass.timeOut(5000);
    await ordercreation.clickReviewButton.click();
    await baseclass.timeOut(5000);
    await ordercreation.clickPlaceOrderButton.click();
    await baseclass.timeOut(5000);

});

});
