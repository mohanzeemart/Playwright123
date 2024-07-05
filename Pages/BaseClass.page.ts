import { Page, Locator } from "@playwright/test";


class BaseClass {
    page: Page; 

    async timeOut(sec: number){
        await this.page.waitForTimeout(sec);
    }
}

export default BaseClass;