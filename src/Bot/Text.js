export default function(Bot) {

    Bot.createText = () => {
        const interval = setInterval(() => {
            const messageInput = window.frames['right'].document.querySelector('textarea#value0');

            if ( messageInput ) {
                clearInterval(interval);
                
                messageInput.value = 'v=spf1 include:spf.whservidor.com ?all';
                
                Bot.speachBoubble.innerText = 'Última fase! Só adicionar o SPF...';
            }
        }, 100);
    }

}