import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "- - - - 『 ▮ 📆 Pilih Umur Kamu Disini !」 』 - - - -",
	rows: [
	    {title: "📛 )ഒ Random Tahun", rowId: '.daftar ' + namae + '.' + pickRandom(['30','20','18','16','13']), description: "✧ Kira² beliau ini mendapatkan umur berapa ya 💀"},
	]
    },
    {
	title: "- - - - 『 ▮ 🎲 T U A 」 』 - - - -",
	rows: [
	    {title: "😝 〉ɞ 『 Kuliah 』", rowId: '.daftar ' + namae + '.20 ', description: "✧ Wah udah kerja nih 😅"},
	    {title: "😑 〉ɞ 『 Pengangguran 』", rowId: '.daftar ' + namae + '.18 ', description: "✧ Wah ada beban keluarga nih 🙃"},
	    {title: "😥 〉ɞ 『 Om Om 』", rowId: '.daftar ' + namae + '.30 ', description: "✧ Om halalin aku donh:v 🤭"},
	]
    },
    {
	title: "- - - - 『 ▮ 🥊 B O C A H 」 』 - - - -",
	rows: [
	    {title: "🗿Sma", rowId: '.daftar ' + namae + '.16 ', description: "✧ Saya masih Sma kak 🙄"},
	    {title: "😱Smk", rowId: '.daftar ' + namae + '.16 ', description: "✧ Saya masih Smk kak 😒"
	    {title: "🤡Esempeh", rowId: '.daftar ' + namae + '.13 ', description: "✧ Saya masih Smp kak 😏"
	{title: "🤪Emtees", rowId: '.daftar ' + namae + '.13 ', description: "✧ Saya masih Mts kak 🥶"
	{title: "🤓Esdeh", rowId: '.daftar ' + namae + '.5 ', description: "✧ Saya masih Sd kak 😋"
	{title: "😜Teka", rowId: '.daftar ' + namae + '.4 ', description: "✧ Saya masih Tk kak 🤪"
	{title: "😐Paud", rowId: '.daftar ' + namae + '.4 ', description: "✧ Saya masih Paud kak 🥴"
	]
	},
]

const listMessage = {
  text: `│›Silahkan pilih umur kamu dibawah ini agar bisa terverifikasi data bot kami`,
  footer: `┗ *ʏᴏᴜʀ ɴᴀᴍᴇ:* ${conn.getName(m.sender)}\n<❔>  BOT PUBLIC\nSUBSCRIBE YT PAK ZAINAL DEV'S\nhttps://youtube.com/@hagozox`,
  title: "▢━━━━「 Registrasi 」━━━━▢",
  buttonText: "ഒ Registrasi ഒ",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `📮Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  ━━━━ 「 *Registrasi Berhasil!* 」━━━
  .
╭━━「 *ᴜsᴇʀs* 」
│▸ *sᴛᴀᴛᴜs:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│▸ *ɴᴀᴍᴇ:* ${name}
│▸ *ᴀɢᴇ:* ${age} ʏᴇᴀʀs
│▸ *sɴ:* ${sn}
╰═┅═━––––––๑

ꜱᴜʙꜱᴄʀɪʙᴇ ʏᴛ : ᴘᴀᴋ ᴢᴀɪɴᴀʟ ᴅᴇᴠ'ꜱ
`
  let buttonMessage= {
'document':{'url':'https://youtube.com/@hagozox'},
'mimetype':global.ddocx,
'fileName':'▢━━━━「 Registrasi 」━━━━▢',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtube.com/@hagozox',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/a5eb5169ab1330a537e0b.jpg')).buffer(),
'sourceUrl':'https://youtube.com/@hagozox'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'⚡ Menu'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'👋 Hallo Bot'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
