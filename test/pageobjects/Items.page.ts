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

}
export default new itemsPage();