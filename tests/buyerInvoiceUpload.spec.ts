import { test, expect } from '@playwright/test'; 
import { config } from 'process';
import path from 'path';
import LoginPage from '../Pages/login.page';
import InvoiceUpload from '../Pages/buyerInvoiceUpload.page';
import BaseClass from '../Pages/BaseClass.page';
test.describe('invoiceUploads', () => {
  let loginPage: LoginPage;
  let invoiceUpload : InvoiceUpload;
  let baseClass: BaseClass;

  test('upload invoice123', async ({page}) => {
    loginPage = new LoginPage(page);
    baseClass = new BaseClass();
    invoiceUpload = new InvoiceUpload(page);

      //invoice upload
      await invoiceUpload.clickInvoiceMenu.click();
      await baseClass.timeOut(5000);
      await invoiceUpload.clickUploadTab.click();
      await baseClass.timeOut(5000);
      await invoiceUpload.clickUploadInvoiceBtn.click();
      await baseClass.timeOut(5000);
      await invoiceUpload.selectOutlet.click();
      await baseClass.timeOut(5000);
      const filePath = path.join(__dirname, '../data/OIP.jpg');
      await invoiceUpload.uploadFile(filePath);
      await baseClass.timeOut(5000);
      await invoiceUpload.clickDoneBtn.click();
      await baseClass.timeOut(5000);
        //verify success message
      await invoiceUpload.successMessage();
      await baseClass.timeOut(5000);

     
  })
  
     
})