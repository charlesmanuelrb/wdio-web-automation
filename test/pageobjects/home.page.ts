import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    public get signUsername () {
        return $('[id="sign-username"]');
    }

    public get signPassword () {
        return $('[id="sign-password"]');
    }

    public get loginUsername () {
        return $('[id="loginusername"]');
    }

    public get loginPassword () {
        return $('[id="loginpassword"]');
    }

    public get btnLogin () {
        return $('[id="login2"]');
    }

    public get btnSignin () {
        return $('[id="signin2"]');
    }
    
    public get btnLogInGo () {
        return $('button[onclick="logIn()"]');
    }

    public get btnSignInGo () {
        return $('button[onclick="register()"]');
    }

    public get btnCloseLogIn () {
        return $('#logInModal');
    }

    public get btnCloseSignIn () {
        return $('#signInModal');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async logIn (username: string, password: string) {
        await this.btnLogin.click();
        await browser.pause(2000);
        await this.loginUsername.waitForDisplayed();
        await this.loginUsername.setValue(username);
        await browser.pause(2000);
        await this.loginPassword.setValue(password);
        await this.btnLogInGo.click();
        await browser.pause(2000);
    }
    public async signUp (username: string, password: string) {
        await this.btnSignin.click();
        await browser.pause(2000);
        await this.signUsername.waitForDisplayed();
        await this.signUsername.setValue(username);
        await browser.pause(2000);
        await this.signPassword.setValue(password);
        await this.btnSignInGo.click();
        await browser.pause(2000);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('index.html');
    }
}

export default new HomePage();
