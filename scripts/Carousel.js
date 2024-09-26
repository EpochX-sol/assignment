export default class Carousel {
  constructor(element) {
    this.element = element;
    this.container = element.querySelector('.carousel__container');
    this.track = element.querySelector('.carousel__track');
    this.prevButton = element.querySelector('.carousel__nav--prev');
    this.nextButton = element.querySelector('.carousel__nav--next');
    this.slides = [];
    this.currentIndex = 0;
    this.slidesToShow = 1;
  }

  init(testimonials) {
    this.createSlides(testimonials);
    this.setupEventListeners();
    this.updateSlidesToShow();
    this.goToSlide(this.currentIndex);
  }

  createSlides(testimonials) {
    this.slides = testimonials.map((testimonial, index) => {
      const slide = document.createElement('div');
      slide.className = 'carousel__slide';
      slide.innerHTML = `
        <div class="carousel__card">
          <div class="carousel__card-header">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="carousel__profile-image">
            <div class="carousel__profile-info">
              <h3 class="carousel__name">${testimonial.name}</h3>
              <div class="carousel__stars">${'★'.repeat(testimonial.rating)}</div>
              <p class="carousel__age">Rookte ${testimonial.age} jaar</p>
            </div>
          </div>
          <p class="carousel__text">${testimonial.text}</p>
        </div>
      `;
      this.track.appendChild(slide);
      return slide;
    });
  }

  setupEventListeners() {
    this.prevButton.addEventListener('click', () => this.prevSlide());
    this.nextButton.addEventListener('click', () => this.nextSlide());
    window.addEventListener('resize', () => this.updateSlidesToShow());
  }

  updateSlidesToShow() {
    const windowWidth = window.innerWidth;
    this.slidesToShow = windowWidth >= 768 ? 3 : 1;
    this.goToSlide(this.currentIndex);
  }

  goToSlide(index) {
    this.currentIndex = index;
    const slideWidth = this.slides[0].offsetWidth;
    const offset = -index * slideWidth;
    this.track.style.transform = `translateX(${offset}px)`;
    this.updateActiveSlides();
  }

  updateActiveSlides() {
    this.slides.forEach((slide, index) => {
      const isActive = index >= this.currentIndex && index < this.currentIndex + this.slidesToShow;
      slide.classList.toggle('carousel__slide--active', isActive);
    });
  }

  prevSlide() {
    this.goToSlide((this.currentIndex - 1 + this.slides.length) % this.slides.length);
  }

  nextSlide() {
    this.goToSlide((this.currentIndex + 1) % this.slides.length);
  }
}