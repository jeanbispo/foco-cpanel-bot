const waitingForServerLinkLoad = setInterval(() => {
    const serverLink = window.frames[0].document.querySelector('#catservers a');

    if (serverLink) {
        clearInterval(waitingForServerLinkLoad);

        start();
    }
}, 100);

const start = () => {
    navigateToMainPage();
}

const navigateToMainPage = () => {
    const linkToMainPage = window.frames[0].document.querySelector('#catservers a');

    linkToMainPage.click();
}
