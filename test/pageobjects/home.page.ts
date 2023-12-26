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
    public get ttlLogInFrame () {
        return $('[id="logInModalLabel"]');
    }

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
        return $('//button[.="Log in"]');
    }
  
    public get btnCloseLogIn () {
        return $('#logInModal');
    }

    public get btnWelcomeLogIn () {
        return $('button[onclick="logOut()"]');
    }

    public get btnLogOut () {
        return $('id = logout2');
    }

//Login method
    public async logIn (username: string, password: string) {

        report.addStep('Click on "Log in" button at the top bar')
        await this.btnLogin.click();

        report.addStep('Type username');
        await this.txtBoxLoginUsername.waitForDisplayed();
        await this.txtBoxLoginUsername.setValue(username);

        await expect(this.ttlLogInFrame).toBeDisplayed(
            {message: 'Log in Frame is not Displaying correctly'});

        report.addStep('Type password');
        await this.txtBoxLoginPassword.setValue(password);

        report.addStep('Click on "Log In" button');
        await this.btnLogInGo.click();
        
        await browser.pause(5000);
    }

//SignUp method
    public async signUp (username: string, password: string) {

        report.addStep('Click on "Sign up" button at the top bar')
        await this.btnSignin.click();

        report.addStep('Type username');
        await this.txtBoxSignUsername.waitForDisplayed();

        await expect(this.ttlSignInFrame).toBeDisplayed(
            {message: 'Sign Up Frame is not Displaying correctly'});
        await this.txtBoxSignUsername.setValue(username);
        
        report.addStep('Type password');
        await this.txtBoxSignPassword.setValue(password);
        
        report.addStep('Click on "Sign up" button')
        await this.btnSignInGo.click();

        await browser.pause(5000);
        
    }

    public open () {
        return super.open('index.html');
    }
}

export default new homePage();
