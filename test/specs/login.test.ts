import report from '@wdio/allure-reporter';
import homePage from '../pageobjects/home.page.js'
import Users from '../pageobjects/users.js'

describe('[WA_LI] Log in', () => {
    it('[WA_LI_1] Log in with a not registered user', async () => {

        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.logIn(
            Users.unregisteredUsr.username, 
            Users.unregisteredUsr.password) // random generated user

            const textAlert = (await browser.getAlertText()); 
            await expect(textAlert).toBe('This user does not exist.');
       
    })
})
    

describe('[WA_LI] Log in', () => {
    it('[WA_LI_2] Log in with a wrong password', async () => {

        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.logIn(
            Users.wrongPwdUsr.username, 
            Users.wrongPwdUsr.password); // registered user with wrong password

        const textAlert = (await browser.getAlertText()); 
        await expect(textAlert).toBe('Wrong password.');
        
        
    })
})

describe('[WA_LI] Log in', () => {
    it('[WA_LI_3] Log In with a registered user', async () => {

        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.logIn(
            Users.registeredUsr.username, 
            Users.registeredUsr.password) //registered user
        
        
        report.addStep('Click Log Out');
       
       

    })
})