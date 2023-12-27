import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {
//Cart Selectors
    public get btnShowCart () {
        return $('[onclick=\'showcart()\']');
    }

    public get btnAddToCart () {
        return $('[onclick=\'addToCart(8)\']');
    }

    public get btnDeleteItem () {
        return $('[//a[.="Delete"]]');
    }

    public open () {
        return super.open('cart.html');
    }
}

export default new CartPage();
