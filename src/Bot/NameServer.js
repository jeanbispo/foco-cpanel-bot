export default function(Bot) {

    Bot.createNameServer = () => {
        const interval = setInterval(() => {
            const secondNameServer = window.frames[1].document.querySelectorAll('tr[bgcolor="#f5f5f5"]')[1];

            const zoneNameInput = window.frames[1].document.querySelector('#name');
            const serverNameInput = window.frames[1].document.querySelector('#value0');

            if ( zoneNameInput && serverNameInput ) {

                if ( secondNameServer ) {
                    clearInterval(interval);

                    zoneNameInput.value = '';
                    serverNameInput.value = '';

                    Bot.speachBoubble.innerText = 'Por aqui, encerramos!';
                    
                    return Bot.navigate('alias');

                } else {

                    zoneNameInput.value = '';
                    serverNameInput.value = 'ns2.focomultimidia.com.';
    
                    Bot.speachBoubble.innerText = 'Aqui só precisa do segundo DNS...';
                }
            }
        }, 100);
    }

}