const interval = setInterval(() => {
    const cpanelBox = window.frames[0].document.querySelector('.leftlink')

    if (cpanelBox) {
        clearInterval(interval);

        navigateToMainPage();
    }
}, 1000)

const navigateToMainPage = () => {
    const linkToPage = window.frames[0].document.querySelector('#catservers a');
    
    linkToPage.click();
}
