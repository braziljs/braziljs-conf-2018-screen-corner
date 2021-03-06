const CONF_DATA = [
    {
      "day": 1,
      "date": "24/08",
      "talks": [
        {
          "time": "08:00",
          "type": "intervention",
          "title": "Checkin"
        },
        {
          "time": "09:30",
          "type": "intervention",
          "title": "Abertura / Apertura / Opening"
        },
        {
          "time": "09:40",
          "type": "talk",
          "title": "The Intersections of New Web APIs",
          "desc": "In \"The Intersections of New Web APIs\", we very quickly introduce 4 new front end Web APIs: CSS Grid, Web Components, Custom CSS Properties and the Web Animation API. We then explore in more detail the points where these APIs interact to have powerful effects on the way we build websites",
          "speakers": [
            {
              "name": "Ada Rose Cannon",
              "pic": "ada-rose-cannon.jpeg",
              "bio": "Developer Advocate da Samsung para o navegador <a href=\"https://twitter.com/SamsungInternet\">@SamsungInternet</a>. Web fangirl. Geralmente em Londres. WebXR Device API, Web Components, PWA.",
              "faceAt": "center top"
            }
          ]
        },
        {
          "time": "10:20",
          "type": "intervention",
          "title": "Coffee Break"
        },
        {
          "time": "10:50",
          "type": "talk",
          "title": "A Jornada Para A Pergunta Certa",
          "desc": "Fagner Brack entra em detalhes sobre como sua experiência em uma biblioteca Open Source mudou a maneira como ele vê a Web.",
          "speakers": [
            {
              "name": "Fagner Martins",
              "pic": "fagner-martins.jpg",
              "bio": "Fagner Martins works as a Software Engineer at MYOB Australia. In his spare time, Fagner likes to read books and blog posts. He is also a blog writer, Redditor, and Open Source contributor.",
              "faceAt": "center top"
            }
          ]
        },
        {
          "time": "11:20",
          "type": "talk",
          "title": "Bringing Brazil to the Cloud, Now",
          "desc": "We started the Now platform with the idea to democratize cloud computing. Unlike other cloud providers, we make sure you don't even have to select your deployment location. If the cloud is real, it should automatically deploy above your head, right?<br/>In this talk we'll share our progress in deliverying on this mission. How we expanded from California, to Brussels, to a global DNS and CDN network, and what our future expansion looks like.<br/>In particular, we'll show how we can bring this extraordinary power of instant and worry-free deployment and scalability to Brazil and the rest of South America, with extremely low latency at the lowest possible cost.",
          "speakers": [
            {
              "name": "Guillermo Rauch",
              "pic": "guillermo.jpeg",
              "bio": "Before starting ▲ZEIT in November 2015, Guillermo was the CTO and co-founder of LearnBoost and Cloudup, acquired by Automattic in 2013. He's the creator of several popular Node.JS open source libraries like socket.io, mongoose and slackin. Prior to Node.JS, he was a core developer of the MooTools frontend toolkit."
            },
            {
              "name": "Matheus Fernandes",
              "pic": "matheus-fernandes.jpeg",
              "bio": "ZEIT's SVP of Engineering and also a software engineer who is passionate about the web and the cloud. Wrote Kap with some friends he met while chatting about Hyper on zeit.chat. Before that, he spent some time in college planning how he would quit it to follow his dream of living and working in San Francisco."
            }
          ]
        },
        {
          "time": "12:00",
          "type": "intervention",
          "title": "Almoço / Almuerzo / Lunch"
        },
        {
          "time": "14:00",
          "type": "talk",
          "title": "Extendendo o CSS com JavaScript e magia - feat. Houdini",
          "desc": "Os dias da incompatibilidade do CSS podem estar contados. Vamos ver como as novidades da spec do Houdini CSS pode mudar nossa forma de lidar com browsers antigos e dar mais poder para a criatividade nas coisas com CSS via JavaScript sem travar a main thread.",
          "speakers": [
            {
              "name": "Mario Souto",
              "pic": "mario-souto.jpeg",
              "bio": "Vivo no 220v, tô sempre procurando coisas novas para fazer e finalmente estou me achando no mundo dos esportes gastando essa energia com corridas. Adoro codar desafios aleatórios, fazer sites, ensinar sobre, e hoje consigo fazer tudo isso pela Caelum e Alura.",
              "faceAt": "center right"
            }
          ]
        },
        {
          "time": "14:40",
          "type": "talk",
          "title": "The tech behind a design system that scales",
          "desc": "Design systems are a powerful way to scale a visual language across different products and technologies. This talk covers what a design system is and how a React-based tech stack can power a design system that scales as the number of developers, products, and parallel processes grows. You'll also learn about critical considerations and best practices you'll want to apply when introducing a design system at your company.",
          "speakers": [
            {
              "name": "Monica Lent",
              "pic": "monica-lent.jpg",
              "bio": "Monica is the Frontend Lead at SumUp, a multinational FinTech startup. Before moving to Berlin, she worked in domains such as natural language processing and cloud technologies.",
              "faceAt": "center bottom"
            }
          ]
        },
        {
          "time": "15:20",
          "type": "talk",
          "title": "TC39 and elegantly handling missing values in JavaScript",
          "desc": "JavaScript code frequently has to deal with missing values, but current mechanisms are repetitive or error-prone. Some are proposing that we change the JavaScript programming language, in a way inspired by other languages like Swift: the optional chaining and nullish coalescing operators.<br/>We got a big upgrade to JavaScript with ES6, but TC39, the standards committee which defines the programming language, is still making improvements with this and other proposals. In this talk, I'll explain what kinds of things TC39 thinks about, how it goes about improving the programming language, and how you can participate to shape the future of JavaScript.",
          "speakers": [
            {
              "name": "Daniel Ehrenberg",
              "pic": "daniel-ehrenberg.jpg",
              "bio": "I work on TC39 and occasionally contribute to V8. I work for Igalia, a Galician consultancy which adds features to JavaScript and the Web Platform, as well as embedding web browsers in various products. I live with my partner outside of Barcelona.",
              "faceAt": "center center"
            }
          ]
        },
        {
          "time": "16:00",
          "type": "talk",
          "title": "Construindo uma blockchain com JS",
          "desc": "",
          "speakers": [
            {
              "name": "Caroline Soares",
              "pic": "caroline-soares.jpg",
              "bio": "Desenvolvedora Front end, estudante de Sistemas para Internet, podcaster e professora.",
              "faceAt": "center center"
            }
          ]
        },
        {
          "time": "16:40",
          "type": "intervention",
          "title": "Coffee Break"
        },
        {
          "time": "17:10",
          "type": "talk",
          "title": "Honey, I Shrunk the Scripts! — the secret life of JS on microcontrollers",
          "desc": "In \"JavaScript World Domination\", an article I have published three years ago to serve as a comprehensive JavaScript-almanac hardware was almost like an afterthought, a footnote on the last page. Even back then, though, the writing was already on the wall — it was only a matter of time until JavaScript's triumphant march reached the devices of the embedded ecosystem…<br/>Indeed, today there's already a thriving ecosystem of tiny JavaScript-dialects: they are powering a wide variety of miniature computers (colloquially only referred to as \"IoT\"), from industry automation to smartwatches, they are everywhere. If you have never heard of JerryScript, duktape, or V7 before this talk is your chance to see them in action!",
          "speakers": [
            {
              "name": "István Szmozsánszky",
              "pic": "flaki.png",
              "bio": "István Szmozsánszky (or Flaki, for short) teaches JS & frontend development, working with Mozilla's DevRel team promoting modern web technologies. He loves JavaScript internals & playing (quite literally!) with microcontrollers.",
              "faceAt": "center left"
            }
          ]
        },
        {
          "time": "17:40",
          "type": "talk",
          "title": "How to sort your socks using Javascript",
          "desc": "No matter your experience in JS, you have probably came across the Array#sort method at some point. Do you remember the first time you tried sorting numbers? You were probably astonished that the sort method does not sort things out quite as we might expect.                Believe it or not, there is actually much more going on than meets the eye! Let’s get our computer science hat on and explore some useful sorting algorithms currently implemented behind the native sort method by JS engines such as V8 and SpiderMonkey. As a developer, learning how these algorithms work, why and when to use them will help you create more performant and consistent applications!",
          "speakers": [
            {
              "name": "Claudia Hernández",
              "pic": "claudia-hernandez.jpg",
              "bio": "Claudia Hernández is a mexican frontend developer at Auth0. She has previously worked at Dailymotion in Paris and on projects for companies such as Air France, EDF, Groupe SEB and Aéroport de Paris. Claudia has a computer science background and loves learning emerging web technologies. When she is not coding, chances are you’ll find her reading a book ! Claudia also loves travelling and discovering new cultures.",
              "faceAt": "center center"
            }
          ]
        },
        {
          "time": "18:20",
          "type": "talk",
          "title": "V8 internals for JavaScript developers",
          "desc": "",
          "speakers": [
            {
              "name": "Mathias Bynens",
              "pic": "mathias-bynens.jpeg",
              "bio": "Mathias works on the V8 JavaScript engine at Google and on the ECMAScript standard through TC39.",
              "faceAt": "center left"
            }
          ]
        },
        {
          "time": "19:00",
          "type": "intervention",
          "title": "Encerramento / Cierre / Closing"
        }
      ]
    },
  
  
  
  
  
  
  
  
    {
      "day": 2,
      "date": "25/08",
      "talks": [
        {
          "time": "08:30",
          "type": "intervention",
          "title": "Checkin"
        },
        {
          "time": "09:30",
          "type": "intervention",
          "title": "Abertura / Apertura / Opening"
        },
        {
          "time": "09:40",
          "type": "talk",
          "title": "Becoming a security minded developer",
          "desc": "",
          "speakers": [
            {
              "name": "Adam Baldwin",
              "pic": "adam-baldwin.jpeg",
              "bio": "Adam Baldwin is the Head of Security at npm inc. He is the Founder of the Node Security Project & talks about javascript security non-stop. In his free time Adam enjoys doing basically the exact same stuff he does for work, also raising chickens, and spending as much time as possible with his wife and 2 children.",
              "faceAt": "center top"
            }
          ]
        },
        {
          "time": "10:20",
          "type": "intervention",
          "title": "Coffee Break"
        },
        {
          "time": "10:50",
          "type": "talk",
          "title": "AMP is a Thing for Programmers",
          "desc": "",
          "speakers": [
            {
              "name": "Ben Morss",
              "pic": "ben-morss.jpg",
              "bio": "Ben Morss é um Developer Advocate no Google, onde trabalha focado em aprimorar a Web a ser mais rápida e mais bonita. Antes do Google, trabalhou no New York Times e na AOL, e antes disso era músico em tempo integral. Ele se formou em Ciências da Computação em Harvard e PhD em Música na Universidade da Califórnia. Há rumores de que ele ainda dirige uma banda chamada Ancient Babies."
            },
            {
              "name": "Raghu Simha",
              "pic": "raghu-simha.jpg",
              "bio": "Raghu Simha é engenheiro de software baseado em NYC na equipe de AMP do Google, que desenvolve as ferramentas e a infraestrutura usadas pelos engenheiros da AMP e pelos colaboradores externos. Antes da AMP, Raghu trabalhou em vários projetos no Chrome e no Hangouts. Mais recentemente, ele fez uma gestão de produto no Maps, onde lançou comandos de voz na navegação. Ele possui mestrado pela Universidade do Texas em Austin.",
              "faceAt": "center center"
            }
          ]
        },
        {
          "time": "11:20",
          "type": "talk",
          "title": "Keep Betting On JS",
          "desc": "",
          "speakers": [
            {
              "name": "Kyle Simpson (@getify)",
              "pic": "kyle-simpson.jpeg",
              "bio": "É um escritor, palestrante, professor, e contribuidor em projetos open-source. Evangelista da open web, apaixonado por todas as coisas relacionadas ao javascript.",
              "faceAt": "center center"
            }
          ]
        },
        {
          "time": "12:00",
          "type": "intervention",
          "title": "Almoço / Almuerzo / Lunch"
        },
        {
          "time": "13:30",
          "type": "talk",
          "title": "Conceitos e aplicações de Promises no JavaScript",
          "desc": "Promises são objetos que representam valores e podem estar disponíveis agora, depois ou nunca, permitem que o fluxo de um código em JavaScript continue a ser executado simultaneamente em várias rotinas, mesmo que o primeiro retorno ainda não tenha sido finalizado. Também asseguram que os dados que estão sendo preparados, poderão ser utilizados na execução do código.<br/><br/>Os elementos que serão abordados nesta palestra são: sintaxe, propriedades, métodos, protótipo, exemplo e compatibilidades de navegadores.",
          "speakers": [
            {
              "name": "Aline Estevo da silva",
              "pic": "aline-estevo.jpg",
              "bio": "Estudante do último semestre de Análise e Desenvolvimento de Sistemas, assistente de suporte na empresa Hostgator sou apaixonada por tecnologia, gosto de aprender sobre tudo e Javeira nas horas vagas!"
            }
          ]
        },
        {
          "time": "14:00",
          "type": "talk",
          "title": "React. Em busca da arquitetura ideal",
          "desc": "React é uma ferramenta fantástica para criar componentes. Pelo fato da biblioteca dar muita liberdade ao desenvolvedor, com o amadurecimento da stack e aplicações cada vez mais complexas, o desafio é: Como organizar melhor o código?<br/>O conteúdo da palestra será composto de exemplos de código próximos do mundo real, referências de artigos, diagramas para ilustrar camadas da codebase e code show.",
          "speakers": [
            {
              "name": "Milson Junior",
              "pic": "milson-jr.png",
              "bio": "Senior Frontend Developer na Red Ventures. Só mais um apaixonado por Javascript que tem colaborado com coisas incríveis nos últimos anos, vindo de São Paulo."
            }
          ]
        },
        {
          "time": "14:40",
          "type": "talk",
          "title": "(turn (and face (the strange))): Construindo front-ends funcionais com ClojureScript",
          "desc": "O Clojure entrou nas nossas vidas em 2007 como uma das variações mais poderosas e consistentes do Lisp, e desde então tem sido amplamente adotada pelos membros da comunidade funcional. Recentemente o Clojure ganhou um novo amigo chamado ClojureScript, que nos permite usar Clojure pra construir front ends robustos, confiáveis e funcionais. Você se vê frequentemente lutando contra um escopo bagunçado ou o famoso callback hell em javascript? Sempre quis usar um conjunto ricos de estruturas de dados nativas, macros e ainda levar de brinde as otimizações de performance da JVM? Trago ótimas notícias pra você! Nessa talk veremos como se utilizar dos super poderes que o ClojureScript pode trazer para o front end e os benefícios da programação funcional.",
          "speakers": [
            {
              "name": "Isa Silveira",
              "pic": "isa-silveira.jpg",
              "bio": "Isa é uma engenheira de software construindo grandes produtos digitais na Work&Co. Ao longo de sua carreira, ela já atuou na área da pesquisa científica, back-end e front-end para web e mobile, e trabalhou em projeto para clientes internacionais como a Universidade de Stanford, Banco Votorantim e o Grupo Estadão. Não nega uma cerveja e uma boa conversa, no seu tempo livre ela gosta de praticar slalom nos patins e brincar com seus cachorros.",
              "faceAt": "center top"
            }
          ]
        },
        {
          "time": "15:20",
          "type": "talk",
          "title": "Designing for developers, developing for designers",
          "desc": "Os melhores produtos digitais do mundo nascem quando designers e desenvolvedores trabalham juntos se desafiando a enxergar perspectivas diferentes. Vamos contar um pouco da nossa jornada construindo um editor de páginas WYSIWYG baseado em React JS e como a interação designer-desenvolvedor foi essencial para a resolução de problemas complexos.",
          "speakers": [
            {
              "name": "Natália Medina",
              "pic": "natalia-medina.jpg",
              "bio": "Product Designer at VTEX focused on UX, Interaction and Visual Design. Previously worked at globo.com, UFRJ and LNCC. Loves everything related  to technology, data and people.",
              "faceAt": "center right"
            },
            {
              "name": "Guilherme Rodrigues",
              "pic": "guilherme-rodrigues.jpg",
              "bio": "Lead Software Engineer at VTEX focused on serverless, full-stack developer tools, graduated at PUC-Rio Information Systems '13. Previously led the front end development team and contributed to the current continuous deployment infrastructure which powers 800 deploys per month in 80+ microservices."
            }
          ]
        },
        {
          "time": "16:00",
          "type": "talk",
          "title": "Thoughtful animations with AMP",
          "desc": "The two main challenges you face if you’re operating a website are attracting visitors to your site and then getting them to convert (either by signing up to newsletters, making a purchase, or sharing content). Achieving a high visitor rate and high conversion rate is the Holy Grail for site owners but as expected it is not easy and requires the application of a range of tactics.<br/>In this talk we’re going to take a look at how animation can help to boost conversions and explore why if used properly it can be an effective tool that can be used on any site and how the AMP team is delivering components that keep both the user and the developer at the forefront. It will also go through the principles we are keeping in mind as we develop animation presets that are ready to use out of the box.",
          "speakers": [
            {
              "name": "Naina Raisinghani",
              "pic": "naina.jpg",
              "bio": "Naina é Engenheira de Software no Google. Adora trabalhar com problemas desafiadores, estar cercado por pessoas incríveis e aprender o máximo possível sobre a criação de sistemas de software escaláveis e eficientes."
            }
          ]
        },
        {
          "time": "16:40",
          "type": "intervention",
          "title": "Coffee Break"
        },
        {
          "time": "17:10",
          "type": "talk",
          "title": "How The New York Times Brought Immersive AR Journalism to Their Platforms",
          "desc": "This year, The New York Times became one of the first major news publishers to feature Augmented Reality in its articles, providing readers with a more immersive experience of the news and exploring what journalism might look like in the near future. In this talk, software engineer Ben Wilhelm will describe the technological problems his team had to solve in order to deliver quality AR content to all readers, including those without the capability to view AR",
          "speakers": [
            {
              "name": "Benjamin Wilhelm",
              "pic": "benjamin-wilhelm.jpg",
              "bio": "Multimedia software engineer at The New York Times. He makes tools for creating and delivering the Times' audio/visual journalism across all platforms, and works with the NYT Immersive team on augmented and virtual reality reporting in the newsroom. Also loves jazz music, photography, writing, and journalism."
            }
          ]
        },
        {
          "time": "17:40",
          "type": "talk",
          "title": "Ceci n'est pas un bouton",
          "desc": "This is the story of how we break and fix and break our web over and over again. How every move we make in our HTML can impact the lives of many people with disabilities and how we can help build a more inclusive web without giving up design or code quality.  I invite you to follow me throughout this talk where I’ll show you that HTML is accessible by default and what happens when we go outside the boundaries of safe mark-up. Let me tell you, JavaScript is A11y’s best friend.",
          "speakers": [
            {
              "name": "Evangelina Ferreira",
              "pic": "eva-ferreira.jpg",
              "bio": "Evangelina Ferreira is a front-end developer and teacher. She is currently working at Aerolab as a UI Developer and has been teaching web technologies at the National Technological University of Argentina for more than five years. In her free time she organizes CSSConf Argentina.",
              "faceAt": "center left"
            }
          ]
        },
        {
          "time": "18:20",
          "type": "talk",
          "title": "A gift of sound and vision",
          "desc": "Sabemos que conseguimos extrair informação de áudio e imagem usando nossas queridas APIs no browser. Nessa palestra eu demonstro algumas propriedades interessantes envolvendo esses dados. Se a Web Audio API e Canvas nos fornecem arrays, podemos inverter as coisas e filtrar uma imagem? Como um pedal de guitarra afetaria a Mona Lisa? Foi sobre isso que David Bowie cantou quando escreveu \"Sound and Vision\"?",
          "speakers": [
            {
              "name": "Rafael Specht da Silva",
              "pic": "rafael-silva.jpg",
              "bio": "Desenvolvedor web, apreciador de chiptunes, sommelier de gifs, entusiasta das APIs fantásticas da web. Já palestrou no mesmo palco do Brendan Eich duas vezes (o que não significa nada, mas deixou-o bem nervoso).",
              "faceAt": "center left"
            }
          ]
        },
        {
          "time": "19:00",
          "type": "intervention",
          "title": "Encerramento / Cierre / Closing"
        }
      ]
    }
]
