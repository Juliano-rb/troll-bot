const TeleBot = require('telebot');
const readlineSync = require('readline-sync');
let credentials = {};

//try require credentials file, if fails then ask for the token
try {
	credentials = require('./credentials.json')
}
catch (e) {
	const token = readlineSync.question('Please, enter the token of your telegram bot: ');
	credentials = {
		"botToken" : token
	}
}

const bot = new TeleBot(credentials.botToken);

bot.on(/\w*((c|C)(omunis)(mo|ta))\w*/, (msg) => {
    return msg.reply.photo('https://1.bp.blogspot.com/-MTJLF7QjvV4/WpgPiPR_WAI/AAAAAAAAOK0/_4EbKA3CeDEUooLUAYbVoBSyGT_UI8hRwCLcBGAs/s640/dac55075646e406b3d8be2c828d295b124208fa4_00.jpg', { asReply: true });
});

bot.on(/\w*(N|n)ando(\s*(M|m)oura)?\w*/, (msg) => {
    return msg.reply.photo('http://images.uncyc.org/wikinet/thumb/8/85/Nando_Moura_zoando_Pirula.jpg/300px-Nando_Moura_zoando_Pirula.jpg', { asReply: true });
});

bot.on(/\w*(B|b)olso(naro)?\w*/, (msg) => {
    return msg.reply.photo('http://www.e-farsas.com/wp-content/uploads/bolsonaro-7.jpg', { asReply: true });
});


bot.start();