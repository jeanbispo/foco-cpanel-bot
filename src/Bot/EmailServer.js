'use strict';

export default function(Bot) {

    Bot.createEmailServer = () => {
        const interval = setInterval(() => {
            const isOnEmailServer = window.frames[1].document.evaluate("//font[contains(., 'Servidor de Email Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext();
            const emailServerInput = window.frames['right'].document.querySelector('#value1');
            const priorityInput = window.frames['right'].document.querySelector('#value0');

            const registers = window.frames['right'].document.querySelectorAll('tr[bgcolor="#f5f5f5"]'); 

            if (isOnEmailServer) {
                if (!registers.length) {
                    clearInterval(interval);

                    priorityInput.value = '10';
                    emailServerInput.value = 'mx.uhserver.com.';
                }
            }
        }, 100);
    }

}