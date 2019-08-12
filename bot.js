const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Botun Olan ${client.user.tag} Sunucuya Giriş Yaptı Ve Artık Aktif!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('As Brom');
  }

  if (msg.content.toLowerCase() ===  prefix + 'instagram') {
    msg.channel.send('@asilsahinn');
  }

  if (msg.content.toLowerCase() ===  prefix + 'senkimsin') {
    msg.channel.send('Ben size hizmet etmek için @ByyShn#3535 tarafından tasarlanan bir botum. Amacım daha kaliteli ve güzel bir chat ortamı yaratmak.');
  }

if (!msg.content.startsWith(prefix)) {
  return;
}

  if (msg.content.toLowerCase() === prefix + 'adam' ) {
  msg.reply('Bu bir soru mu? Hahahahahaha')
  }

});

client.on('guildBanAdd' , (guild, user) => {
  let uyarı = guild.channels.find('name', 'uyarı');
  if (!uyarı) return;
  uyarı.send('https://media.giphy.com/media/H99r2HtnYs492/giphy.gif **Adalet dağıtma zamanı gelmiş! ** '+ user.username +'** Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});


client.login(process.env.Bot_Token);
