'use strict';

export default function(Bot) {

    Bot.setStorage = (key, value) => localStorage.setItem(key, value);

    Bot.getStorage = key => localStorage.getItem(key);

}