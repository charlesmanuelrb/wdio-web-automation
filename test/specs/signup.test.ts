import report from '@wdio/allure-reporter';
import Users from '../pageobjects/users.js'
import homePage from '../pageobjects/home.page.js';
import { expect } from '@wdio/globals'

describe('[WA_SU] Sign up', () => {
    
    it('[WA_SU_1] Sign up for a new user', async () => {
        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.signUp(
            Users.unregisteredUsr.username, 
            Users.unregisteredUsr.password) //Sign up with random generated user
            const textAlert = (await browser.getAlertText()); 
            expect(textAlert).toBe('Sign up successful.');
    })

    it('[WA_SU_2] Sign up with an existing user', async () => {
        await homePage.open()
        await homePage.signUp(
            Users.registeredUsr.username, 
            Users.registeredUsr.password);
       
        const textAlert = (await browser.getAlertText()); 
        await expect(textAlert).toBe('This user already exist.');
        
    })
    
})
    
