import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import HomePage from '../pageobjects/home.page';
import CartPage from '../pageobjects/cart.page';
import homePage from '../pageobjects/home.page';

const pages = {
    login: HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await HomePage.logIn(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  //  await expect(SecurePage.flashAlert).toBeExisting();
   // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

