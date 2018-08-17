const _templates = {
    hashtag (data) {
        return `<h3>Use a hashtag do evento</h3>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;#${data.hashtag}</h1><br/>`;
    },
    newsletter (data) {
        return `<h2 class="hl">BrazilJS Weekly Newsletter</h2>
        <h3>Não deixe de se inscrever na BrazilJS Weekly<br/>São notícias, artigos, vídeos e demos, entre outros temas sobre o universo do desenvolvimento web.</h3><br/>`;
    },
    yt (data) {
        return `<h2>BrazilJS Channel</h2>
        <h3>Inscreva-se no canal da BrazilJS no Youtube.<br/>Palestras, tutoriais e a newsletter em vídeo.<br/>E não esqueça de ativar o "sininho" para receber as notificações!</h3>`;
    },
    social (data) {
        return `<h2>BrazilJS nas redes sociais</h2>
        <h3>A BrazilJS está presente em nas maiores redes sociais da atualidade.<br/>Facebook, twitter, instagram, youtube, slack...</h3>`;
    },
    live (data) {
        return `<h2>Transmissão ao vivo</h2>
        <h3>Avise seus amigos e amigas que não puderam vir!<br/>A BrazilJS está ao vivo no nosso canal do youtube.</h3>`;
    },
    coc (data) {
        return `<h2>Código de Conduta</h2>
        <h3>Lembre-se da importância do código de conduta que seguimos na BrazilJS.<br/>Acesse <a href="https://braziljs.org/coc">https://braziljs.org/coc</a></h3>`;
    },
    album (data) {
        return `<h2>Álbum de Figurinhas</h2>
        <h3>O álbum de figurinhas da BrazilJS:<br/>- Estimula o networking<br/>- É uma lembrança do evento<br/>- É o caderno de anotações<br/>- Tem a grade do evento</h3>`;
    },
    store (data) {
        return `<h2>Loja BrazilJS</h2>
        <h3>Não deixe de passar na loja da BrazilJS e conhecer alguns dos itens disponíveis.</h3>`;
    },
    now (data) {
        return `<h2>Você está assistindo...</h2>
        <div>${data.outerHTML}</div>`;
    },
    next (data) {
        return `<h2>A seguir... </h2>
        <div>${data.outerHTML}</div>`;
    },
    wifi (data) {
        return `<h2>Internet</h2>
        <h3>A internet deste ano é oferecida pela KingHost.<br/>Conecte-se na rede: <strong class="wifi-name">kinghost</strong></h3>`;
    },
    tt (data) {
        return data;
    },
    showtxt (data) {
        return `<h2>${data.title}</h2>
        <h3>${data.text}</h3>`;
    }
}