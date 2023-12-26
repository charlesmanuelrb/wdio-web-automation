import report from '@wdio/allure-reporter';
import HomePage from '../pageobjects/home.page.js'
import Users from '../pageobjects/users.js'
import homePage from '../pageobjects/home.page.js';

describe('[WA_SU] Sign up', () => {
    
    it('[WA_SU_1] Sign up for a new user', async () => {
        report.addStep('Go to Home Page')
        await homePage.open()
        await homePage.signUp(
            Users.unregisteredUsr.username, 
            Users.unregisteredUsr.password) //Sign up with random generated user
        new Users().signupSuccesfulAlert;
    })

    it('[WA_SU_2] Sign up with an existing user', async () => {
        await HomePage.open()
        await HomePage.signUp(
            Users.registeredUsr.username, 
            Users.registeredUsr.password)
        new Users().signupExistUsrAlert;
    })
    
})
    
