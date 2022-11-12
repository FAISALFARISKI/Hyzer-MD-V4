var { promisify } = require('util')
var _gis = require('g-i-s')
var gis = promisify(_gis)
var handler  = async (msg, { 
client, args, text, usedPrefix, command 
}) => {
if (!text) return msg.reply(`🚩 Gunakan format ${usedPrefix + command} <query>\n\n*Contoh :* ${usedPrefix + command} anime`)
var results = await gis(text) || []
var { url, width, height } = Func.pickRandom(results) || {}
if (!url) return msg.reply('🚩 Not Found')
client.sendImage(msg.from, url, `*乂 G O O G L E  -  I M A G E*

    *◦ Query :* ${text}
    *◦ Width :* ${width}
    *◦ Height :* ${height}
`.trim(), msg, { isUrl:true, buttons: [{buttonId: `.gimage ${text}`, buttonText: {displayText: 'NEXT'}, type: 1}], headerType: 5, footer: wm })
}
handler.help = ['image <query>', 'gimage <query>', 'googleimage <query>']
handler.tags = ['web']
handler.command = /^(gimage|googleimage|image)$/i

module.exports = handler
