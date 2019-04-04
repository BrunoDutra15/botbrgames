const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.login(config.token).catch(err => {
    console.log(`Falha ao fazer login ao bot: ${err}`)
  })
  
  let status = [
    {name: `no BRGames Mods`, type: 'STREAMING'},
    {name: 'Sobre o BRGames Minecraft', type: 'LISTENING'},
    {name: `no Servidor BRGames`, type: 'PLAYING'},
  
  ];
  
    client.on('ready', () => {
      console.log( `Carregado...! Olá mundo! Estou em ${client.guilds.size} servers com ${client.users.size} users` );
  
      function setStatus() {
          let randomStatus = status[Math.floor(Math.random() * status.length)];
          client.user.setPresence({game: randomStatus});
      }
  
      setStatus();
      setInterval(() => setStatus(), 10000); //{1000/1s}\{10000/10s}\{100000/1m}
    });

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

  const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();


  if(comando === "ping ");
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latencia e de ${m.createdTimestamp - message.createdTimestamp}ms. A latencia da API e ${Math.round(client.ping)}ms`)

    }


);

client.login(config.token);
