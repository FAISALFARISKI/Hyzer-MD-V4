const handler = async (msg, { client }) => {
msg.reply(Func.runtime(process.uptime()))
}
handler.tags = ['info']
handler.help = ['runtime','uptime','rt']
handler.command = /^(runtime|uptime|rt)$/i

module.exports = handler