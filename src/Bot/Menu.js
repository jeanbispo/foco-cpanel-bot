export default function(Bot) {

    Bot.hideCpanelMenu = () => {
        const wrapper = window.frames[0].document.querySelector('.wrapper');

        wrapper.style.display = 'none';
    };

    Bot.createBotMenu = () => {
        const leftFrame = window.frames[0].document.body;

        Bot.menu = document.createElement('div');
        Bot.menu.classList.add('bot-menu');

        Bot.addAvatar();
        Bot.addSpeachBoubble();
        Bot.addForm();
        Bot.addLogout();
        Bot.addNavigationLinks();
        
        leftFrame.appendChild(Bot.menu);
    }

    Bot.addNavigationLinks = () => {
        const navigationLinks = document.createElement('div');
        navigationLinks.id = 'botNavigation';

        const generalOptions = document.createElement('a');
        generalOptions.target = 'right';
        generalOptions.id = 'general-options';
        generalOptions.href = 'https://sdn01fmu.focomultimidia.com:10000/bind8/'

        const createMasterZone = document.createElement('a');
        createMasterZone.target = 'right';
        createMasterZone.id = 'create-master-zone';
        createMasterZone.href = 'https://sdn01fmu.focomultimidia.com:10000/bind8/master_form.cgi/'

        navigationLinks.appendChild(generalOptions);
        navigationLinks.appendChild(createMasterZone);

        Bot.menu.appendChild(navigationLinks);
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
        Bot.speachBoubble = document.createElement('div');

        Bot.speachBoubble.classList.add('speach-boubble');
        Bot.speachBoubble.innerText = 'Crie uma zona master no campo abaixo!';

        Bot.menu.appendChild(Bot.speachBoubble);
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
        
        event.target[0].value = '';
        Bot.speachBoubble.innerText = 'Deixa comigo!';

        Bot.navigate('create-master-zone');
    }

}