'use strict';

import Login from './Login.js';
import Navigation from './Navigation.js';
import Storage from './Storage.js';
import Avatar from './Avatar.js';
import Title from './Title.js';
import Menu from './Menu.js';
import MasterZone from './MasterZone.js';
import Address from './Address.js';
import NameServer from './NameServer.js';
import Alias from './Alias.js';
import EmailServer from './EmailServer.js';
import Text from './Text.js';

const Bot = {};

Login(Bot);
Navigation(Bot);
Storage(Bot);
Avatar(Bot);
Title(Bot);
Menu(Bot);
MasterZone(Bot);
Address(Bot);
NameServer(Bot);
Alias(Bot);
EmailServer(Bot);
Text(Bot);

export default Bot;