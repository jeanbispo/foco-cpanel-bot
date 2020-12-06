import Bot from './Bot/index.js';

const interval = setInterval(() => {
    
    if ( !window || !window.frames[0] || !window.frames[1] ) return;
    if ( !window.frames[0].document || !window.frames[1].document ) return;
    
    clearInterval(interval);

    Bot.hideCpanelMenu();

    Bot.createBotMenu();

    Bot.changePageTitle('Cpanel Bot: Deixa comigo!');

    Bot.changeFavicon('https://i.ibb.co/KrnSvwL/icon128.png');

    Bot.doOnPage( 'system-information', () => Bot.navigate('general-options') );

    Bot.doOnPage( 'create-master-zone', () => Bot.createMasterZone() );

    Bot.doOnPage( 'address', () => Bot.createAddress() );

    Bot.doOnPage( 'name-server', () => Bot.createNameServer() );

    Bot.doOnPage( 'alias', () => Bot.createAlias() );

    Bot.doOnPage( 'email-server', () => Bot.createEmailServer() );

    Bot.doOnPage( 'text', () => Bot.createText() );

}, 1000);
