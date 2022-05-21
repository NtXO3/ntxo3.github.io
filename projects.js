const projectsListEl = document.querySelector('.project__list')
const filterButtonsEl = document.querySelectorAll('.projects__filter--btn')
let filterActive = true

const projects = [
    {
        id: 1,
        name: "MusiCore",
        tags: ['commercial'],
        url: `./Assets/musicore mockup.png`,
        tech: "WordPress, WooCommerce met custom HTML en CSS",
        link: 'https://musicore.co',
        description: `Sinds 2019 heb ik mijn eigen bedrijf gefocust op Muziek. Ik heb hiervoor zelf de website gemaakt met WordPress. Aan deze site heb ik ook veel custom CSS toegevoegd.`,
    }, 
    {
        id: 2,
        name: "Game Store",
        tags: ['framework'],
        url: `./Assets/game store mockup.png`,
        tech: "HTML, CSS, JavaScript & React",
        link: 'https://gamestore-react.vercel.app',
        description: `Dit is een Mockup van een E-Commerce Game Store waar ik de afgelopen maanden mee bezig ben geweest. Ik zal hier constant meer functionaliteit aan toevoegen zoals Product Pagina's en Checkout.`
    },
    {
        id: 3,
        name: "Film Info App",
        tags: ['api', 'framework'],
        url: `./Assets/movieinfo mockup.jpg`,
        tech: "HTML, CSS, JavaScript",
        link: 'https://movie-info-app-lyart.vercel.app',
        description: "Een Website waar mensen kunnen zoeken naar alle Films om daar meer informatie over te krijgen. Ik heb gebruik gemaakt van een echte API hiervoor; de OMDB API. Meer functionaliteit zal worden toegevoegd!"
    },
    {
        id: 4,
        name: "Wordle Clone",
        tags: ['framework', 'clones'], 
        url: `./Assets/wordle mockup.png`,
        tech: "HTML, CSS, JavaScript, React",
        link: "https://worlde-clone-react.vercel.app",
        description: "Een clone van de populaire Wordle Game. Het doel van deze game is om het juist gekozen woord te raden. Na elke gok zie je welke letters in het woord zitten en welke niet. Ik heb deze functionaliteit toegevoegd samen met een Score counter en een slimme fucntie die je niet letters laat typen die je al hebt gebruikt en niet in het woord zitten."
    },
    {
        id: 5,
        name: "Google Clone",
        tags: ['framework', 'clones', 'api'],
        url: `./Assets/google mockup.jpg`,
        tech: 'HTML, CSS, JavaScript, React',
        link: 'https://google-clone-six-tau.vercel.app',
        description: "Een clone van 's werelds meestgebruikte Search Engine: Google. Deze clone van Google heeft de basis functionaliteit van Google; het ophalen van informatie van het internet. Je kan zelf zoeken naar een onderwerp en daarvoor de resultaten zien. Ik heb gebruik gemaakt van een API om de Zoekresultaten voor een zoekopdracht te krijgen. Meer functionaliteit zal worden toegevoegd."
    }
]

for (let i = 0; i < filterButtonsEl.length; ++i) {
    filterButtonsEl[i].addEventListener('click', (e) => {
        const filter = e.target.textContent.toLowerCase()
        if (filterActive) {
            filterButtonsEl.forEach(item => item.classList.remove('selected__filter'))
            e.target.classList += ' selected__filter'
            renderProjects(filter)
        } else {
            e.target.classList += ' selected__filter'
            filterActive = true
            renderProjects(filter)
        }
    })
}

async function renderProjects(filter) {
    document.body.classList += ' spinner-visible'
    projectsListEl.innerHTML = ""
    let filteredProjects = projects

    if (filter === 'api') {
        filteredProjects = projects.filter(item => item.tags.includes('api'))
    }
    if (filter === 'framework') {
        filteredProjects = projects.filter(item => item.tags.includes('framework'))
    }
    if (filter === 'commercial') {
        filteredProjects = projects.filter(item => item.tags.includes('commercial'))
    }
    if (filter === 'clones') {
        filteredProjects = projects.filter(item => item.tags.includes('clones'))
    }
    if (filter === 'all') {
        filteredProjects = projects
    }
    
    let projectsHTML = filteredProjects.map(item => {
        return `
            <div class="project">
                <div class="project__wrapper">
                    <img src="${item.url}" class="project__img" alt="">
                    <div class="project__wrapper--bg"></div>
                    <div class="project__description">
                        <h3 class="project__description--title">${item.name}</h3>
                        <h4 class="project__description--sub-title">
                            ${item.tech}
                        </h4>
                        <p class="project__description--para">
                            ${item.description}
                        </p>
                        <div class="project__description--links">
                            <a href=${item.link} target="_blank" class="project__description--link"><i class="fas fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).join('')
    setTimeout(() => {
        projectsListEl.innerHTML = projectsHTML
        document.body.classList.remove('spinner-visible')
    }, 400)
}

renderProjects()