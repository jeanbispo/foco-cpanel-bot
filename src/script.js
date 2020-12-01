const start = () => {
    doLoginIfDisconnected();
    navigateToMainPage();
    deleteWrapper();
    createAvatarPopUp();
    createNewMasterZoneInput();
    createEventListenerNewMasterZone();
}

const doLoginIfDisconnected = () => !isLogged() && login();

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

const createAvatarPopUp = () => {
    const interval = setInterval(() => {
        const frameLeft = window.frames[0].document.querySelector('#popup');
        
        if (frameLeft) {
            clearInterval(interval);

            const popUp = document.createElement('img');
            const imgURL = chrome.extension.getURL("src/assets/gcaires-avataaars.png");

            popUp.src = imgURL;
            
            frameLeft.appendChild(popUp);
        }

    }, 100);
}

const createNewMasterZoneInput = () => {
    const interval = setInterval(() => {
        const frameLeft = window.frames[0].document.querySelector('#popup');

        if (frameLeft) {
            clearInterval(interval);
            
            const menu = document.createElement('div');
            const form = document.createElement('form');
            const domainInput = document.createElement('input');

            domainInput.type = 'text';
            domainInput.name = 'domain';
            domainInput.autofocus = true;
            domainInput.placeholder = 'dominio.com.br';

            form.onsubmit = (event) => submitDomain(event);

            form.appendChild(domainInput);
            menu.appendChild(form);
            frameLeft.appendChild(menu);
        }
    }, 100);
}

const submitDomain = event => {
    event.preventDefault();

    const domain = event.target[0].value;
    localStorage.setItem('domain', domain);

    event.target[0].value = 'Iniciando criação...';

    navigateToNewMasterZone();
}

const navigateToNewMasterZone = () => {
    const interval = setInterval(() => {
        const createNewMasterZoneLink = window.frames[1].document.querySelectorAll('a.ui_link')[2];

        if (createNewMasterZoneLink) {
            clearInterval(interval);
            createNewMasterZoneLink.click();
        }
    }, 100);
}

const deleteWrapper = () => {
    const interval = setInterval(() => {
        const wrapper = window.frames[0].document.querySelector('.wrapper');

        if (wrapper) {
            clearInterval(interval);
            
            wrapper.remove()
        }
    }, 100);
}

start();
