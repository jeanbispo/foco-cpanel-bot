export default function(Bot) {

    Bot.createNameServer = () => {
        const interval = setInterval(() => {
            const isOnNameServer = window.frames[1].document.evaluate("//font[contains(., 'Servidor de Nomes Registros')]", window.frames[1].document, null, XPathResult.ANY_TYPE, null ).iterateNext()
            const zoneNameInput = window.frames['right'].document.querySelector('#name');
            const serverNameInput = window.frames['right'].document.querySelector('#value0');

            if (isOnNameServer) {
                clearInterval(interval);

                zoneNameInput.value = '';
                serverNameInput.value = 'ns2.focomultimidia.com.';
            }
        }, 100);
    }

}