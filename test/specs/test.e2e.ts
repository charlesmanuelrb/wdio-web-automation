import { expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page.js'

describe('SignUp', () => {
    it('User already register', async () => {
        await HomePage.open()
        await HomePage.signUp('tomsmith1', '1234')
        const textAlert = (await browser.getAlertText()); 
        await expect('This user already exist.').toBe(textAlert);

        /*await HomePage.logIn('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
       */
    })
    it('Usuario no registrado', async () => {
        await HomePage.open()
        await HomePage.signUp('tomsmith2', '1234')
        const textAlert = (await browser.getAlertText()); 
        await expect('Sign up Succesful.').toBe(textAlert);
    })

describe('Login de Usuario', () => {
    it('Usuario No Registrado', async () => {
        await HomePage.open()
        await HomePage.logIn('tomsmith3', '1234')
        const textAlert = (await browser.getAlertText()); 
        await expect('User does not exist.').toBe(textAlert);
    })

    it('Usuario Registrado', async () => {
        await HomePage.open()
        await HomePage.logIn('tomsmith1', '1234')
        const textAlert = (await browser.getAlertText()); 
        await expect('User does not exist.').toBe(textAlert);
    })
})
    
})

