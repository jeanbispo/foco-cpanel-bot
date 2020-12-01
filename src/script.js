import Bot from './Bot/index.js';

Bot.doLoginIfNeed();

if ( Bot.isOnPage('system-information') ) 
    Bot.navigateTo('general-options');

Bot.hideCpanelMenu();

Bot.createBotMenu();

if ( Bot.isOnPage('create-master-zone') ) 
    Bot.createMasterZone();

// Se estiver na página general options e alguma coisa (que ainda não pensei) no local storage va para 