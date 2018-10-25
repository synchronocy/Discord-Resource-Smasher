const Discord = require('discord.js');
const client = new Discord.Client();

var spam = [];

for (l = 0; l < 10; l++) {
	spam[l] = '';
	for (i = 0; i < 2000; i++) {
		spam[l] = spam[l] + rand();
	}
}

client.on('ready', () => {
	console.log(`Connected as ${client.user.username}`);
});

client.on('message', m => {
	if (m.content === '.s') {
		for (c = 0; c < 50; c++) {
			m.channel.send(spam[c])
			
		}
	}
});

function rand() {
	return String.fromCharCode((Math.random() * (9999 - 0) + 0).toString());
}

client.login("tokenhere");