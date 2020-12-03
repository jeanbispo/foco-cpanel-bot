import Bot from './Bot/index.js';

Bot.doLoginIfNeed();
Bot.hideCpanelMenu();
Bot.createBotMenu();
Bot.changeTitle('Cpanel Bot: Deixa comigo!');
Bot.changeFavicon('https://i.ibb.co/KrnSvwL/icon128.png');

if (Bot.isOnPage('system-information')) 
    Bot.navigateTo('general-options');

if (Bot.isOnPage('create-master-zone'))
    Bot.createMasterZone();

if (Bot.isOnPage('address'))
    Bot.createAddress();

if (Bot.isOnPage('name-server'))
    Bot.createNameServer();

if (Bot.isOnPage('alias')) 
    Bot.createAlias();

if (Bot.isOnPage('email-server')) 
    Bot.createEmailServer();

if (Bot.isOnPage('text')) 
    Bot.createText();
