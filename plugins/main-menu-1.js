import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('August 08 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Hai Banh*
Saya Adalah Khoiyrul Botz Yang Dibuat Oleh Pak Zainal Dev's Pada Tanggal 16 12 2022.
Kalau Ada Yang Error Bisa Langsung Report Ke Owner.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ Mᴇɴᴜ','.? all'],['Lɪsᴛ Mᴇɴᴜ','.icikiwir']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `Ultah Pak Zainal Dev's🍀 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `PAK ZAINAL DEV'S`,          previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/ba25e84b7335e2f14de67.jpg`)).buffer(),
                        sourceUrl: 'https://youtube.com/@hagozox'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu)$/i
handler.register = true

export default handler
