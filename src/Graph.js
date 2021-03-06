import React, {Component} from "react";

import {Graph} from "react-d3-graph";
import Header from "./header";
import SearchItems from "./SearchItems";
import Button from "@material-ui/core/Button";


export default class MyGraph extends Component {
    indexToLink = {};
    linkToIndex = {};
    originalData = {
        nodes: [{
            "id": "https://no.m.wiktionary.org/wiki/Spesial:MobileMenu",
            "size": 300.4356592152218,
            "color": 1.382979469312E12
        }, {
            "id": "https://qa.debian.org/bls/index.html",
            "size": 318.2683541783395,
            "color": 1.58913789952E12
        }, {
            "id": "https://wordpress.org/about/",
            "size": 400.1635849936326,
            "color": 6.442450944E11
        }, {
            "id": "https://www.fandom.com/topics/games",
            "size": 433.6439112386054,
            "color": 0.0
        }, {
            "id": "http://datos.bne.es/entidades",
            "size": 404.88444915136915,
            "color": 6.95784701952E11
        }, {
            "id": "https://wordpress.org/themes/",
            "size": 326.2114355097704,
            "color": 6.442450944E11
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=es-ES",
            "size": 542.1089880568202,
            "color": 1.580547964928E12
        }, {
            "id": "https://plus.elpais.com/presentacion.html",
            "size": 262.2666573676181,
            "color": 3.60777252864E11
        }, {
            "id": "https://www.instagram.com/getfandom/",
            "size": 305.9050442207866,
            "color": 1.254130450435E12
        }, {
            "id": "https://lists.w3.org/Archives/Public/",
            "size": 414.3068402225093,
            "color": 1.314259992577E12
        }, {
            "id": "http://lists.w3.org/Help/",
            "size": 313.93250914013885,
            "color": 1.254130450432E12
        }, {
            "id": "https://www.fandom.com/press",
            "size": 305.6946357113701,
            "color": 0.0
        }, {
            "id": "https://wordpress.org/plugins/",
            "size": 326.54114829940596,
            "color": 6.442450944E11
        }, {
            "id": "https://hello.softonic.com/press-room/",
            "size": 1863.2998366317386,
            "color": 1.37438953472E11
        }, {
            "id": "https://plus.google.com/103976998075187754475/",
            "size": 1593.7499651320566,
            "color": 7.12964571136E11
        }, {
            "id": "https://www.fandom.com/privacy-policy",
            "size": 278.52185911798796,
            "color": 0.0
        }, {
            "id": "https://www.fandom.com/tv",
            "size": 256.9552526905756,
            "color": 0.0
        }, {
            "id": "https://lists.w3.org/Help/",
            "size": 409.4016420699243,
            "color": 1.46028888064E11
        }, {
            "id": "https://lo.m.wiktionary.org/wiki/Wiktionary:%E0%BB%9C%E0%BB%89%E0%BA%B2%E0%BA%AB%E0%BA%BC%E0%BA%B1%E0%BA%81",
            "size": 251.50981953733196,
            "color": 4.03726925825E11
        }, {
            "id": "https://wordpress.org/support/forums/",
            "size": 324.6512095268091,
            "color": 6.442450944E11
        }, {
            "id": "http://news.sina.com.cn/guide/",
            "size": 342.39265067573245,
            "color": 1.185410973696E12
        }, {
            "id": "https://support.twitter.com/groups/31-twitter-basics/topics/104-welcome-to-twitter-support/articles/215585-twitter-101-how-should-i-get-started-using-twitter",
            "size": 970.1992342635727,
            "color": 7.3014444032E11
        }, {
            "id": "https://www.fandom.com/explore",
            "size": 433.88487467017507,
            "color": 0.0
        }, {
            "id": "https://www.fandom.com/about#contact",
            "size": 305.6946357113701,
            "color": 0.0
        }, {
            "id": "https://no.m.wiktionary.org/wiki/Wiktionary:Forside",
            "size": 300.4400885440238,
            "color": 1.382979469312E12
        }, {
            "id": "https://wholesaler.alibaba.com/sitemap/index.htm",
            "size": 330.98491278472557,
            "color": 5.66935683072E11
        }, {
            "id": "https://www.cloudflare.com/sign-up?utm_source=email_protection",
            "size": 777.4393418163276,
            "color": 1.589137899521E12
        }, {
            "id": "https://wordpress.org/support/",
            "size": 363.96346466133366,
            "color": 6.442450944E11
        }, {
            "id": "http://datos.bne.es/temas",
            "size": 404.88444915136915,
            "color": 6.95784701952E11
        }, {
            "id": "https://hello.softonic.com/privacy-policy/",
            "size": 1710.8008386945353,
            "color": 1.37438953472E11
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=pt-BR",
            "size": 308.8764351822967,
            "color": 1.314259992576E12
        }, {
            "id": "https://wordpress.org/showcase/",
            "size": 445.95156983819146,
            "color": 6.442450944E11
        }, {
            "id": "https://lists.archlinux.org/listinfo/aur-requests",
            "size": 512.423773224155,
            "color": 4.03726925824E11
        }, {
            "id": "https://wordpress.org/support/forum/requests-and-feedback",
            "size": 311.72246876010325,
            "color": 6.442450944E11
        }, {
            "id": "https://hu.m.wiktionary.org/wiki/Kezd%C5%91lap",
            "size": 397.4488466507748,
            "color": 2.49108103168E11
        }, {
            "id": "https://wordpress.org/download/",
            "size": 325.603791645602,
            "color": 6.442450944E11
        }, {
            "id": "https://www.ixxx.com/contact/",
            "size": 375.85850363414784,
            "color": 1.279900254208E12
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=it-IT",
            "size": 354.36537359430594,
            "color": 7.21554505729E11
        }, {
            "id": "http://www.businessinsider.com.pl/?IR=C",
            "size": 407.7302317281559,
            "color": 3.35007449088E11
        }, {
            "id": "https://www.fandom.com/games",
            "size": 256.9552526905756,
            "color": 0.0
        }, {
            "id": "https://wordpress.org/mobile/",
            "size": 324.75482804704217,
            "color": 6.442450944E11
        }, {
            "id": "http://datos.bne.es/avanzada",
            "size": 404.88444915136915,
            "color": 6.95784701952E11
        }, {
            "id": "https://www.ebay.ca/adchoice",
            "size": 304.04612432380543,
            "color": 2.5769803776E11
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ar-SA",
            "size": 353.3331042364021,
            "color": 1.529008357376E12
        }, {
            "id": "https://community.fandom.com/wiki/Community_Central",
            "size": 831.2068665503908,
            "color": 0.0
        }, {
            "id": "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
            "size": 326.6608336553063,
            "color": 9.4489280512E11
        }, {
            "id": "https://www.fandom.com/mediakit#contact",
            "size": 284.71888136133566,
            "color": 0.0
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=fr-FR",
            "size": 355.38977756411805,
            "color": 1.065151889408E12
        }, {
            "id": "https://adminguide.stanford.edu/chapter-1/subchapter-6/policy-1-6-1",
            "size": 261.5283150091703,
            "color": 4.12316860416E11
        }, {
            "id": "https://community.fandom.com/Sitemap",
            "size": 706.1829272683034,
            "color": 0.0
        }, {
            "id": "http://runeberg.org/katalog.html",
            "size": 267.8443900995283,
            "color": 5.75525617664E11
        }, {
            "id": "https://www.fandom.com/topics/tv",
            "size": 433.6439112386054,
            "color": 0.0
        }, {
            "id": "https://fandom.link/Upsidedown",
            "size": 517.9677388060468,
            "color": 0.0
        }, {
            "id": "https://secure.nbcnews.com/_tps/accounts/newsletters",
            "size": 359.8641431831149,
            "color": 1.700807049216E12
        }, {
            "id": "https://open.spotify.com/browse",
            "size": 626.0667265620455,
            "color": 4.12316860417E11
        }, {
            "id": "https://hu.m.wiktionary.org/wiki/Speci%C3%A1lis:MobileMenu",
            "size": 397.44429353377745,
            "color": 2.49108103168E11
        }, {
            "id": "https://www.fandom.com/video",
            "size": 399.38529936163116,
            "color": 0.0
        }, {
            "id": "https://io.m.wiktionary.org/wiki/Chefpagino",
            "size": 258.4029093961141,
            "color": 1.391569403904E12
        }, {
            "id": "https://packages.debian.org/about/",
            "size": 504.6156072336512,
            "color": 4.294967296E10
        }, {
            "id": "https://hello.softonic.com/careers/#join-us",
            "size": 1863.2998366317386,
            "color": 1.37438953472E11
        }, {
            "id": "https://www.ixxx.com/dmca/",
            "size": 377.0285827514962,
            "color": 9.8784247808E11
        }, {
            "id": "https://wordpress.org/about/privacy/",
            "size": 325.06487081400303,
            "color": 6.442450944E11
        }, {
            "id": "https://www.fandom.com/terms-of-use",
            "size": 278.58516696592073,
            "color": 0.0
        }, {
            "id": "https://shop.rp-online.de/Datenschutz/",
            "size": 310.27444952542277,
            "color": 1.142461300736E12
        }, {
            "id": "https://www.fandom.com/careers",
            "size": 436.85272372940443,
            "color": 0.0
        }, {
            "id": "https://www.fandom.com/movies",
            "size": 256.9552526905756,
            "color": 0.0
        }, {
            "id": "https://community.fandom.com/wiki/WAM",
            "size": 449.70006134502097,
            "color": 0.0
        }, {
            "id": "https://tr.m.wiktionary.org/wiki/Anasayfa",
            "size": 273.9803504084162,
            "color": 9.4489280512E10
        }, {
            "id": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "size": 1863.2998366317386,
            "color": 1.37438953472E11
        }, {
            "id": "https://www.cloudflare.com/5xx-error-landing?utm_source=error_footer",
            "size": 777.569507847038,
            "color": 1.340029796352E12
        }, {
            "id": "https://hello.softonic.com/software-policy/",
            "size": 1760.1251766236285,
            "color": 6.35655159808E11
        }, {
            "id": "https://wordpress.org/hosting/",
            "size": 446.0875802897497,
            "color": 6.442450944E11
        }, {
            "id": "https://www.fandom.com/about",
            "size": 305.7068251576961,
            "color": 0.0
        }, {
            "id": "https://r.mail.ru/cls951827/e.mail.ru/login?lang=ru_RU&Page=",
            "size": 429.5468677118582,
            "color": 5.41165879297E11
        }, {
            "id": "https://www.fandom.com/topics/movies",
            "size": 433.6439112386054,
            "color": 0.0
        }, {
            "id": "https://hello.softonic.com/legal-information/",
            "size": 1863.2998366317386,
            "color": 1.37438953472E11
        }, {
            "id": "https://tools.wmflabs.org/wlm-stats/",
            "size": 567.8855737723252,
            "color": 8.50403524608E11
        }, {
            "id": "http://mail.python.org/mailman/listinfo/distutils-sig",
            "size": 311.9143545577585,
            "color": 1.219770712064E12
        }, {
            "id": "http://runeberg.org/admin/sponsors.html",
            "size": 255.1157727762327,
            "color": 5.75525617664E11
        }, {
            "id": "http://bit.ly/EndgameHT",
            "size": 272.61453371899177,
            "color": 1.20259084288E12
        }, {
            "id": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "size": 792.6242503175947,
            "color": 0.0
        }, {
            "id": "https://io.m.wiktionary.org/wiki/Specala:Menuo_por_po%C5%9Daparato",
            "size": 258.4029093961141,
            "color": 1.391569403904E12
        }, {
            "id": "http://wiki.liveinternet.ru/ServisDnevnikovLiveInternet/NastrojjkaBrauzera?v=hew",
            "size": 330.4331836171083,
            "color": 5.41165879296E11
        }, {
            "id": "http://www.liveinternet.ru/journal_register.php",
            "size": 368.27945797815056,
            "color": 9.79252543488E11
        }, {
            "id": "https://tr.m.wiktionary.org/wiki/%C3%96zel:MobileMenu",
            "size": 273.9757972914189,
            "color": 9.4489280512E10
        }, {
            "id": "https://www.fandom.com/mediakit",
            "size": 381.90285154172057,
            "color": 0.0
        }, {
            "id": "https://hello.softonic.com/terms-of-use/",
            "size": 1877.1086754253022,
            "color": 1.37438953472E11
        }, {
            "id": "http://lists.w3.org/Archives/Public/",
            "size": 320.7555644786457,
            "color": 1.67503724544E12
        }, {
            "id": "https://www.stackoverflowbusiness.com/?ref=topbar_help",
            "size": 539.0882015339748,
            "color": 8.07453851648E11
        }, {
            "id": "https://hatenablog.com/guide",
            "size": 295.92255803010886,
            "color": 6.8719476736E11
        }, {
            "id": "http://wiki.liveinternet.ru/ServisDnevnikovLiveInternet/NastrojjkaBrauzera",
            "size": 330.4331836171083,
            "color": 1.151051235328E12
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=sw-KE",
            "size": 314.2610362790774,
            "color": 3.0064771072E11
        }, {
            "id": "https://support.google.com/maps/?hl=de&authuser=0&p=no_javascript",
            "size": 516.4386653469198,
            "color": 4.46676598784E11
        }, {
            "id": "https://de.thefreedictionary.com/kostenloser-content-fuer-webmaster.htm",
            "size": 342.81437852281937,
            "color": 9.10533066752E11
        }, {
            "id": "http://blog.hatena.ne.jp/guide/pro",
            "size": 1214.9007809103275,
            "color": 1.597727834112E12
        }, {
            "id": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ru-RU",
            "size": 307.8186121825883,
            "color": 6.95784701953E11
        }, {
            "id": "https://wordpress.org/news/",
            "size": 325.4217102456648,
            "color": 6.442450944E11
        }, {
            "id": "https://community.fandom.com/wiki/Help:Contents",
            "size": 492.0492944902349,
            "color": 0.0
        }, {
            "id": "https://hello.softonic.com/cookies-policy/",
            "size": 1630.1390992409104,
            "color": 1.37438953472E11
        }, {
            "id": "http://lists.centos.org/mailman/listinfo/centos-announce",
            "size": 254.54772978387894,
            "color": 4.7244640256E11
        }],
        links: [{
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=pt-BR",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=es-ES",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ru-RU",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ar-SA",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=it-IT",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=sw-KE",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=fr-FR",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/cookies-policy/",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/software-policy/",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/careers/#join-us",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/press-room/",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/legal-information/",
            "destination": "https://hello.softonic.com/terms-of-use/",
            "anchor": "Terms of Use"
        }, {
            "source": "https://hello.softonic.com/cookies-policy/",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/software-policy/",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/careers/#join-us",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/press-room/",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/legal-information/",
            "destination": "https://hello.softonic.com/press-room/",
            "anchor": "News"
        }, {
            "source": "https://hello.softonic.com/cookies-policy/",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/software-policy/",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/careers/#join-us",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/press-room/",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/legal-information/",
            "destination": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "anchor": "Advertising solutions"
        }, {
            "source": "https://hello.softonic.com/cookies-policy/",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/software-policy/",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/careers/#join-us",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/press-room/",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/legal-information/",
            "destination": "https://hello.softonic.com/careers/#join-us",
            "anchor": "Join us!"
        }, {
            "source": "https://hello.softonic.com/cookies-policy/",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/software-policy/",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/careers/#join-us",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/press-room/",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://hello.softonic.com/legal-information/",
            "destination": "https://hello.softonic.com/legal-information/",
            "anchor": "Legal Information"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=pt-BR",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=es-ES",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ru-RU",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ar-SA",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=it-IT",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=sw-KE",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=fr-FR",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/cookies-policy/",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/software-policy/",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/careers/#join-us",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/press-room/",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/for-advertisers/#advertising-solutions",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://hello.softonic.com/legal-information/",
            "destination": "https://hello.softonic.com/privacy-policy/",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=pt-BR",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=es-ES",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ru-RU",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=ar-SA",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=it-IT",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=sw-KE",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://en.softonic.com/solutions?utm_source=Cross%20Promotion&utm_medium=Footer&utm_term=fr-FR",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookie Policy"
        }, {
            "source": "https://hello.softonic.com/privacy-policy/",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookies Policy"
        }, {
            "source": "https://hello.softonic.com/terms-of-use/",
            "destination": "https://hello.softonic.com/cookies-policy/",
            "anchor": "Cookies Policy"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "View Mobile Site"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://community.fandom.com/wiki/Community_Central",
            "anchor": "Community Central"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "View Mobile Site"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "anchor": "Start a wiki"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://community.fandom.com/Sitemap",
            "anchor": "Global Sitemap"
        }, {
            "source": "https://open.spotify.com/browse",
            "destination": "https://open.spotify.com/browse",
            "anchor": ""
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://fandom.link/Upsidedown",
            "anchor": "UpsideDown"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://fandom.link/Upsidedown",
            "anchor": "UpsideDown"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://fandom.link/Upsidedown",
            "anchor": "UpsideDown"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://fandom.link/Upsidedown",
            "anchor": "UpsideDown"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://fandom.link/Upsidedown",
            "anchor": "UpsideDown"
        }, {
            "source": "https://lists.archlinux.org/listinfo/aur-requests",
            "destination": "https://lists.archlinux.org/listinfo/aur-requests",
            "anchor": "aur-requests"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "View Mobile Site"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://community.fandom.com/wiki/Help:Contents",
            "anchor": "Help"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "View Mobile Site"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://community.fandom.com/wiki/WAM",
            "anchor": "WAM Score"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/hosting/",
            "anchor": "Hosting"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/showcase/",
            "anchor": "Showcase"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/careers",
            "anchor": "Careers"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/explore",
            "anchor": "Wikis"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/topics/movies",
            "anchor": "Movies"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/topics/games",
            "anchor": "Games"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/topics/tv",
            "anchor": "TV"
        }, {
            "source": "https://lists.w3.org/Archives/Public/",
            "destination": "https://lists.w3.org/Archives/Public/",
            "anchor": "Public"
        }, {
            "source": "http://datos.bne.es/avanzada",
            "destination": "http://datos.bne.es/temas",
            "anchor": "Temas"
        }, {
            "source": "http://datos.bne.es/entidades",
            "destination": "http://datos.bne.es/temas",
            "anchor": "Temas"
        }, {
            "source": "http://datos.bne.es/temas",
            "destination": "http://datos.bne.es/temas",
            "anchor": "Temas"
        }, {
            "source": "http://datos.bne.es/avanzada",
            "destination": "http://datos.bne.es/entidades",
            "anchor": "Entidades"
        }, {
            "source": "http://datos.bne.es/entidades",
            "destination": "http://datos.bne.es/entidades",
            "anchor": "Entidades"
        }, {
            "source": "http://datos.bne.es/temas",
            "destination": "http://datos.bne.es/entidades",
            "anchor": "Entidades"
        }, {
            "source": "http://datos.bne.es/avanzada",
            "destination": "http://datos.bne.es/avanzada",
            "anchor": "Busquedas avanzadas"
        }, {
            "source": "http://datos.bne.es/entidades",
            "destination": "http://datos.bne.es/avanzada",
            "anchor": "Busquedas avanzadas"
        }, {
            "source": "http://datos.bne.es/temas",
            "destination": "http://datos.bne.es/avanzada",
            "anchor": "Busquedas avanzadas"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/about/",
            "anchor": "About WordPress"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/video",
            "anchor": "Video"
        }, {
            "source": "https://hu.m.wiktionary.org/wiki/Kezd%C5%91lap",
            "destination": "https://hu.m.wiktionary.org/wiki/Kezd%C5%91lap",
            "anchor": "Wikiszótár"
        }, {
            "source": "https://hu.m.wiktionary.org/wiki/Speci%C3%A1lis:MobileMenu",
            "destination": "https://hu.m.wiktionary.org/wiki/Kezd%C5%91lap",
            "anchor": "Wikiszótár"
        }, {
            "source": "https://hu.m.wiktionary.org/wiki/Kezd%C5%91lap",
            "destination": "https://hu.m.wiktionary.org/wiki/Speci%C3%A1lis:MobileMenu",
            "anchor": "Főmenü megnyitása"
        }, {
            "source": "https://hu.m.wiktionary.org/wiki/Speci%C3%A1lis:MobileMenu",
            "destination": "https://hu.m.wiktionary.org/wiki/Speci%C3%A1lis:MobileMenu",
            "anchor": "Főmenü megnyitása"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/mediakit",
            "anchor": "Media Kit"
        }, {
            "source": "https://www.ixxx.com/contact/",
            "destination": "https://www.ixxx.com/dmca/",
            "anchor": "DMCA / Copyright"
        }, {
            "source": "https://www.ixxx.com/contact/",
            "destination": "https://www.ixxx.com/contact/",
            "anchor": "Contact Us"
        }, {
            "source": "http://www.liveinternet.ru/journal_register.php",
            "destination": "http://www.liveinternet.ru/journal_register.php",
            "anchor": "Регистрация"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/support/",
            "anchor": "Support"
        }, {
            "source": "https://secure.nbcnews.com/_tps/accounts/newsletters",
            "destination": "https://secure.nbcnews.com/_tps/accounts/newsletters",
            "anchor": ""
        }, {
            "source": "https://de.thefreedictionary.com/kostenloser-content-fuer-webmaster.htm",
            "destination": "https://de.thefreedictionary.com/kostenloser-content-fuer-webmaster.htm",
            "anchor": "Galgenraten"
        }, {
            "source": "https://wholesaler.alibaba.com/sitemap/index.htm",
            "destination": "https://wholesaler.alibaba.com/sitemap/index.htm",
            "anchor": "Wholesaler"
        }, {
            "source": "https://adminguide.stanford.edu/chapter-1/subchapter-6/policy-1-6-1",
            "destination": "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
            "anchor": "Trademarks"
        }, {
            "source": "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
            "destination": "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
            "anchor": "Trademarks"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/plugins/",
            "anchor": "Plugins"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/themes/",
            "anchor": "Themes"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/download/",
            "anchor": "WordPress 5.2.1"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/download/",
            "anchor": "Get WordPress"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/news/",
            "anchor": "Blog"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/about/privacy/",
            "anchor": "Privacy"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/mobile/",
            "anchor": "Mobile"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Check out our support forums"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/mobile/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/showcase/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/news/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/hosting/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/support/forums/",
            "anchor": "Forums"
        }, {
            "source": "https://lists.w3.org/Help/",
            "destination": "http://lists.w3.org/Archives/Public/",
            "anchor": "public"
        }, {
            "source": "http://lists.w3.org/Help/",
            "destination": "http://lists.w3.org/Archives/Public/",
            "anchor": "public"
        }, {
            "source": "http://lists.w3.org/Archives/Public/",
            "destination": "http://lists.w3.org/Archives/Public/",
            "anchor": "Public"
        }, {
            "source": "https://qa.debian.org/bls/index.html",
            "destination": "https://qa.debian.org/bls/index.html",
            "anchor": "buildd log scanner"
        }, {
            "source": "https://wordpress.org/support/forums/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/support/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/themes/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/support/forum/requests-and-feedback",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/about/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/download/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/about/privacy/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://wordpress.org/plugins/",
            "destination": "https://wordpress.org/support/forum/requests-and-feedback",
            "anchor": "Feedback"
        }, {
            "source": "https://shop.rp-online.de/Datenschutz/",
            "destination": "https://shop.rp-online.de/Datenschutz/",
            "anchor": "Datenschutzerklärung."
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.instagram.com/getfandom/",
            "anchor": ""
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/about",
            "anchor": "About"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/press",
            "anchor": "Press"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/about#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.ebay.ca/adchoice",
            "destination": "https://www.ebay.ca/adchoice",
            "anchor": "AdChoice"
        }, {
            "source": "https://no.m.wiktionary.org/wiki/Spesial:MobileMenu",
            "destination": "https://no.m.wiktionary.org/wiki/Wiktionary:Forside",
            "anchor": "Wiktionary"
        }, {
            "source": "https://no.m.wiktionary.org/wiki/Wiktionary:Forside",
            "destination": "https://no.m.wiktionary.org/wiki/Wiktionary:Forside",
            "anchor": "Wiktionary"
        }, {
            "source": "https://no.m.wiktionary.org/wiki/Spesial:MobileMenu",
            "destination": "https://no.m.wiktionary.org/wiki/Spesial:MobileMenu",
            "anchor": "Åpne hovedmenyen"
        }, {
            "source": "https://no.m.wiktionary.org/wiki/Wiktionary:Forside",
            "destination": "https://no.m.wiktionary.org/wiki/Spesial:MobileMenu",
            "anchor": "Åpne hovedmenyen"
        }, {
            "source": "https://hatenablog.com/guide",
            "destination": "https://hatenablog.com/guide",
            "anchor": "はてなブログとは"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/mediakit#contact",
            "anchor": "Contact"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/terms-of-use",
            "anchor": "Terms of Use"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/privacy-policy",
            "anchor": "Privacy Policy"
        }, {
            "source": "https://tr.m.wiktionary.org/wiki/Anasayfa",
            "destination": "https://tr.m.wiktionary.org/wiki/Anasayfa",
            "anchor": "Vikisözlük"
        }, {
            "source": "https://tr.m.wiktionary.org/wiki/%C3%96zel:MobileMenu",
            "destination": "https://tr.m.wiktionary.org/wiki/Anasayfa",
            "anchor": "Vikisözlük"
        }, {
            "source": "https://tr.m.wiktionary.org/wiki/Anasayfa",
            "destination": "https://tr.m.wiktionary.org/wiki/%C3%96zel:MobileMenu",
            "anchor": "Ana menüyü aç"
        }, {
            "source": "https://tr.m.wiktionary.org/wiki/%C3%96zel:MobileMenu",
            "destination": "https://tr.m.wiktionary.org/wiki/%C3%96zel:MobileMenu",
            "anchor": "Ana menüyü aç"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "http://bit.ly/EndgameHT",
            "anchor": "EndgameHonest"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "http://bit.ly/EndgameHT",
            "anchor": "EndgameHonest"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "http://bit.ly/EndgameHT",
            "anchor": "EndgameHonest"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "http://bit.ly/EndgameHT",
            "anchor": "EndgameHonest"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "http://bit.ly/EndgameHT",
            "anchor": "EndgameHonest"
        }, {
            "source": "http://runeberg.org/katalog.html",
            "destination": "http://runeberg.org/katalog.html",
            "anchor": "Title"
        }, {
            "source": "http://runeberg.org/admin/sponsors.html",
            "destination": "http://runeberg.org/katalog.html",
            "anchor": "Catalog"
        }, {
            "source": "https://io.m.wiktionary.org/wiki/Chefpagino",
            "destination": "https://io.m.wiktionary.org/wiki/Specala:Menuo_por_po%C5%9Daparato",
            "anchor": "Apertar la precipua menuo"
        }, {
            "source": "https://io.m.wiktionary.org/wiki/Specala:Menuo_por_po%C5%9Daparato",
            "destination": "https://io.m.wiktionary.org/wiki/Specala:Menuo_por_po%C5%9Daparato",
            "anchor": "Apertar la precipua menuo"
        }, {
            "source": "https://io.m.wiktionary.org/wiki/Chefpagino",
            "destination": "https://io.m.wiktionary.org/wiki/Chefpagino",
            "anchor": "Wikivortaro"
        }, {
            "source": "https://io.m.wiktionary.org/wiki/Specala:Menuo_por_po%C5%9Daparato",
            "destination": "https://io.m.wiktionary.org/wiki/Chefpagino",
            "anchor": "Wikivortaro"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/games",
            "anchor": "Games"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/movies",
            "anchor": "Movies"
        }, {
            "source": "https://fandom.link/Upsidedown",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/Community_Central",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/Sitemap",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/WAM",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/Help:Contents",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://community.fandom.com/wiki/Special:CreateNewWiki",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/tv",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/video",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/games",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/mediakit",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/careers",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/terms-of-use",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/topics/movies",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/press",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/mediakit#contact",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/about#contact",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/topics/games",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/explore",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/topics/tv",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/movies",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/privacy-policy",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "https://www.fandom.com/about",
            "destination": "https://www.fandom.com/tv",
            "anchor": "TV"
        }, {
            "source": "http://runeberg.org/katalog.html",
            "destination": "http://runeberg.org/admin/sponsors.html",
            "anchor": "Donate"
        }, {
            "source": "http://runeberg.org/admin/sponsors.html",
            "destination": "http://runeberg.org/admin/sponsors.html",
            "anchor": "Donate"
        }, {
            "source": "https://lo.m.wiktionary.org/wiki/Wiktionary:%E0%BB%9C%E0%BB%89%E0%BA%B2%E0%BA%AB%E0%BA%BC%E0%BA%B1%E0%BA%81",
            "destination": "https://lo.m.wiktionary.org/wiki/Wiktionary:%E0%BB%9C%E0%BB%89%E0%BA%B2%E0%BA%AB%E0%BA%BC%E0%BA%B1%E0%BA%81",
            "anchor": "Wiktionary"
        }],
    };

    prepareData(data) {
        let i = 1;
        let nodes = data.nodes.map(node => {
            let colorInt = node.color % 798868333;
            let red = colorInt % 256;
            let green = colorInt / 256 % 256;
            let blue = colorInt / 256 / 256 % 256;
            let color = `rgb(${red}, ${green}, ${blue})`;
            this.linkToIndex[node.id] = i;
            this.indexToLink[i] = node.id;
            return {
                id: i++,
                size: node.size,
                color: color
            }
        });
        let linkedNodes = {};
        let links = data.links.map(link => {
            let target = link.destination === undefined ? link.target : link.destination;
            linkedNodes[this.linkToIndex[link.source]] = true;
            linkedNodes[this.linkToIndex[target]] = true;
            return {
                source: this.linkToIndex[link.source],
                target: this.linkToIndex[target],
                anchor: link.anchor
            }
        });
        nodes.forEach(node => {
            if (linkedNodes[node.id] === undefined) {
                links.push({
                    source: node.id,
                    target: node.id
                })
            }
        });

        return {
            nodes: nodes,
            links: links
        }
    }

    constructor(props: P, context: any) {
        super(props, context);

        this.state = {
            data: this.prepareData(this.originalData),
            isFirstLevel: true,
        };

        this.onMouseOverLink = this.onMouseOverLink.bind(this);
        this.onMouseOutLink = this.onMouseOutLink.bind(this);
        this.onMouseOverNode = this.onMouseOverNode.bind(this);
        this.onMouseOutNode = this.onMouseOutNode.bind(this);
        this.onClickLink = this.onClickLink.bind(this);
        this.onClickNode = this.onClickNode.bind(this);
        this.onClickGraph = this.onClickGraph.bind(this);
        this.onDoubleClickNode = this.onDoubleClickNode.bind(this);
    }

    render() {

        const myConfig = {
            automaticRearrangeAfterDropNode: true,
            collapsible: true,
            directed: true,
            focusAnimationDuration: 0.75,
            focusZoom: 1,
            height: 920,
            highlightDegree: 1,
            highlightOpacity: 1,
            linkHighlightBehavior: true,
            maxZoom: 8,
            minZoom: 0.1,
            nodeHighlightBehavior: true,
            panAndZoom: false,
            staticGraph: false,
            width: 1920,
            d3: {
                alphaTarget: 0.05,
                gravity: -100,
                linkLength: 100,
                linkStrength: 1,
            },
            node: {
                color: "lightgreen",
                size: 120,
                highlightStrokeColor: "blue",
                fontColor: "black",
                fontSize: 8,
                fontWeight: "normal",
                highlightColor: "SAME",
                highlightFontSize: 8,
                highlightFontWeight: "normal",
                highlightStrokeWidth: "SAME",
                labelProperty: "id",
                mouseCursor: "pointer",
                opacity: 1,
                renderLabel: true,
                strokeColor: "none",
                strokeWidth: 1.5,
                svg: "",
                symbolType: "circle",
                viewGenerator: null,
            },
            link: {
                color: "#d3d3d3",
                fontColor: "black",
                fontSize: 8,
                fontWeight: "normal",
                highlightColor: "lightblue",
                highlightFontSize: 8,
                highlightFontWeight: "normal",
                labelProperty: "label",
                mouseCursor: "pointer",
                opacity: 1,
                renderLabel: false,
                semanticStrokeWidth: false,
                strokeWidth: 1.5,
                type: "STRAIGHT",
            },
        }

        return (
            <div className={"App-header"}>
                <Header content={
                    (
                        <Button href={this.state.link}>
                            {SearchItems.uriShow(this.state.link)}
                        </Button>
                    )
                }/>
                <Graph
                    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                    data={this.state.data}
                    config={myConfig}
                    onClickNode={this.onClickNode}
                    onRightClickNode={this.onRightClickNode}
                    onClickGraph={this.onClickGraph}
                    onClickLink={this.onClickLink}
                    onRightClickLink={this.onRightClickLink}
                    onMouseOverNode={this.onMouseOverNode}
                    onMouseOutNode={this.onMouseOutNode}
                    onMouseOverLink={this.onMouseOverLink}
                    onMouseOutLink={this.onMouseOutLink}
                    onDoubleClickNode={this.onDoubleClickNode}
                />
            </div>
        );
    }

    // graph event callbacks
    onClickGraph() {
        // window.alert(`Clicked the graph background`);
    };

    onClickNode(nodeId) {
        if(this.state.isFirstLevel) {
            let clickedURL = encodeURIComponent(this.indexToLink[nodeId]);
            let fetchingURL = "http://46.4.40.237:1478/graph?url=" + clickedURL;
            fetch(fetchingURL)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        data: this.prepareData(data),
                        isFirstLevel: false
                    })
                })
                .catch(console.log)

        } else {
            this.setState({
                isFirstLevel: true,
                data: this.prepareData(this.originalData)
            })
        }
    };

    onDoubleClickNode(nodeId) {
        // window.alert(`Double clicked node ${nodeId}`);
    };

    onRightClickNode(event, nodeId) {
        // window.alert(`Right clicked node ${nodeId}`);
    };

    onMouseOverNode(nodeId) {
        let url = this.indexToLink[nodeId];
        this.setState({
            link: url
        })
    };

    onMouseOutNode(nodeId) {
        // window.alert(`Mouse out node ${nodeId}`);
    };

    onClickLink(source, target) {
        // window.alert(`Clicked link between ${source} and ${target}`);
    };

    onRightClickLink(event, source, target) {
        // window.alert(`Right clicked link between ${source} and ${target}`);
    };

    onMouseOverLink(source, target) {
        // window.alert(`Mouse over in link between ${source} and ${target}`);
    };

    onMouseOutLink(source, target) {
        // window.alert(`Mouse out link between ${source} and ${target}`);
    };

}
