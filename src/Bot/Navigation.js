export default function(Bot){

    Bot.navigateToPages = {
        'general-options'    : '/bind8/',
        'create-master-zone' : '/bind8/master_form.cgi',
        'address'            : '/bind8/edit_recs.cgi?zone='+ Bot.getStorage('domain') +'&view=any&type=A"]',
    }

    Bot.navigate = page => window.location = Bot.navigateToPages[page];

}