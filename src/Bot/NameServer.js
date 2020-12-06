export default function(Bot) {

    Bot.createNameServer = () => {
        const interval = setInterval(() => {
            const zoneNameInput = window.frames[1].document.querySelector('#name');
            const serverNameInput = window.frames[1].document.querySelector('#value0');

            if (zoneNameInput) {
                clearInterval(interval);

                zoneNameInput.value = '';
                serverNameInput.value = 'ns2.focomultimidia.com.';
            }
        }, 100);
    }

}