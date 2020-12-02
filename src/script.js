import Bot from './Bot/index.js';

Bot.doLoginIfNeed();

if (Bot.isOnPage('system-information')) 
    Bot.navigateTo('general-options');

Bot.hideCpanelMenu();

Bot.createBotMenu();


if (Bot.isOnPage('create-master-zone'))
    Bot.createMasterZone();

if (Bot.isOnPage('address'))
    Bot.createAddress();

if (Bot.isOnPage('name-server'))
    Bot.createNameServer();
