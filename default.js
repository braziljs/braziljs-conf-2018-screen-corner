const STATE = {
    current: null
};

document.getElementById('btn-enable-magenta').addEventListener('click', event => {
    const cur = document.body.dataset.magenta;
    document.body.dataset.magenta = cur === '1' ? '0' : '1';
});

function getDataFor (kind) {
    return new Promise((resolve, reject) => {
        switch(kind) {
            case 'hashtag': {
                resolve({
                    hashtag: "BrazilJS"
                });
                break;
            }
            case 'showtxt': {
                resolve({
                    title: document.getElementById('title').value || 'Notificação',
                    text: document.getElementById('description').value.replace(/\n/, '<br/>')
                });
                document.body.dataset.showTextInput = 0;
                break;
            }
            case 'now': {
                STATE.type = 'now';
                if (STATE.watchNext) {
                    // document.body.dataset.showWatchNext = 0;
                    document.body.dataset.showTalksList = 0;
                    resolve(STATE.watchNext);
                    STATE.watchNext = null;
                } else {
                    document.body.dataset.showTalksList = 1;
                }
                return;
                break;
            }
            case 'next': {
                STATE.type = 'next';
                if (STATE.watchNext) {
                    // document.body.dataset.showWatchNext = 0;
                    document.body.dataset.showTalksList = 0;
                    resolve(STATE.watchNext);
                    STATE.watchNext = null;
                } else {
                    document.body.dataset.showTalksList = 1;
                }
                return;
                break;
            }
            case 'tt': {
                var config2 = {
                    // id: '347099293930377217',
                    // id: '1027985239027720194',
                    profile: { 'screenName': 'braziljs' },
                    // domId: 'twitter-tmp-container',
                    maxTweets: 1,
                    enableLinks: true, 
                    showUser: true,
                    showTime: false,
                    customCallback: content => {
                        resolve(content);
                    },
                    lang: 'en'
                };
                twitterFetcher.fetch(config2);
                break;
            }
            default: {
                resolve({});
            }
        }
    });
}

async function applyTpl (kind) {
    if (STATE.current === kind && kind !== 'showtxt') {
        return;
    }
    if (kind === 'txt') {
        document.body.dataset.showTextInput = 1;
        return;
    }
    if (kind === 'clear') {
        document.body.dataset.showTextInput = 0;
        document.body.dataset.hide = 1;
        document.getElementById('cur-content').dataset.kind = kind;
        STATE.current = null;
        return;
    }

    document.body.dataset.hide = 1;
    setTimeout(async _ => {
        const tpl = _templates[kind](await getDataFor(kind));
        const el = document.getElementById('cur-content');
        el.innerHTML = `<div>${tpl}</div>`;
        el.dataset.kind = kind;
        STATE.current = kind;
        setTimeout(_ => {
            document.body.dataset.hide = 0;
        }, 10);
    }, STATE.current ? 500 : 20);
}

Array.from(document.querySelectorAll('.options-list')).forEach(button => {
    button.addEventListener('click', event => {
        applyTpl(event.target.dataset.kind);
    });
});

document.querySelector('.btn-cancel').addEventListener('click', event => {
    document.body.dataset.showTextInput = 0;
});

document.querySelector('.btn-send').addEventListener('click', event => {
    applyTpl('showtxt');
});

(function () {
    let talksList = '';
    CONF_DATA.forEach(day => {
        talksList += `<div class="day">${day.date}</div>`;
        day.talks.forEach(talk => {
            // "type": "intervention"
            talksList += `<div class="talk-container">`;
                talksList += `<div class="talk-time">${talk.time}</div>`;
                talksList += `<div class="talk-title">${talk.title}</div>`;
            if (talk.speakers) {
                talksList += `<div class="speakers-container">`;
                talk.speakers.forEach(speaker => {
                    talksList += `<div class="speaker-pic" style="background-image: url(speakers/${speaker.pic});"></div> <div class="speaker-name">${speaker.name}</div>`;
                });
                talksList += `</div>`;
            }
            talksList += `</div>`;
        });
    });
    document.querySelector('.talks-list-container .list-container').innerHTML = talksList;

    Array.from(document.querySelectorAll('.talk-container')).forEach(el => {
        el.addEventListener('click', function (event) {
            STATE.watchNext = this;
            applyTpl(STATE.type || 'next');
        });
    });

    document.querySelector('.talks-close-btn').addEventListener('click', function (event) {
        document.body.dataset.showTalksList = 0;
    });
})();


