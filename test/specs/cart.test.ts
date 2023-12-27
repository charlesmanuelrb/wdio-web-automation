import report from '@wdio/allure-reporter';
import homePage from '../pageobjects/home.page.js'
import Users from '../pageobjects/users.js'
import itemsPage from '../pageobjects/Items.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('[WA_SC] Shopping Cart', () => {
    it('[WA_SC_1] Add a Laptop Item to the Cart', async () => {

        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.logIn(
            Users.registeredUsr.username, 
            Users.registeredUsr.password);
        
        report.addStep('Click Laptop Categorie');
        (await itemsPage.lnkCatLaptops).waitForDisplayed();
        await itemsPage.lnkCatLaptops.click();

        report.addStep('Click Laptop Link Name')
         itemsPage.lnkItemTitle.click();
        
         
        report.addStep('Click on Add to Cart');
        await cartPage.btnAddToCart.waitForDisplayed();
        await cartPage.btnAddToCart.click();
        await browser.pause(2000)
        const textAlert = (await browser.getAlertText()); 
        await expect(textAlert).toBe('Product added.');
        await browser.pause(2000)

    })
    
})


describe('[WA_SC] Shopping Cart', () => {
    it('[WA_SC_2] Delete an Item from the Cart', async () => {
        report.addStep('Go to Cart Page')
        await cartPage.open();
        
        report.addStep('Click Delete');
        (await cartPage.btnDeleteItem).waitForDisplayed();
        await cartPage.btnDeleteItem.click();
    

     
    })
    
})
