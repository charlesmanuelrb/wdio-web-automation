import report from '@wdio/allure-reporter';
import homePage from '../pageobjects/home.page.js'
import Users from '../pageobjects/users.js'
import itemsPage from '../pageobjects/Items.page.js';

describe('[WA_SC] Shopping Cart', () => {
    it('[WA_SC_1] Add a Laptop Item to the Cart', async () => {

        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.logIn(
            Users.registeredUsr.username, 
            Users.registeredUsr.password);
        
        report.addStep('Click Laptop Categorie');
        await itemsPage.lnkCatLaptops.click();

        report.addStep('Click on Laptop Link Name');
        await browser.pause(3000);
        
        report.addStep('Click on Add to Cart');
        const textAlert = (await browser.getAlertText()); 
        await expect(textAlert).toBe('Product Added.');

    })
})
