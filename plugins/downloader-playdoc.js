/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[βππππβ] π½πΎπΌπ±ππ΄ π³π΄ π»π° π²π°π½π²πΈπΎπ½ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π» π²πΎπΌπ°π½π³πΎ πΌπ°π π΄π» π½πΎπΌπ±ππ΄/ππΈπππ»πΎ π³π΄ ππ½π° π²π°π½π²πΈπΎπ½*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[βππππβ] π»πΎ ππΈπ΄π½ππΎ, π½πΎ πΏππ³π΄ π΄π½π²πΎπ½πππ°π π΄π» π°ππ³πΈπΎ/ππΈπ³π΄πΎ, πΈπ½ππ΄π½ππ΄ π²πΎπ½ πΎπππΎ π½πΎπΌπ±ππ΄/ππΈπππ»πΎ*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${url}`, buttonText: { displayText: 'π΅ ππππππππ π΅' }, type: 1 },
{ buttonId: `#ytmp4doc ${url}`, buttonText: { displayText: 'π₯ ππππππππ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π πππ ππππππππππ π' }, type: 1 }, ]    
let texto1 = `*βββπ ππππ ππππππππ πβββ*\n
β π *ππΈπππ»πΎ:* ${title}
β π *πΏππ±π»πΈπ²π°π³πΎ:* ${publishedTime}
β β *π³πππ°π²πΈπΎπ½:* ${durationH}
β π *ππΈπππ°π:* ${viewH}
β π *π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* ${description}`.trim()
let buttonMessage = {
"document": { url: "https://wa.me/51924358041" }, 
"fileName": 'β πΏ Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄', 
"mimetype": 'application/vnd.ms-excel',
"caption": texto1,
"fileLength": '99999999999999',
"mentions": [m.sender],
"footer": wm,
"buttons": buttons,
"headerType": 4,   
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `${title}`,
"mediaType": 2, 
"previewType": "VIDEO",
"thumbnail": await (await fetch(thumbnail)).buffer(),
"mediaUrl": `${url}`,
"sourceUrl": `https://github.com/QuetuoGamerYT/Bot_uwu_2.0.git` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
m.reply('*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*')}}
handler.command = /^play3|playdoc?$/i
export default handler
