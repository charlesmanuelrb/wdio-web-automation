import report from '@wdio/allure-reporter';
import HomePage from '../pageobjects/home.page.js'
import Users from '../pageobjects/users.js'

describe('Login User', () => {
    it('Not Registered User', async () => {
        report.addStep('k')
        await HomePage.open()
        await HomePage.logIn(Users.unregisteredUsr.username, Users.unregisteredUsr.password)
        new Users().signupSuccesfulAlert;
    })
})
    
