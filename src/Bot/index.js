import Login from './Login.js';
import Navigation from './Navigation.js';
import Storage from './Storage.js';
import Details from './Details.js';
import Menu from './Menu.js';
import MasterZone from './MasterZone.js';
import Address from './Address.js';
import NameServer from './NameServer.js';
import Alias from './Alias.js';
import EmailServer from './EmailServer.js';
import Text from './Text.js';

const Bot = {};

Login(Bot);
Storage(Bot);
Navigation(Bot);
Details(Bot);
Menu(Bot);
MasterZone(Bot);
Address(Bot);
NameServer(Bot);
Alias(Bot);
EmailServer(Bot);
Text(Bot);

export default Bot;