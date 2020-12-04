export default function(Bot){

    Bot.loadPages = () => {
        Bot.pages = {
            'system-information' : window.frames[1].document.querySelector('[target=_new]'),
            'general-options' : window.frames[1].document.querySelector('#sortableTable12 a[href="conf_rndc.cgi"]'),
            'create-master-zone' : window.frames[1].document.querySelector('input#master'),
            'edit-zone' : window.frames[1].document.querySelector('#sortableTable1 [href="edit_recs.cgi?zone=testecpanel.com&view=any&type=A"'),
            'address' : window.frames[1].document.evaluate("//font[contains(., 'Endereço Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'name-server' : window.frames[1].document.evaluate("//font[contains(., 'Servidor de Nomes Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'email-server' : window.frames[1].document.evaluate("//font[contains(., 'Servidor de Email Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'text' : window.frames[1].document.evaluate("//font[contains(., 'Texto Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
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

    Bot.isOnPage = async (page) => {
        const interval = setInterval(() => {
            Bot.loadPages();
            const pageSelector = Bot.pages[page];

            if (pageSelector) {
                clearInterval(interval);

                if (pageSelector != null && pageSelector != undefined && pageSelector != '') {
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    }
    
}