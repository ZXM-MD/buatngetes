let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '2'
let sn = '8'
let ss = '20'
let sp = '35'
let sv = '30'
//premium
let ph = '2'
let pn = '8'
let pp = '20'
let pv = '35'
let ppm = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (7 Hari)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_                                         
┊⫹⫺ *permanen:* = _${sv}k/grup (unlimited)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (7 Hari)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_                                       
┊⫹⫺ *Permanent:* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG SEWA* 」
┊⫹⫺ *Hemat:* _3k (7 Hari)_
┊⫹⫺ *Normal:* _6k (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG PREMIUM* 」
┊⫹⫺ *Hemat:* _3k (7 Hari)_
┊⫹⫺ *Normal:* _6k (1 bulan)_                                       
╰═┅═━––––––๑
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Dana:*
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* 2K • Sewa', description: 'PRICE: ' + sh + 'k (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* 8K • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* 30K • Sewa', description: 'PRICE: ' + sv + 'k (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* 2K • Premium', description: 'PRICE: ' + ph + 'k (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* 8K • Premium', description: 'PRICE: ' + pn + 'k (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* 30K • Premium', description: 'PRICE: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler