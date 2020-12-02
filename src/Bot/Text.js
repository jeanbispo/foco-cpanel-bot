'use strict';

export default function(Bot) {

    Bot.createText = () => {
        const interval = setInterval(() => {
            const isOnText = window.frames[1].document.evaluate("//font[contains(., 'Texto Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext();
            const messageInput = window.frames['right'].document.querySelector('textarea#value0');

            if (isOnText) {
                clearInterval(interval);

                messageInput.value = 'v=spf1 include:spf.whservidor.com ?all';
            }
        }, 100);
    }

}