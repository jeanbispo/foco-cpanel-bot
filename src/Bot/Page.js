export default function(Bot) { 

    Bot.pages = {
        'system-information' : '//font[contains(., "This login")]',
        'general-options'    : '//font[contains(., "BIND 8")]',
        'create-master-zone' : '//font[contains(., "Criar Zona Master")]',
        'edit-zone'          : '//font[contains(., "Editar a Zona Master")]',
        'address'            : '//font[contains(., "Endereço Registros")]',
        'name-server'        : '//font[contains(., "Servidor de Nomes Registros")]',
        'email-server'       : '//font[contains(., "Servidor de Email Registros")]',
        'text'               : '//font[contains(., "Texto Registros")]',
    }

    Bot.changePageTitle = title => document.title = title;

    Bot.changeFavicon = link => {
        let favicon = document.querySelector('link[rel="icon"]');
        
        if (favicon !== null) return favicon.href = link;
        
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = link;

        document.head.appendChild(favicon);
    }

    Bot.waitForElement = (selector, callback, maxTimes = 6, time = 500) => {
        const rightFrame = window.frames['right'];

        const tryAgain = () => {
            maxTimes--;
            setTimeout(() => Bot.waitForElement(selector, callback, maxTimes), time);
        }

        if (rightFrame) {
            const element = rightFrame.document
                .evaluate(selector, rightFrame.document, null, XPathResult.ANY_TYPE, null).iterateNext();

            return element ? callback() : tryAgain();
        } else tryAgain();
    }

    Bot.doOnPage = (page, callback) => {
        const documentSelector = Bot.pages[page];

        return Bot.waitForElement(documentSelector, callback);
    };
    
}
