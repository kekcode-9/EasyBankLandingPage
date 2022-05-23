var headerLinks = document.getElementsByClassName('header__links')[0];
var windowLastSize = window.innerWidth;
var hamburger = document.getElementsByClassName('header__menu')[0];
var mobileMenu = document.getElementsByClassName('mobile__menu')[0];
var overlay = document.getElementsByClassName('overlay')[0];
var nav = document.getElementsByClassName('header')[0].getElementsByTagName('nav')[0];
var heroBg = document.getElementsByClassName('hero__bg')[0];
var pitch = document.getElementsByClassName('pitch')[0];
var heroFront = document.getElementsByClassName('hero__front')[0];
var whyChoose = document.getElementsByClassName('why__choose')[0];
var whyChoosePoints = whyChoose.getElementsByClassName('points')[0];
var articles = document.getElementsByClassName('articles')[0];
var articleCard = articles.getElementsByClassName('article__card')[0];
var footer = document.getElementsByTagName('footer')[0];


function desktopArrangement () {
    // set heroBg for desktop and style it
    heroBg.src = './images/bg-intro-desktop.svg';
    heroBg.style.width = '80%';
    heroBg.style.position = 'absolute'; // necessary for setting top, left etc
    heroBg.style.top = '-33%';
    heroBg.style.right = '-30%';
    
    // adjust pitch
    pitch.style.width = '50%';
    pitch.style.paddingLeft = '10%';
    pitch.style.textAlign = 'left';
    pitch.getElementsByTagName('div')[0].style.marginLeft = '0%';
    
    // adjust heroFront
    heroFront.style.width = '38vw';
    //heroFront.style.height = '100vh';
    heroFront.style.position = 'absolute';
    heroFront.style.top = '0%';
    heroFront.style.right = '0%';

    // adjust whyChoose
    whyChoose.style.marginTop = '0px';
    whyChoose.style.display = 'flex';
    whyChoose.style.paddingTop = '2%';
    whyChoose.style.paddingBottom = '5%';
    whyChoose.style.textAlign = 'left';
    whyChoose.getElementsByClassName('text')[0].style.marginLeft = '0%';

    whyChoosePoints.style.display = 'flex';
    whyChoosePoints.style.flexDirection = 'row';
    whyChoosePoints.style.paddingTop = '3%';
    whyChoosePoints.style.justifyContent = 'flex-end';
    whyChoosePoints.style.textAlign = 'left';

    // adjust articles
    articles.style.paddingTop = '2%';
    articles.style.paddingLeft = '4%';
    articles.style.alignItems = 'flex-start';
    articles.style.paddingRight = '4%';
    articles.style.paddingBottom = '0%';
    articles.getElementsByClassName('h2')[0].style.width = '100%';
    articleCard.style.display = 'flex';
    articleCard.style.flexDirection = 'row';
    articleCard.style.justifyContent = 'space-between';
    articleCard.style.alignItems = 'flex-start';
    articleCard.style.paddingTop = '3%';
    Array.from(articleCard.getElementsByClassName('card')).map((card) => {
        card.style.width = '20%';
        card.style.paddingBottom = '5%';
    });

    // change footer arrangement
    var col1 = document.createElement("div");
    col1.classList.add('footer__desk__col1');
    col1.appendChild(footer.getElementsByClassName('logo')[0]);
    col1.appendChild(footer.getElementsByClassName('social__media__links')[0]);
    footer.appendChild(col1);

    var col2 = document.createElement("div");
    col2.classList.add('footer__desk__col2');
    var col2A = document.createElement("div");
    var col2B = document.createElement("div");
    Array.from(footer.getElementsByClassName('menu')[0].getElementsByTagName('a')).map((item, index) => {
        if (index < 3) {
            col2A.appendChild(item);
        } else {
            col2B.appendChild(item);
        }
    });
    col2.appendChild(col2A);
    col2.appendChild(col2B);
    footer.appendChild(col2);
    footer.removeChild(footer.getElementsByClassName('menu')[0]);

    var col3 = document.createElement("div");
    col3.classList.add('footer__desk__col3');
    col3.appendChild(footer.getElementsByClassName('button')[0]);
    col3.appendChild(footer.getElementsByClassName('copyright')[0]);
    footer.appendChild(col3);

    footer.style.display = 'flex';
    footer.style.flexDirection = 'row';
    Array.from(footer.getElementsByTagName('a')).map((anchor) => {
        anchor.style.textDecoration = 'none';
        anchor.style.color = 'white';
    });
    var col1 = footer.getElementsByClassName('footer__desk__col1')[0];
    var col2 = footer.getElementsByClassName('footer__desk__col2')[0];
    var col3 = footer.getElementsByClassName('footer__desk__col3')[0];
    var col1Logo = col1.getElementsByTagName('img')[0];
    var col1Links = col1.getElementsByClassName('social__media__links')[0];

    footer.style.height = '40vh';
    footer.style.paddingTop = '0%';
    footer.style.paddingBottom = '0%';

    col1.style.display = 'flex';
    col1.style.flexDirection = 'column';
    col1.style.justifyContent = 'center';
    col1.style.alignItems = 'flex-start';
    col1.style.height = '100%';
    col1.style.width = '10%';
    col1Logo.style.width = '100%';
    col1Logo.style.padding = '0';
    col1Links.style.width = '100%';
    col1Links.style.height = '5%';
    col1Links.style.marginTop = '25%';

    col2.style.display = 'flex';
    col2.style.justifyContent = 'space-between';
    col2.style.alignItems = 'center';
    col2.style.height = '100%';
    col2.style.width = '20%';
    //col2.style.left = '0%';
    Array.from(col2.getElementsByTagName('div')).map((col) => {
        col.style.height = '30%';
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        col.style.justifyContent = 'space-between';
    });

    col3.style.height = '30%';
    col3.style.display = 'flex';
    col3.style.flexDirection = 'column';
    col3.style.justifyContent = 'space-around';
    col3.style.alignItems = 'flex-end';
}


/* hiding/bringing back nav links and changing hero image*/
window.addEventListener('load', (Event) => {
    if (windowLastSize <= 1023) {
        // hide links
        headerLinks.classList.toggle('header__links__visible');
        // set hero for mobile
        heroBg.src = './images/bg-intro-mobile1.png';
    } else {
        desktopArrangement();
    }
});

window.addEventListener('resize', (Event) => {
    if (windowLastSize > 1023 && window.innerWidth <= 1023) {
        windowLastSize = window.innerWidth;
        // hide links
        headerLinks.classList.toggle('header__links__visible');
        // change hero
        heroBg.src = './images/bg-intro-mobile1.png';
    }

    if (windowLastSize <= 1023 && window.innerWidth > 1023 && !headerLinks.classList.contains('header__links__visible')) {
        windowLastSize = window.innerWidth;
        // bring back links
        headerLinks.classList.toggle('header__links__visible');
        // change hero
        heroBg.src = './images/bg-intro-desktop.svg';
    }
});

/* 2. Hamburger activation */
hamburger.addEventListener('click', (Event) => {
    if (!hamburger.classList.contains('header__menu__open')) {
        // open hamburger
        hamburger.classList.remove('hide-for-mobile');
        hamburger.classList.add('header__menu__open'); // hamburger animation

        // bring in overlay
        if (overlay.classList.contains('overlay__disappear')) {
            overlay.classList.remove('overlay__disappear');
        }
        overlay.classList.add('overlay__appear');
        setTimeout(() => {
            // open mobile menu
            mobileMenu.classList.add('mobile__menu__open');
            if (mobileMenu.classList.contains('mobile__menu__close')) {
                mobileMenu.classList.remove('mobile__menu__close');
            }
            //mobileMenu.innerHTML = headerLinks.innerHTML;
            mobileMenu.style.animation = 'mobile__menu__in 1s ease-in forwards';

            // add header links to mobile menu
            mobileMenu.innerHTML = headerLinks.innerHTML;
            var anchors = Array.from(mobileMenu.getElementsByTagName('a'));
            console.log(anchors);
            anchors.forEach((link, index) => {
                link.style.animation = `mobile__menu__links__drop 0.5s ease forwards ${index / 7 + 1}s`;
            });
        
        }, 200);
        
    } else {
        // close hamburger
        hamburger.classList.remove('hide-for-mobile');
        hamburger.classList.remove('header__menu__open');
        

        // close mobile menu
        mobileMenu.classList.add('mobile__menu__close');
        if (mobileMenu.classList.contains('mobile__menu__open')) {
            mobileMenu.classList.remove('mobile__menu__open');
        }
        mobileMenu.style.animation = 'mobile__menu__out 1s ease-out forwards';
        mobileMenu.innerHTML = '';

        // remove overlay
        overlay.classList.remove('overlay__appear');
        overlay.classList.add('overlay__disappear');
    }
})