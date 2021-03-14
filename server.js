process.on("warning", e => console.warn(e.stack));
process.setMaxListeners(0);
require("events").EventEmitter.defaultMaxListeners = 50;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://numerous-bristle-expansion.glitch.me`);
}, 280000);
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "@";
const cooldown = new Set()
const cdtime =5;
client.login("NzcxMTg3OTg1MjcwMDQ2NzQx.X5oexw.NgWCSUQibnlxKWiOe3Aw9ZxqMXs");
client.on("ready", async () => {
  console.log(`${client.user.username} Ready .`);
  console.log(`${client.guilds.cache.size} Servers .`);
  console.log(`${client.users.cache.size} Users .`);
  client.user.setActivity(prefix + "help - Security Is One", {
    type: "PLAYING"
  });
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(color)
      .setFooter("")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

• To get help on a specific command type \`help <command>@\`

[ Invite ](https://discord.com/api/oauth2/authorize?client_id=771187985270046741&permissions=8&scope=bot)  -  [ Support ](https://discord.gg/XvjBAampgp)  -  [ Website ]()

General
\`${prefix}about\` - \`${prefix}serverinfo\` - \`${prefix}userinfo\`
\`${prefix}invite\` - \`${prefix}vote\`
Security
\`${prefix}show anti\` - \`${prefix}settings\`
Moderation
\`${prefix}lock\` - \`${prefix}unlock\` - \`${prefix}kick\` - \`${prefix}ban\`
\`${prefix}unban\`
Fun
\`${prefix}ship\` - \`${prefix}gay\` - \`${prefix}iq\` - \`${prefix}old\`
\`${prefix}love\`

`);

    message.channel.send(help);
  }
});

///////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "show anti")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    let help = new Discord.MessageEmbed()
      .setColor(color)
      .setFooter("")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`${client.user.username} Prefix Is [ ${prefix} ]

Security Commands
\`${prefix}anti ban\`
\`${prefix}anti kick\`
\`${prefix}anti channelD\`
\`${prefix}anti channelC\`
\`${prefix}anti roleD\`
\`${prefix}anti roleC\`
\`${prefix}anti time\`
\`${prefix}anti bot\` **on** / **off**
\`${prefix}anti problem\` **on** / **off**
`);

    message.channel.send(help);
  }
});

////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
    const lock = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(
        `🔒 | Locked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(lock);
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild)
      return message.channel.send(
        ghallat + "** | Sorry This Command Only For Servers .**"
      );

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return;
    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    });
    const unlock = new Discord.MessageEmbed()
      .setColor(color)
      .setDescription(
        `🔓 | UnLocked Channel
Channel Name : <#${message.channel.id}>
Locked By : <@${message.author.id}>
`
      )
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(unlock);
  }
});
const rast = "🎡";
const rastw = "🎗";
const ghallat = "🎲";
const ghallatw = "🥌";
const logosec = "";
const warn = "♨️";
const color = "#42f5ef";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
   if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
  if (message.author.id !== message.guild.ownerID) return;
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti roleC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelD")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channelC")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send("**" + ghallat + " | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**" + ghallat + " | Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**${rast} | Changed To : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

///////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "⚙ | You don't have Permissions do to this."
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("🛡 | Member not found!");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`🛠 | You can't ${mode} the owner!`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `🖇 | You can't ${mode} people higher ranked than yourself!`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `⚠️ | I can't ${mode} people who are higher ranked than me!`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `🚫 | Specified user is not ${mode}able.`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `⭕ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)`
        )
      )
      .catch(console.error);
  }
});

///////

client.on("message", message => {
  if (message.content === prefix + "settings") {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
     if (message.author.id !== message.guild.ownerID) return;
    if (!message.channel.guild)
      return message.channel.send(
        "Sorry This Command Only For Servers."
      );
    let embed = new Discord.MessageEmbed()
      .setTitle("")
       
      .setURL("")
       
      .setDescription(

`AntiBan
Enabled: ❌
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled: ❗
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannel C - D
Enabled: ⚫
Maximum Create : ${config[message.guild.id].chaCrLimit}
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiRole C - D
Enabled: 💠
Maximum Create : ${config[message.guild.id].roleCrLimits}
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiTime
Enabled: 🕝
Maximum Time : ${config[message.guild.id].time}`
      )
      .setColor(color)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send({ embed });
  }
});

/////
let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem off")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          ghallat +
            "** | Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
        );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`💈 | AntiProblem Is Off`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "anti problem on")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
    if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.channel.send(
          ghallat +
            "** | Sorry , But You Dont Have `MANAGE_GUILD` Permission .**"
        );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`⭐ | AntiProblem Is On`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http")) {
    if (message.member.hasPermission("MANAGE_EMOJIS")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**${warn} | You Dont Have \`MANAGE_EMOJIS\` Permission .**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@everyone")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**${warn} | You Dont Have \`MENTION_EVERYONE\` Permission .**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("@here")) {
    if (message.member.hasPermission("MENTION_EVERYONE")) return;
    if (!message.channel.guild) return;
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**${warn} | You Dont Have \`MENTION_EVERYONE\` Permission .**`
    );
  }
});
/////
let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
  client.on('message', message => {
    
      if(message.content.startsWith(prefix + "anti bot on")) {
          if(!message.channel.guild) return;
         if (message.author.id !== message.guild.ownerID) return;
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`✈ | AntiBot Join Is On`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
    
          })

  client.on('message', message => {
    if(message.content.startsWith(prefix + "anti bot off")) {
          if(!message.channel.guild) return;
         if (message.author.id !== message.guild.ownerID) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`🛰 | AntiBot Join Is Off`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
  
  })

///////
client.on("message", msg =>{
if(msg.content === prefix + "serverinfo"){
if (cooldown.has(msg.author.id)) {
      return msg.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(msg.author.id);

    setTimeout(() => {
      cooldown.delete(msg.author.id);
    }, cdtime * 1000);
const embed = new Discord.MessageEmbed()
.setColor(color)
    .setThumbnail(msg.guild.iconURL())
    .setTitle(`${msg.guild.name}`,true)
    .setTitle(`${msg.guild.name}`,true)
    .addField('Server ID',`${msg.guild.id}`,true)
    .addField('Created On',msg.guild.createdAt.toLocaleString())
    .addField('Owner Server',`${msg.guild.owner}`,true)
    .addField('Members',`**[${msg.guild.memberCount}]**`,true)
    .addField('Channels',`**[${msg.guild.channels.cache.size}]**`,true)
    .addField('Region',`**[${msg.guild.region}]**`,true)
    .addField('Roles', `**[ ${msg.guild.roles.cache.size} ]**`, true)
msg.channel.send(embed);
}
});

//////
client.on("message", msg =>{
if(msg.content === prefix + "about"){
if (cooldown.has(msg.author.id)) {
      return msg.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(msg.author.id);

    setTimeout(() => {
      cooldown.delete(msg.author.id);
    }, cdtime * 1000);
const embed = new Discord.MessageEmbed()
.setAuthor(client.user.username,client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setColor(color)
.setTitle(` ${client.user.username} `)
.addField('servers', `**${client.guilds.cache.size}**`, true)
.addField('channels', `**${client.channels.cache.size}**`, true)
.addField('Users', `** ${client.guilds.cache.reduce((c, v) => c + v.memberCount, 0).toLocaleString()}**`, true)
.addField('My Name' , `**${client.user.tag}**` , true)
.addField('My ID' , `**${client.user.id}**` , true)
.addField('Owner Bot',`<@747528109884178532>`,true)

msg.channel.send(embed);
}
}); 

//////////

client.on("message", message => {
    if(message.content.startsWith(prefix + "userinfo")){
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
  let embed = new Discord.MessageEmbed()
  .setColor(color)
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("Info User")
  .addField('Name', `**${message.author.tag}**`, true)
  .addField('ID', `**${message.author.id}**`, true)  
  .addField('Created At', `**${message.author.createdAt.toLocaleString()}**`, true)
  .setTimestamp(); 
  message.channel.send(embed)
  }
  });
      
//////////

client.on("message",message => {
  if(message.content.startsWith(prefix + "invite")) 
  message.channel.send("https://discord.com/api/oauth2/authorize?client_id=771187985270046741&permissions=8&scope=bot");
}

);

///////
client.on("message",message => {
  if(message.content.startsWith(prefix + "vote")) 
  message.channel.send("");
}

);

//////
client.on("message", message => {
    if(message.content.startsWith(prefix + "iq")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = message.author ;
        return message.channel.send(`**IQ** Level is ${lvl}% 🧠`)
    }
});

//////
client.on("message", message => {
    if(message.content.startsWith(prefix + "ship")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = message.author ;
        return message.channel.send(`**SHIP** Level is ${lvl}% <:4FE09E8A92C5470B870CB958C5A7216F:813184354628927529>`)
    }
});

/////
client.on("message", message => {
    if(message.content.startsWith(prefix + "gay")) {
if (cooldown.has(message.author.id)) {
      return message.channel.send(`wait for 5 second`).then(m=>{m.delete({timeout:cdtime * 600})})
    }

    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, cdtime * 1000);
        const lvl = Math.floor(Math.random() * 100) + 1 ;
        const owner = message.author ;
        return message.channel.send(`**GAY** Level is ${lvl}% <:998AB84CAB8A43CDB9DD356B1783157F:813184352510148608>`)
    }
});

//////
client.on("message", message=> {
if(message.content.startsWith(prefix + "old")){
  let year = message.content.slice(4);
  let day = year * 360;
  let hour = day * 24;
  let min =  hour *60;
  let tuck = min * 60 ;
  let mill = tuck*1000;
  let Microseconds = mill *1000000;
  const msgEmbed = new Discord.MessageEmbed()
    .setThumbnail(`${message.author.avatarURL()}`)
    .setTitle('Please Type A `<NUMBER>`')
    .setAuthor(`${message.author.tag}     `)
    .setTimestamp()
    .setColor(color)
    .addFields( 
      { name: '\u200B', value: '\u200B' },
      { name: ' 💢 Day', value: `${day}`, inline: true },
      { name: ' ⭕ Hour', value: `${hour}`, inline: true },  
      { name: ' 💤 Min', value: `${min}`, inline: true },
      { name: ' 💫 Second', value: `${tuck}`, inline: true },
      { name: ' 💦 Milli second', value: `${mill}`, inline: true },
      { name: ' ⁉️ Microseconds', value: `${Microseconds}`, inline: true },
    );
    message.channel.send(msgEmbed);
}


});

////////
client.on("message", message => {	
	if (message.content.startsWith(prefix + "love")) {
	const onetoonehundred = Math.floor(Math.random() * 100)
	const usser = message.mentions.members.first()
	
	if(!usser) {
	const specify = new Discord.MessageEmbed()
	.setDescription('Please mention a user!')
	message.channel.send(specify)
	} else {
	
	if(usser.id === message.author.id) {
	const love2 = new Discord.MessageEmbed()
	.setTitle(`Love Rate ♥️`)
	.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
	.setDescription(`${message.author} loves ${usser} 100% <:4FE09E8A92C5470B870CB958C5A7216F:813184354628927529>
	nah joke.`)
	message.channel.send(love2)
	} else {
	
	const love = new Discord.MessageEmbed()
	.setTitle(`Love Rate :heart: `)
	.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
	.setDescription(`${message.author} loves ${usser} ${onetoonehundred}%`)
	.setColor(color)
	message.channel.send(love)
	}
	}
	}
	})
	////////
