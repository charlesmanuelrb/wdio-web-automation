import { $ } from '@wdio/globals'
import Page from './page.js';

class Products extends Page {
    /**
     * define selectors using getter methods
     */
    
    public get signUsername () {
        return $('[id="sign-username"]');
    }
    
}
export default new Products();