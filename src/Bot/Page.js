export default function(Bot) { 

    Bot.changePageTitle = title => document.title = title;

    Bot.changeFavicon = link => {
        let favicon = document.querySelector('link[rel="icon"]');
        
        if (favicon !== null) return favicon.href = link;
        
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = link;

        document.head.appendChild(favicon);
    }

    Bot.waitForElement = (selector, callback) => {
        if ( selector ) callback();
        if ( !selector ) setTimeout(() => Bot.waitForElement(selector, callback), 500);
    }

    Bot.doOnPage = (page, callback) => {
        Bot.pages = {
            'system-information' : window.frames[1].document.evaluate("//font[contains(., 'This login')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'general-options'    : window.frames[1].document.evaluate("//font[contains(., 'BIND 8')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'create-master-zone' : window.frames[1].document.evaluate("//font[contains(., 'Criar Zona Master')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'edit-zone'          : window.frames[1].document.evaluate("//font[contains(., 'Editar a Zona Master')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'address'            : window.frames[1].document.evaluate("//font[contains(., 'Endereço Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'name-server'        : window.frames[1].document.evaluate("//font[contains(., 'Servidor de Nomes Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'alias'              : window.frames[1].document.evaluate("//font[contains(., 'Alias Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'email-server'       : window.frames[1].document.evaluate("//font[contains(., 'Servidor de Email Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
            'text'               : window.frames[1].document.evaluate("//font[contains(., 'Texto Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext(),
        }

        if ( !Bot.pages[page] ) setTimeout(() => Bot.doOnPage(page, callback), 500);

        Bot.waitForElement(Bot.pages[page], callback);
    }
    
}
