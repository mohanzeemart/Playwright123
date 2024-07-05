import { Page } from "@playwright/test";
import { error } from "console";

class BaseClass {

    page: Page;

    constructor(page : any){
        this.page = page;
    }


    async timeOut(sec: number){
        await this.page.waitForTimeout(sec);
        }
     
    


}
export default BaseClass;