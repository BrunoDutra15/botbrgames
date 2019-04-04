const jimp = require('jimp')

async function main() {

    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    let avatar = await jimp.read('mascaraHEX.png')
    let fundo  = await jimp.read('fundo.png')

avatar.mask.fundo(mask).write('beta.png')

}