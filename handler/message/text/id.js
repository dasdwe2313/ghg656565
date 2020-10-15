exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas sticker yang anda buat dari bot ini serta video, gambar maupun data lainnya yang anda dapatkan dari Source code / bot ini.
- Source code / bot tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan

NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs

kekekekeke.`
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

Etc:
1. *#translate* _<kode bahasa>_
Para interpretar mensagens no idioma especificado.
Uso: Responder/citar/responder a mensagem que você deseja traduzir com _*#translate id*_ <- id é o código do idioma. o código do idioma pode ser visto em **

2. *#resi* _<kurir>_ _<nomer resi>_
Para verificar o status de entrega de mercadorias, lista de mensageiros: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Uso: enviar mensagem com o formato _*#resi jne 1238757632*_

3. *#meme* _<texto superior>_ | _<texto inferior>_
Para criar um meme com texto superior e inferior
Uso: enviar imagem com legenda _*# meme top me | você sob*_, ou você também pode responder a uma imagem existente.


        By: Kennedy`
}

exports.textAdmin = () => {
    return `
*⚠[Administrador de grupo apenas]⚠*
Aqui estão alguns dos recursos de administração de grupo incluídos neste bot!

1. *#kick* @user
Para remover membros do grupo (pode ser mais de 1).

2. *#promova*@user
Para promover membros a administradores do grupo.

3. *#rebaixar* @user
Para rebaixar os administradores do Grupo.

4. *#tagall*
Para mencionar todos os membros do grupo. (Apenas Premium)

5. *#del*
Para deletar uma mensagem do bot (responda a mensagem do bot com #del) `
}

