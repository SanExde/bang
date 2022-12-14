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
	title: "πPilih Usia Anda Di sini !",
	rows: [
	    {title: "πTahun Acak", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "πO L D",
	rows: [
	    {title: "πΈ30β’ Tahun β’", rowId: '.daftar ' + namae + '.30 '},
	    {title: "π29β’ Tahun β’", rowId: '.daftar ' + namae + '.29 '},
	    {title: "πΈ28β’ Tahun β’", rowId: '.daftar ' + namae + '.28 '},
	{title: "π27β’ Tahun β’", rowId: '.daftar ' + namae + '.27 '},
	{title: "πΈ26β’ Tahun β’", rowId: '.daftar ' + namae + '.26 '},
	{title: "π25β’ Tahun β’", rowId: '.daftar ' + namae + '.25 '},
	{title: "πΈ24β’ Tahun β’", rowId: '.daftar ' + namae + '.24 '},
	{title: "π23β’ Tahun β’", rowId: '.daftar ' + namae + '.23 '},
	{title: "πΈ22β’ Tahun β’", rowId: '.daftar ' + namae + '.22 '},
	{title: "π21β’ Tahun β’", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: "π MUDA",
	rows: [
	    {title: "πΈ20β’ Tahun β’", rowId: '.daftar ' + namae + '.20 '},
	    {title: "π19β’ Tahun β’", rowId: '.daftar ' + namae + '.19 '},
	    {title: "πΈ18β’ Tahun β’", rowId: '.daftar ' + namae + '.18 '},
	{title: "π17β’ Tahun β’", rowId: '.daftar ' + namae + '.17 '},
	{title: "πΈ16β’ Tahun β’", rowId: '.daftar ' + namae + '.16 '},
	{title: "π15β’ Tahun β’", rowId: '.daftar ' + namae + '.15 '},
	{title: "πΈ14β’ Tahun β’", rowId: '.daftar ' + namae + '.14 '},
	{title: "π13β’ Tahun β’", rowId: '.daftar ' + namae + '.13 '},
	{title: "πΈ12β’ Tahun β’", rowId: '.daftar ' + namae + '.12 '},
	{title: "π11β’ Tahun β’", rowId: '.daftar ' + namae + '.11 '},
	{title: "πΈ10β’ Tahun β’", rowId: '.daftar ' + namae + '.10 '},
	{title: "π9β’ Tahun β’", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `ββΊSilahkan Pilih Usia Anda Di Tombol bawah...`,
  footer: `β *YOUR NAME:* ${conn.getName(m.sender)}\n<β>  BOT PRIVATE\nCrate By SanXd`,
  title: "β£ββββγ Registration γβββββ£",
  buttonText: "Register",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `π?Kamu Sudah ter daftar di database, Apa kamu ingin mendaftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (γ-`ΟΒ΄-)'
  if (age < 5) throw 'Halah dasar bocil'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
  βββ γ *Successful Registration* γβββ
  .
βββγ *α΄sα΄Κs* γββ
ββΈ *sα΄α΄α΄α΄s:* βοΈ sα΄α΄α΄α΄ss?α΄Κ
ββΈ *Ι΄α΄α΄α΄:* ${name}
ββΈ *α΄Ι’α΄:* ${age} Κα΄α΄Κs
ββΈ *sΙ΄:* ${sn}
ββββββββββββ

Subscribe Yt : SanXd
`
  let buttonMessage= {
'document':{'url':'https://youtu.be/FS4QIXVC7es'},
'mimetype':global.ddocx,
'fileName':'β£ββββγ Registration γβββββ£',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtu.be/FS4QIXVC7es',
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/abea3a98a8a896c3106bf.jpg')).buffer(),
'sourceUrl':'https://youtu.be/FS4QIXVC7es'}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'MENU'},'type':1},
{'buttonId':'.salken','buttonText':{'displayText':'HALLO'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
