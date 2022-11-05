let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} *DOWNLOAD* ${htka}

           WhatsApp Imune ♨️
    
┌───「 *Kelebihan*  」──
│𝇈 Anti Virtex✔️
│𝇈 Anti lag✔️
│𝇈 Fitur war✔️
│𝇈 Anti Bug troli, slayer Dll✔️
│𝇈 No Password ✔️
└──────`
const templateButtons = [
    {index: 1, urlButton: {displayText: '↗️Link', url: 'https://cararegistrasi.com/cMyXZwsK'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^waimune1$/i

export default handler
