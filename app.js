// animation pour la barre de navigation 
//le scrollbar est tiré vers le bas

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY >= 30) {
        navigation.classList.add('anim-nav');
    }else{
        navigation.classList.remove('anim-nav');
    }
});

//animation du title à chaque chargement de la page à chaque fois qu'on actualise la page le mouvement du "mot sport forever" 
//chargement du logo aussi

const titreSpans = document.querySelectorAll('h1 span');
const logo = document.querySelector('.logo');

window.addEventListener('load', () => {

    const TL = gsap.timeline ({paused: true});

    TL
    .staggerFrom(titreSpans, 1, { top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .from(logo, 0.6, {transform: "scale(0)", ease: "power2.out" }, '-=2' )

    TL.play();
});