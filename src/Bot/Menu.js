export default function(Bot) {

    Bot.avatar = 'https://i.ibb.co/tBckqzd/avatar.png';

    Bot.hideCpanelMenu = () => {
        const interval = setInterval(() => {
            const wrapper = window.frames['left'].document.querySelector('.wrapper');
    
            if (wrapper) {
                clearInterval(interval);
                
                wrapper.style.display = 'none';
            }
        }, 100);
    }

    Bot.createBotMenu = () => {
        const leftFrame = window.frames[0].document.body;

        Bot.waitForElement(window.frames[0], () => {
            Bot.menu = document.createElement('div');
            Bot.menu.classList.add('bot-menu');
    
            Bot.addAvatar();
            Bot.addSpeachBoubble();
            Bot.addForm();
            Bot.addLogout();
            
            leftFrame.appendChild(Bot.menu);
        });
    }

    Bot.addAvatar = () => {
        const avatar = document.createElement('img');
        avatar.src = 'https://i.ibb.co/tBckqzd/avatar.png';
        avatar.onclick = () => {
            window.open('https://sdn01fmu.focomultimidia.com:10000/');
            window.close();
        }

        Bot.menu.appendChild(avatar);
    }

    Bot.addSpeachBoubble = () => {
        const speachBoubble = document.createElement('div');
        speachBoubble.classList.add('speach-boubble');
        speachBoubble.innerText = 'Crie uma zona master no campo abaixo!';

        Bot.menu.appendChild(speachBoubble);
    }

    Bot.addForm = () => {
        const form = document.createElement('form');
        const domainInput = document.createElement('input');

        domainInput.type = 'text';
        domainInput.name = 'domain';
        domainInput.autofocus = true;
        domainInput.placeholder = 'dominio.com.br';
                
        form.onsubmit = (event) => Bot.submitDomain(event);
        form.appendChild(domainInput);

        Bot.menu.appendChild(form);
    }

    Bot.addLogout = () => {
        const logoutLink = document.createElement('a');
        logoutLink.href = '/session_login.cgi?logout=1';
        logoutLink.innerText = 'Sair';
        logoutLink.id = 'logout';

        Bot.menu.appendChild(logoutLink);
    }

    Bot.submitDomain = event => {
        event.preventDefault();

        Bot.domain = event.target[0].value;
        Bot.setStorage('domain', Bot.domain);

        event.target[0].value = 'Deixa comigo!';

        Bot.navigateTo('create-master-zone');
    }

}