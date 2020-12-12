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
        Bot.addCreateMasterZone();
        Bot.addZoneSearch();
        Bot.addZoneMenu();
        Bot.addEditZone();
        Bot.addAddress();
        Bot.addNameServer();
        Bot.addAlias();
        Bot.addEmailServer();
        Bot.addText();
        Bot.addLogout();
        Bot.addCredits();
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
        avatar.title = 'Recarregar página';
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

    Bot.addCreateMasterZone = () => {
        const form = document.createElement('form');
        const domainInput = document.createElement('input');
        const submitBtn = document.createElement('input');

        domainInput.type = 'text';
        domainInput.name = 'domain';
        domainInput.autofocus = true;
        domainInput.placeholder = 'dominio.com.br';

        submitBtn.type = 'submit';
        submitBtn.value = 'Criar';
                
        form.onsubmit = (event) => Bot.submitDomain(event);
        form.appendChild(domainInput);
        form.appendChild(submitBtn);

        Bot.menu.appendChild(form);
    }

    Bot.addZoneSearch = () => {
        const form = document.createElement('form');
        const domainInput = document.createElement('input');
        const submitBtn = document.createElement('input');

        domainInput.type = 'text';
        domainInput.name = 'search';
        domainInput.placeholder = 'Buscar zona';

        submitBtn.type = 'submit';
        submitBtn.value = 'Ok';
                
        form.action = 'https://sdn01fmu.focomultimidia.com:10000/bind8/find_zones.cgi';
        form.target = 'right';
        form.onsubmit = (e) => {
            Bot.speachBoubble.innerText = 'Buscando zona...'
        };

        form.appendChild(domainInput);
        form.appendChild(submitBtn);

        Bot.menu.appendChild(form);
    }

    Bot.addZoneMenu = () => {
        Bot.zoneMenu = document.createElement('div');
        Bot.zoneMenu.id = 'zone-menu';

        Bot.menu.appendChild(Bot.zoneMenu);
    }

    Bot.addEditZone = () => {
        const homeLink = document.createElement('a');

        homeLink.id = 'edit-zone';
        homeLink.target = 'right';
        homeLink.innerHTML = '&#127968; Editar zona';
        homeLink.href = `bind8/edit_master.cgi?zone=${Bot.getStorage('domain')}&view=`;

        Bot.zoneMenu.appendChild(homeLink);
    }

    Bot.addAddress = () => {
        const addressLink = document.createElement('a');

        addressLink.id = 'address';
        addressLink.target = 'right';
        addressLink.innerHTML = '&#128187; Endereço';
        addressLink.href = `bind8/edit_recs.cgi?zone=${Bot.getStorage('domain')}&view=any&type=A`;

        Bot.zoneMenu.appendChild(addressLink);
    }

    Bot.addNameServer = () => {
        const nameServer = document.createElement('a');

        nameServer.target = 'right';
        nameServer.id = 'name-server';
        nameServer.innerHTML = '&#128203; Serv. nomes';
        nameServer.href = `bind8/edit_recs.cgi?zone=${Bot.getStorage('domain')}&view=any&type=NS`;

        Bot.zoneMenu.appendChild(nameServer);
    }

    Bot.addAlias = () => {
        const alias = document.createElement('a');

        alias.id = 'alias';
        alias.target = 'right';
        alias.innerHTML = '&#128311; Criar alias';
        alias.href = `bind8/edit_recs.cgi?zone=${Bot.getStorage('domain')}&view=any&type=CNAME`;

        Bot.zoneMenu.appendChild(alias);
    }

    Bot.addEmailServer = () => {
        const emailServer = document.createElement('a');

        emailServer.target = 'right';
        emailServer.id = 'emailServer';
        emailServer.innerHTML = '&#128236; Serv. e-mail';
        emailServer.href = `bind8/edit_recs.cgi?zone=${Bot.getStorage('domain')}&view=any&type=MX`;

        Bot.zoneMenu.appendChild(emailServer);
    }

    Bot.addText = () => {
        const text = document.createElement('a');

        text.id = 'text';
        text.target = 'right';
        text.innerHTML = '&#128172; Texto';
        text.href = `bind8/edit_recs.cgi?zone=${Bot.getStorage('domain')}&view=any&type=TXT`;

        Bot.zoneMenu.appendChild(text);
    }

    Bot.addLogout = () => {
        const logoutLink = document.createElement('a');

        logoutLink.id = 'logout';
        logoutLink.target = 'right';
        logoutLink.innerHTML = '&#9940; Sair';
        logoutLink.href = '/session_login.cgi?logout=1';

        Bot.zoneMenu.appendChild(logoutLink);
    }

    Bot.addCredits = () => {
        const credits = document.createElement('p');
        const creatorLink = document.createElement('a');

        credits.innerText = 'O Foco Cpanel Bot foi desenvolvido para facilitar a criação de zona master no Webmin, conhecido internamente como "cpanel".';
        credits.id = 'credits';

        creatorLink.innerText = 'Criador: Guilherme Caires';
        creatorLink.href = 'https://github.com/gcairesdev';
        creatorLink.target = '_blank';

        credits.appendChild(creatorLink);
        Bot.menu.appendChild(credits);
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