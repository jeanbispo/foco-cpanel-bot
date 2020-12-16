export default function(Bot) {

    Bot.getAddress = () => {
        const interval = setInterval(() => {
            const addressLink = window.frames['right'].document.querySelectorAll('[href="edit_recs.cgi?zone=testecpanel.com&view=any&type=A"]')[1];  
            
            if (addressLink) {
                clearInterval(interval);

                Bot.adress = Number(addressLink.innerText.split('(')[1].split(')')[0]);
            }
        }, 100);
    }

    Bot.createAddress = () => {
        const interval = setInterval(() => {
            const firstAddress = window.frames[1].document.querySelectorAll('tr[bgcolor="#f5f5f5"]')[0]; 
            const secondAddress = window.frames[1].document.querySelectorAll('tr[bgcolor="#f5f5f5"]')[1]; 

            const nameInput = window.frames[1].document.querySelector('#name');
            const addressInput = window.frames[1].document.querySelector('#value0[size="20"]');
            
            if ( addressInput && nameInput ) {

                if ( secondAddress ) {
                    clearInterval(interval);

                    nameInput.value = '';
                    addressInput.value = '';

                    Bot.speachBoubble.innerText = 'Por aqui, encerramos!';

                    return Bot.navigate('name-server');

                } else if ( firstAddress ) {

                    nameInput.value = 'www';
                    addressInput.value = '192.169.80.82';

                    Bot.speachBoubble.innerText = 'Agora com "www"...';

                } else {
                    
                    nameInput.value = '';
                    addressInput.value = '192.169.80.82';

                    Bot.speachBoubble.innerText = 'Primeiro passo é add o ip."';
                }

            }
        }, 100);
    }

}