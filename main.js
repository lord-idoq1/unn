// 𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝘽𝙮 idoganz
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID } = require("@adiwajshing/baileys-md");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siang☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam🌃";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["62859141472140-1621430788@g.us"]
prefix = '#'
shp = '⬡'
owner = "6285609217332@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))
console.log(color(`[ • SELFBOT By Idoganz • ]` ,'cyan'))
console.log(color(`< ================================================== >`, 'cyan'))
console.log(color(`[•]`, 'aqua'), color(`Nama Bot : xtream Bot`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Status : Online!`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Owner : ido Senpai`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Waktu : ${time2} Server`, 'white'))
console.log(color(`< ================================================== >`, 'cyan'))

const starts = async (client = new WAConnection()) => {
    client.logger.level = 'warn'
    client.version = [2, 2138, 50]
    client.browserDescription = [ 'ido ganz', 'ubuntu', '3.0' ]
    console.log(banner.string)
    client.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })
    
  fs.existsSync('./session.json') && client.loadAuthInfo('./session.json');
  client.on('connecting', () => {
  	console.log("[ SCURITY ]", color("CONNECTING GAY","cyan"));
  });
  
  client.on('open', (key) => {
  	console.log("[ SCURITY ]",color("CONNECTED GAY","green"));
  	client.sendMessage("6285609217332@s.whatsapp.net", "*Sukses Tersambung 🗿*\nido Ganteng aowkwkw", MessageType.text);
  });
  await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync(
    "./session.json",
    JSON.stringify(client.base64EncodedAuthInfo(), null, "\t")
  );
    
client.on("group-update", async (anu) => {
    metdata = await client.groupMetadata(anu.jid);
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\n� Deskripsi Baru : ${anu.desc}`;
      client.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
  });
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "𝘏𝘈𝘓𝘖 𝘚𝘌𝘔𝘜𝘈 ㋛︎", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `🌹 *Hɪ* @${num.split('@')[0]}\n🌹 *Bɪᴏ* : *${thu.status}*\n🌹 *Mᴇᴍʙᴇʀs : ${memeg}*\n🌹 *Wᴇʟᴄᴏᴍᴇ Tᴏ* \n *${mdata.subject}*\n🌹 *Dᴏɴᴛ Fᴏʀɢᴇᴛ Dɪsᴄʀɪᴘᴛɪᴏɴ*\n ${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1}, {buttonId:`${prefix}menucatalog`,buttonText:{displayText:'SC'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Gᴏᴏᴅ Bʏᴇ Bʀᴏᴛʜᴇʀ* 👋\n@${num.split('@')[0]}\n *Rᴇsᴛ Nᴏᴡ Pᴇᴀᴄᴇ* 🌹\n${time_wel} -  ${time_welc}`
                prmBut = [{buttonId:`${prefix}h`,buttonText:{displayText:'GET OUT 🚪'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'SC'}, type:1}]
                prmButt = { contentText: ` `, footerText: `${out}`, buttons: prmBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                client.sendMessage(mdata.id, prmButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
      /*welcom = true
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        if (welcom === false) return
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `𝗛𝗮𝗹𝗼 ${anu_user} 𝗦𝗲𝗹𝗮𝗺𝗮𝘁 𝗗𝗮𝘁𝗮𝗻𝗴 シ︎`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `verify`, buttonText: { displayText: "𝑽𝒆𝒓𝒊𝒇𝒚㋛︎" }, type: 1 },
          { buttonId: `command`, buttonText: { displayText: "𝑪𝒍𝒊𝒄𝒌 𝑴𝒆𝒏𝒖㋛︎" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: `㋛ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦 ${runtime(process.uptime())} \n 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 ${fakeyoi}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `𝗦𝗮𝘆𝗼𝗻𝗮𝗿𝗮 ${anu_user} 👋`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `y`, buttonText: { displayText: "𝘉𝘺𝘦𝘦シ︎" }, type: 1 },
          { buttonId: `runtime`, buttonText: { displayText: "𝘙𝘶𝘯𝘵𝘪𝘮𝘦シ︎" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `㋛︎ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦 ${runtime(process.uptime())} \n 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 ${fakeyoi}🌹`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }*/
      
      if (anu.action == 'promote' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)     
              const upil = mdata.participants.length       
             const asu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco5 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco6 = bosco5.message["ephemeralMessage"] ? bosco5.message.ephemeralMessage : bosco5
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = ` [ PROMOTE DETECTED ] @${num.split('@')[0]}\n🌹 *Bɪᴏ* : *${asu.status}*\n🌹 *MEMBER : ${upil}*\n🌹 *GROUP* \n *${mdata.subject}*\n🌹 ${time_wel} -  ${time_welc}`
                tololBut = [{buttonId:`${prefix}menu`,buttonText:{displayText:'BACK TO MENU'},type:1}, {buttonId:`${prefix}menucatalog`,buttonText:{displayText:'SC'},type:1}]
                tololButt = { contentText: ` `, footerText: `${teks}`, buttons: tololBut, headerType: 6, locationMessage: bosco6.message.locationMessage}
                client.sendMessage(mdata.id, tololButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'demote' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco7 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco8 = bosco7.message["ephemeralMessage"] ? bosco7.message.ephemeralMessage : bosco7
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `[ DEMOTE DETECTED ]\n@${num.split('@')[0]}\n *USER DEMOTE 🌹\n${time_wel} -  ${time_welc}`
                udgBut = [{buttonId:`${prefix}p`,buttonText:{displayText:'BACK TO MENU'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'SC'}, type:1}]
                udgButt = { contentText: ` `, footerText: `${out}`, buttons: udgBut, headerType: 6, locationMessage: bosco7.message.locationMessage}
                client.sendMessage(mdata.id, udgButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
     
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = true
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];
     client.sendMessage(
      m.key.remoteJid,
      `\`\`\`「 𝗔𝗡𝗧𝗜 𝗗𝗘𝗟𝗘𝗧𝗘 」\`\`\`
  •> Nama : @${m.participant.split("@")[0]}
  •> Waktu : ${jam} ${week} ${calender}
  •> Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
clientt.sendMessage(call, `*Sorry ${client.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => clientt.blockUser(call, "add"))
})
  clientt.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
// 𝙅𝙖𝙣 𝙃𝙖𝙥𝙪𝙨 𝘾𝙧𝙚𝙙𝙞𝙩 𝙂𝙬 𝘼𝙨𝙪𝙪𝙪
