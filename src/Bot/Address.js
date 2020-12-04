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
            const firstAddress = window.frames['right'].document.querySelectorAll('tr[bgcolor="#f5f5f5"]')[0]; 

            const nameInput = window.frames['right'].document.querySelector('#name');
            const addressInput = window.frames['right'].document.querySelector('#value0[size="20"]');

            if (addressInput) {
                if (firstAddress) {
                    clearInterval(interval);

                    nameInput.value = 'www';
                    addressInput.value = '192.169.80.82';
                } else {
                    nameInput.value = '';
                    addressInput.value = '192.169.80.82';
                }
            }
        }, 100);
    }

}