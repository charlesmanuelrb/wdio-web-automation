import { $ } from '@wdio/globals'
import Page from './page.js';
import report from '@wdio/allure-reporter';

class homePage extends Page {

//Sign Up Selectors

    public get ttlSignInFrame () {
        return $('[id="signInModalLabel"]');
    }
    
    public get txtBoxSignUsername () {
        return $('[id="sign-username"]');
    }

    public get txtBoxSignPassword () {
        return $('[id="sign-password"]');
    }

    public get btnSignin () {
        return $('[id="signin2"]');
    }

    public get btnSignInGo () {
        return $('button[onclick="register()"]');
    }

    public get btnCloseSignIn () {
        return $('#signInModal');
    }

//Login Selectors
    public get txtBoxLoginUsername () {
        return $('[id="loginusername"]');
    }

    public get txtBoxLoginPassword () {
        return $('[id="loginpassword"]');
    }

    public get btnLogin () {
        return $('[id="login2"]');
    }
    
    public get btnLogInGo () {
        return $('button[onclick="logIn()"]');
    }
  
    public get btnCloseLogIn () {
        return $('#logInModal');
    }

   

//Login method
    public async logIn (username: string, password: string) {
        await this.txtBoxLoginUsername.waitForExist();
        await this.txtBoxLoginUsername.setValue(username);
        await this.txtBoxLoginPassword.setValue(password);
        await this.btnLogInGo.click();
        await browser.pause(2000);
    }

//SignUp method
    public async signUp (username: string, password: string) {
        report.addStep('Click on "Sign up" button at the top bar')
        await this.btnSignin.click();

        report.addStep('Type username')
        await this.txtBoxSignUsername.waitForDisplayed();
        await expect(this.ttlSignInFrame).toBeDisplayed(
            {message: 'Sign Up Frame is not Displaying correctly'});
        await this.txtBoxSignUsername.setValue(username);
        
        report.addStep('Type password')
        await this.txtBoxSignPassword.setValue(password);
        
        report.addStep('Click on "Sign up" button')
        await this.btnSignInGo.click();
    }
    

    public open () {
        return super.open('index.html');
    }
}

export default new homePage();
