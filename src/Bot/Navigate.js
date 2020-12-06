export default function(Bot){

    Bot.navigate = page => window.frames[0].document.getElementById(page).click();

}