import { Page, Locator, expect } from "@playwright/test";
import path from 'path';

class InvoiceUpload {
     page: any;
    clickInvoiceMenu: Locator ;
    clickUploadInvoiceBtn: Locator ;
    selectOutlet: Locator ;
    clickDoneBtn: Locator;
    successfulMessage: Locator;
    private filePathUpoadInput: string;
    clickUploadTab: Locator;
    filePathUploadInput: string;

    constructor(page : any){
        this.page = page;
        this.clickInvoiceMenu = page.locator('//span[text()="Invoices "]')
        this.clickUploadTab = page.locator('//span[text()="Uploads"]')
        this.clickUploadInvoiceBtn = page.locator('//button[text()=" Upload invoice "]')
        this.selectOutlet = page.locator('//b[text()="Amohan Cake6"]')
        
        this.filePathUploadInput = '//div[@class="cus_ngx-file-drop__drop-zone"]'
        this.clickDoneBtn = page.locator('//button[text()="Done"]')
        this.successfulMessage = page.locator('div[id="toast-container"]')
        

    }
    async uploadFile(filePath: string){
        

        try {
            await this.page.setInputFiles(this.filePathUploadInput, filePath);
        } catch (error) {
            console.error('Failed to upload file:', error);
            throw error; // Rethrow the error after logging it
        }
        
    }
    async successMessage(){
        await expect.soft(this.successfulMessage)
          .toHaveText("Successfully uploaded", {timeout :20000}); 
    }
    

}
export default InvoiceUpload;