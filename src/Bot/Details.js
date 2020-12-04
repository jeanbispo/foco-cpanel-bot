export default function(Bot) { 

    Bot.avatar = 'https://i.ibb.co/tBckqzd/avatar.png';

    Bot.changeTitle = title => document.title = title;

    Bot.changeFavicon = link => {
        let favicon = document.querySelector('link[rel="icon"]');
        
        if (favicon !== null) return favicon.href = link;
        
        favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.href = link;

        document.head.appendChild(favicon);
    }
}
