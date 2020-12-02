'use strict';

export default function(Bot) {

    Bot.createAlias = () => {
        const interval = setInterval(() => {
            const isOnAlias = window.frames[1].document.evaluate("//font[contains(., 'Alias Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext()
            const nameInput = window.frames['right'].document.querySelector('#name');
            const realNameInput = window.frames['right'].document.querySelector('#value0[size="30"]');

            const registers = window.frames['right'].document.querySelectorAll('tr[bgcolor="#f5f5f5"]'); 

            if (isOnAlias) {
                if (!registers.length) {
                    nameInput.value = 'smtp';
                    realNameInput.value = 'smtp.uhserver.com.';
                } 

                if (registers.length == 1) {
                    nameInput.value = 'pop3';
                    realNameInput.value = 'pop.uhserver.com.';
                } 

                if (registers.length == 2) {
                    nameInput.value = 'imap';
                    realNameInput.value = 'imap.uhserver.com.';
                } 

                if (registers.length == 3) {
                    nameInput.value = 'webmail';
                    realNameInput.value = 'mail.uhserver.com.';
                } 

                if (registers.length == 4) {
                    nameInput.value = 'mail';
                    realNameInput.value = 'service.uhserver.com.';
                } 

                if (registers.length == 5) {
                    nameInput.value = 'pop';
                    realNameInput.value = 'pop.uhserver.com.';
                } 

                if (registers.length == 6) {
                    nameInput.value = 'correio';
                    realNameInput.value = 'services.uhserver.com.';
                }

                if (registers.length == 7) {
                    clearInterval(interval);

                    nameInput.value = 'ACABOOOOOU!';
                    realNameInput.value = 'SERVIDOR DE EMAIL AGORA...';
                }
            }
        }, 100);
    }

}