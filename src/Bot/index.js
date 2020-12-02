'use strict';

import Login from './Login.js';
import Navigation from './Navigation.js';
import Storage from './Storage.js';
import Avatar from './Avatar.js';
import Menu from './Menu.js';
import MasterZone from './MasterZone.js';
import Address from './Address.js';
import NameServer from './NameServer.js';

const Bot = {};

Login(Bot);
Navigation(Bot);
Storage(Bot);
Avatar(Bot);
Menu(Bot);
MasterZone(Bot);
Address(Bot);
NameServer(Bot);

export default Bot;