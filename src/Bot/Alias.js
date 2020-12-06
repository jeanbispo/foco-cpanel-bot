export default function(Bot) {

    Bot.createAlias = () => {
        const interval = setInterval(() => {
            const nameInput = window.frames[1].document.querySelector('#name');
            const realNameInput = window.frames[1].document.querySelector('#value0[size="30"]');

            const registers = window.frames[1].document.querySelectorAll('tr[bgcolor="#f5f5f5"]'); 

            if ( realNameInput ) {
                if (!registers.length) {
                    nameInput.value = 'smtp';
                    realNameInput.value = 'smtp.uhserver.com.';

                    Bot.speachBoubble.innerText = 'Essa e a parte que mais demora... Mas comigo, vai ser rapidinho!';
                } 

                if (registers.length == 1) {
                    nameInput.value = 'pop3';
                    realNameInput.value = 'pop.uhserver.com.';

                    Bot.speachBoubble.innerText = 'Olha o pop3!';

                } 

                if (registers.length == 2) {
                    nameInput.value = 'imap';
                    realNameInput.value = 'imap.uhserver.com.';

                    Bot.speachBoubble.innerText = 'Imaaaaaap!';

                } 

                if (registers.length == 3) {
                    nameInput.value = 'webmail';
                    realNameInput.value = 'mail.uhserver.com.';

                    Bot.speachBoubble.innerText = 'Webmail agora!';

                } 

                if (registers.length == 4) {
                    nameInput.value = 'mail';
                    realNameInput.value = 'service.uhserver.com.';

                    Bot.speachBoubble.innerText = 'O primo do webmail... O mail! (Foi mal)';
                } 

                if (registers.length == 5) {
                    nameInput.value = 'pop';
                    realNameInput.value = 'pop.uhserver.com.';

                    Bot.speachBoubble.innerText = 'Pop... dnv?';
                } 

                if (registers.length == 6) {
                    nameInput.value = 'correio';
                    realNameInput.value = 'services.uhserver.com.';

                    Bot.speachBoubble.innerText = 'E por último: correio!';
                }

                if (registers.length == 7) {
                    clearInterval(interval);

                    Bot.speachBoubble.innerText = 'Finalmente acabou... O alias...';
                }
            }
        }, 100);
    }

}