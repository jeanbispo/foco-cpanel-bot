'use strict';

export default function(Bot) {

    Bot.createMasterZone = () => {
        const interval = setInterval(() => {
            const domainInput = window.frames['right'].document.querySelector('#zone');
            const masterInput = window.frames['right'].document.querySelector('#master');
            const emailInput = window.frames['right'].document.querySelector('#email');
            const ipInput = window.frames['right'].document.querySelector('#ip');
            const createBtn = window.frames['right'].document.querySelector('#create');
        
            if (ipInput){
                clearInterval(interval);
        
                domainInput.value = Bot.getStorage('domain');
                masterInput.value = 'ns1.focomultimidia.com';
                emailInput.value = 'fabricio.focomultimidia.com';
                ipInput.value = '192.169.80.82';
    
                createBtn.click();
            } 
        }, 100);
    }
}