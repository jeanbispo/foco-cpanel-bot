'use strict';

export default function(Bot){

    Bot.loadPages = () => {
        Bot.pages = {
            'system-information' : window.frames[1].document.querySelector('[target=_new]'),
            'general-options' : window.frames[1].document.querySelector('#sortableTable12 a[href="conf_rndc.cgi"]'),
            'create-master-zone' : window.frames[1].document.querySelector('input#master'),
            'edit-zone' : window.frames[1].document.querySelector('#sortableTable1 [href="edit_recs.cgi?zone=testecpanel.com&view=any&type=A"'),
            'address' : window.frames[1].document.evaluate("//font[contains(., 'Endereço Registros')]", document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
        }
    }

    Bot.loadNavigateToPages = () => {
        Bot.navigateToPages = {
            'general-options' : window.frames[0].document.querySelector('[href="/bind8/"]'),
            'create-master-zone' : window.frames[1].document.querySelector('[href="master_form.cgi"]'),
            'address' : window.frames[1].document.querySelector('[href="edit_recs.cgi?zone=testecpanel.com&view=any&type=A"]'),
        }
    }

    Bot.navigateTo = page => {
        const interval = setInterval(() => {
            Bot.loadNavigateToPages();

            const link = Bot.navigateToPages[page];

            if (link) {
                clearInterval(interval);

                link.click();
            }
        }, 100);
    }

    Bot.isOnPage = page => {
        const interval = setInterval(() => {
            Bot.loadPages();

            const isOnPage = Bot.pages[page];

            if (isOnPage) clearInterval(interval);
        }, 100);

        return true;
    }
    
}