let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/abea3a98a8a896c3106bf.jpg'
let text = `───「 *SEWA & PREMIUM* 」───

┌──「 HARGA SEWA 」
│
│𝇈 15 ʜᴀʀɪ 3,5ᴋ / ɢʀᴏᴜᴘ
│𝇈 30 ʜᴀʀɪ 7ᴋ / ɢʀᴏᴜᴘ
│𝇈 45 ʜᴀʀɪ 10,5ᴋ / ɢʀᴏᴜᴘ
│𝇈 60 ʜᴀʀɪ 14ᴋ / ɢʀᴏᴜᴘ
│𝇈 ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ / ɢʀᴏᴜᴘ 
│
└──「 *${author}* 」

┌──「 HARGA PREMIUM  」
│
│𝇈 15 ʜᴀʀɪ 5ᴋ 
│𝇈 30 ʜᴀʀɪ 10ᴋ 
│𝇈 45 ʜᴀʀɪ 15ᴋ 
│𝇈 60 ʜᴀʀɪ 20ᴋ 
│𝇈 ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ
│
└──「 *${author}* 」

┌──「 FITUR 430+ 」
│
│𝇈 ᴡᴇʟᴄᴏᴍᴇ
│𝇈 ᴋɪᴄᴋ
│𝇈 ᴀɴᴛɪʟɪɴᴋ
│𝇈 ꜱᴛɪᴋᴇʀ
│𝇈 ꜱᴏᴜɴᴅ
│𝇈 ᴀɴɪᴍᴇ
│𝇈 ꜱᴇɴᴅ ᴠɪʀᴛᴇx
│𝇈 ꜱᴇɴᴅ ʙᴜɢ
│𝇈 ɢᴀᴍᴇ ʀᴘɢ
│𝇈 ᴅʟʟ
│
└──「 *${author}* 」
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/6282114680993?text=Hallo admin, saya tertarik untuk menyewa bot SanXd'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot|buyprem)$/i

export default handler
