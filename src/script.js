const start = () => {
    choseIfLogged();
    createEventListenerNewMasterZone();
}

const choseIfLogged = () => isLogged() ? navigateToMainPage() : login();

const isLogged = () => window.frames[0] ? true : false;

const login = () => {
    const interval = setInterval(() => {
        const userInput = document.querySelector('#user');
        const passInput = document.querySelector('#pass');
        const loginInput = document.querySelector('[type=submit]');

        if (userInput.value.length > 0 && passInput.value.length > 0) {
            clearInterval(interval);

            loginInput.click();
        }
    }, 100);
}

const navigateToMainPage = () => {
    const interval = setInterval(() => {
        const linkToMainPage = window.frames[0].document.querySelector('#catservers a');

        if (linkToMainPage) {
            clearInterval(interval);

            linkToMainPage.click();
        }
    }, 100);
}

const createEventListenerNewMasterZone = () => {
    const interval = setInterval(() => {
        const zoneInput = window.frames[1].document.querySelector('#zone');
    
        if (zoneInput) {
            clearInterval(interval);

            createNewMasterZone();
        }
    }, 100);
}

const createNewMasterZone = () => {
    const interval = setInterval(() => {
        const domainInput = window.frames[1].document.querySelector('#zone');
        const masterInput = window.frames[1].document.querySelector('#master');
        const emailInput = window.frames[1].document.querySelector('#email');
        const ipInput = window.frames[1].document.querySelector('#ip');
    
        if (ipInput){
            clearInterval(interval);
    
            masterInput.value = 'ns1.focomultimidia.com';
            emailInput.value = 'fabricio.focomultimidia.com';
            ipInput.value = '192.169.80.82';
            domainInput.focus();
        } 
    }, 1000);
}

start();
