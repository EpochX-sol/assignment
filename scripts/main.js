import Carousel from './Carousel.js';

const testimonials = [
    {
        id: 1,
        name: 'Esther',
        age: 34,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
    {
        id: 2,
        name: 'Esther',
        age: 42,
        rating: 4,
        text: 'Na jaren van roken heb ik eindelijk kunnen stoppen dankzij de HoliStop methode. Het heeft mijn leven compleet veranderd.',
        image: '/assets/profile.png'

    },
    {
        id: 3,
        name: 'Esther',
        age: 28,
        rating: 5,
        text: 'Ik dacht dat ik nooit zou kunnen stoppen, maar de HoliStop methode maakte het mogelijk. Nu voel ik me gezonder dan ooit.',
        image: '/assets/profile.png'

    },
    {
        id: 4,
        name: 'Esther',
        age: 39,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
    {
        id: 4,
        name: 'Esther',
        age: 39,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
    {
        id: 4,
        name: 'Esther',
        age: 39,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
    {
        id: 4,
        name: 'Esther',
        age: 39,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
    {
        id: 4,
        name: 'Esther',
        age: 39,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
    {
        id: 4,
        name: 'Esther',
        age: 39,
        rating: 5,
        text: 'Hier komt nog een korte introductie van de persoon in het interview met hun leeftijd en hoe lang ze rookten bijvoorbeeld',
        image: '/assets/profile.png'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel');
    const carousel = new Carousel(carouselElement);
    carousel.init(testimonials);
});