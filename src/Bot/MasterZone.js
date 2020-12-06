export default function(Bot) {

    Bot.createMasterZone = () => {
        const interval = setInterval(() => {
            const domainInput = window.frames[1].document.querySelector('#zone'  );
            const masterInput = window.frames[1].document.querySelector('#master');
            const emailInput  = window.frames[1].document.querySelector('#email' );
            const ipInput     = window.frames[1].document.querySelector('#ip'    );

            if (ipInput){
                clearInterval(interval);
        
                domainInput.value = Bot.getStorage('domain');
                masterInput.value = 'ns1.focomultimidia.com';
                emailInput.value = 'fabricio.focomultimidia.com';
                ipInput.value = '192.169.80.82';
            } 
        }, 1000);
    }
}