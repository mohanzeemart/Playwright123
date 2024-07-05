import { Page, Locator } from "@playwright/test";


class OrderCreation {
    page: Page;
    clickOrderButton: Locator;
    clickNewOrderButton: Locator;
    clickNewOrderDropdownButton: Locator;
    createNewOrderFor: Locator;
    selectOutlet: Locator;
    selectSupplier: Locator;
    searchProductBox: Locator;
    increateProductPlusIcon: Locator;
    clickReviewButton: Locator;
    clickPlaceOrderButton: Locator;
    
   
    constructor(page: any){
        this.page = page;
        this.clickOrderButton = page.locator('//span[@id="sideMenu_Orders"]')
        this.clickNewOrderButton =page.locator('//button[text()=" New order"]')
        this.clickNewOrderDropdownButton =page.locator('//a[text()="New order"]')
        this.createNewOrderFor =page.locator('//i[@class="fa fa-angle-down fa-down-arrow"]')
        this.selectOutlet =page.locator('//div[text()=" Mohan Zeemart Outlet 12"]')
        this.selectSupplier =page.locator('//div[text()="Mohan liven supplier"]')
        this.searchProductBox =page.locator('//input[@placeholder="Search SKU"]')
        this.increateProductPlusIcon =page.locator('input[type="password"]')
        this.clickReviewButton =page.locator('input[type="password"]')
        this.clickPlaceOrderButton =page.locator('input[type="password"]')
        
        

    }
}

export default OrderCreation;