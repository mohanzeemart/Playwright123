import { Page, Locator } from "@playwright/test";


class LoginPage {
    
    page: Page; 
    getEmailAddressTextBox:Locator;
    getEmailPasswordTextBox: Locator;
    getLoginBtn: Locator;
   
    constructor(page: any){
        this.page = page;
        this.getEmailAddressTextBox = page.locator('input[type="email"]')
        this.getEmailPasswordTextBox =page.locator('input[type="password"]')
        this.getLoginBtn = page.locator('button[type="submit"]')

    }

    async openBuyerUrl() {
        await this.page.goto('https://dev-buyer.zeemart.asia/login')
    }

    /* async timeOut(sec: number){
    //     await this.page.waitForTimeout(sec);
    // }*/

    async clickLoginBtn(){
        await this.getLoginBtn.click();
    }
}

export default LoginPage;