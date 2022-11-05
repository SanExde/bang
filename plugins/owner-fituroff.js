import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇  *「 Sukses Menonaktifkan Fitur 」*
┗━━━━━━━━━━━━━━━━━━━━┅
`.trim()// Tambah sendiri kalo mau
await conn.reply(m.chat, list, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'Ini Aku Saranin Kak',  
    sourceUrl: sgc, 
    thumbnail: await (await fetch(`https://i.ibb.co/RQ785c2/Img-Resizer-20221104-2335-26922.jpg`)).buffer()
      }}
     })
}    
handler.command = /^fituroff$/i

handler.owner = true

export default handler
