import { $ } from '@wdio/globals'
import Page from './page.ts';

class itemsPage extends Page {
//Categories Links Selectors
    public get lnkCatPhones(){
        return $('[onclick="byCat(\'phone\')"]');
    }

    public get lnkCatLaptops(){
        return $('[onclick="byCat(\'notebook\')"]');
    }

    public get lnkCatMonitors(){
        return $('[onclick="byCat(\'monitor\')"]');
    }

//Product Cards Selectors
    public get lnkItemTitle() {
        return $('a[href="prod.html?idp_=8"]');
        //return $('[//a[.="Sony vaio i5"]]')
    }
    
    public get txtCardPrice() {
        return $("#tbodyid > div:nth-of-type(1) h5")
    }
/*
    async function getProductCount() {
        const productElements = await $$('.card-block a.hrefch'); // Finds all product link elements
        const productCount = productElements.length; // Gets the number of products

        // Iterates over product link elements and extracts product numbers
        const productIds = [];
        for (const productElement of productElements) {
            const href = await productElement.getAttribute('href');
            const productId = href.match(/idp_=(\d+)/)[1]; // Extracts the product number from the href
            productIds.push(productId);
    }

    console.log('Number of products on the page:', productCount);
    console.log('Product numbers:', productIds);
}
*/
}
export default new itemsPage();