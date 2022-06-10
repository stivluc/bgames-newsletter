import Team from '../../images/Team.svg'
import Cards from '../../images/Cards.svg'

export const homeObjOne = {
    id: 'presentation',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Qui sommes-nous ?',
    headline: 'La Games Mountain',
    description: 'Le fondateur, passionné de jeux de société, voyait son armoire se remplir, encore et encore... Une montagne de jeux se créa. C\'est sympa pour varier les plaisirs avec les copains, mais 480 jeux, ça commence à faire beaucoup !',
    description2: 'Une idée nous est alors venue : et si on mettait à disposition cette grande collection ? Plus écologique, plus économique, et ça permet de changer régulièrement : en bref, que du bonus !',
    buttonLabel: 'Comment ça marche ?',
    imgStart: false,
    img: Team,
    alt: "Team",
    dark: true,
    primary: true,
    darkText: false,
    tolink : 'pres2'
    }
    

export const homeObjTwo = {
    id: 'pres2',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Comment ça marche ?',
    headline: 'Fonctionnement du service',
    description: 'En quelques étapes, ce sera fait !',
    description2: '1. Je sélectionne mes jeux parmi une sélection plutôt sympathique (avis objectif)',
    description3: '2. Je choisis la durée de location, au choix : 1, 2 ou 4 semaines.',
    description4: '3. Livraison soit à domicile, soit click & collect ou alors directement à nos locaux !',
    description5: '4. Je profite de mes jeux, et les échange contre de nouveaux à la fin de ma durée de location ! 😉',
    buttonLabel: 'Intéressé ?',
    imgStart: true,
    img: Cards,
    alt: "Cards",
    dark: false,
    primary: false,
    darkText: true,
    tolink: 'contact'
    }
