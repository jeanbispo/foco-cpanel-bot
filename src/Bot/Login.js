export default function(Bot) {

    Bot.doLoginIfNeed = () => Bot.isDisconnected() && Bot.login();

    Bot.isDisconnected = () => window.frames['left'] ? false : true;

    Bot.login = () => {
        const interval = setInterval(() => {
            Bot.userInput = document.querySelector('#user');
            Bot.passInput = document.querySelector('#pass');
            Bot.loginInput = document.querySelector('[type=submit]');

            if (Bot.userInput) {
                clearInterval(interval);

                const interval2 = setInterval(() => {
                    if (Bot.passInput.value.length) {
                        clearInterval(interval2);

                        if (Bot.passInput.value.length > 0) Bot.loginInput.click();
                    }
                }, 500);
            }

        }, 500);
    }

}