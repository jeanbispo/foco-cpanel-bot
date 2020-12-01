const waitingForServerLinkLoad = setInterval(() => {
    const serverLink = window.frames[0].document.querySelector('#catservers a');

    if (serverLink) {
        clearInterval(waitingForServerLinkLoad);

        start();
    }
}, 100);

const start = () => {
    navigateToMainPage();
    createEventListenerNewMasterZone();
}

const navigateToMainPage = () => {
    const linkToMainPage = window.frames[0].document.querySelector('#catservers a');

    linkToMainPage.click();
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