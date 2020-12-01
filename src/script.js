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
