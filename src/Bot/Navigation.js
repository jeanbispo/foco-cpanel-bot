'use strict';

export default function(Bot){

    Bot.loadPages = () => {
        Bot.pages = {
            'system-information' : window.frames['right'].document.querySelector('[target=_new]'),
            'general-options' : window.frames['right'].document.querySelector('#sortableTable12 a[href="conf_rndc.cgi"]'),
            'create-master-zone' : window.frames['right'].document.querySelector('input#master'),
            'edit-zone' : window.frames['right'].document.querySelector('#sortableTable1 [href="edit_recs.cgi?zone=testecpanel.com&view=any&type=A"'),
        }
    }

    Bot.loadNavigateToPages = () => {
        Bot.navigateToPages = {
            'general-options' : window.frames['left'].document.querySelector('[href="/bind8/"]'),
            'create-master-zone' : window.frames['right'].document.querySelector('[href="master_form.cgi"]'),
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