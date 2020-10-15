exports.textTnC = () => {
    return `
Source code / bot is an open-source program (free) written using Javascript, you can use, copy, modify, combine, publish, distribute, sub-license, and or sell copies without removing the main author of the source code / bot.
By using this source code / bot, you agree to the following Terms and Conditions:
- Source code / bot does not store your data on our servers.
- The source code / bot is not responsible for the stickers you make from this bot and the videos, images and other data that you get from the source code / bot.
- Source code / bot may not be used for services that aim / contribute to:
    • sex / human trafficking
    • gambling
    • harmful addictive behavior
    • crime
    • violence (unless necessary to protect public safety)
    • burning forest/ deforestation
    • hate speech or discrimination based on age, sex, gender identity, race, sexuality, religion, nationality

Source Code BOT: https://github.com/YogaSakti/imageToSticker
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

Best regards, Yoga Sakti.`
}

exports.textMenu = (pushname) => {
    return `
Fala ${pushname || ''}! seu fdp

Alguns comandos

Sticker:
1. *#sticker*
Para converter uma imagem em adesivo, envie a imagem com a legenda #stickerou responda à imagem que foi enviada com #sticker.

2. *#stickers* _<Image Url>_
Para mudar a imagem do url para um adesivo.

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Para transformar um GIF em um adesivo (somente Giphy)

Downloader:

1. *#tiktok* _<post/url do vídeo>_
Retornará vídeo tiktok.

2. *#fb* _<url de postagem/vídeo>_
Retornará o link de download de vídeo do Facebook.

3. *#ig* _<post/url do vídeo>_
Retornará o link de download do vídeo do Instagram.

4. *#twt* _<url de postagem/vídeo>_
Retornará o link de download de vídeo do Twitter.
Etc:
        By: Kennedy`
}

exports.textAdmin = () => {
    return `
*⚠[Grupo de administradores apenas]⚠*
Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!

1. *#kick* @user
Removendo membros do grupo (pode ser mais de 1).

2. *#promote* @user
Promova membros para administradores do grupo.

3. *#demote* @user
Rebaixar administradores de grupo.

4. *#tagall*
Menção de todos os membros do grupo.`
}
