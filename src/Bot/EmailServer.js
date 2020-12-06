export default function(Bot) {

    Bot.createEmailServer = () => {
        const interval = setInterval(() => {
            const emailServerInput = window.frames['right'].document.querySelector('#value1');
            const priorityInput = window.frames['right'].document.querySelector('#value0');

            const registers = window.frames['right'].document.querySelectorAll('tr[bgcolor="#f5f5f5"]'); 

            if ( emailServerInput && priorityInput ) {
                if ( registers[0] ) {
                    clearInterval(interval);

                    Bot.speachBoubble.innerText = 'Por aqui, encerramos. Mas anime-se, só falta "texto"!';
                } else {
                    priorityInput.value = '10';
                    emailServerInput.value = 'mx.uhserver.com.';

                    Bot.speachBoubble.innerText = 'Aqui é só um!';
                }
            }
        }, 100);
    }

}