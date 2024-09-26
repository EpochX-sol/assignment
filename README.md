# Stoppers Carousel Component

This project implements a carousel component for Stoppers.nl, showcasing experiences of ex-smokers.

## Project Structure

- `index.html`: Main HTML file
- `styles/`: SCSS files
  - `main.scss`: Main SCSS file that imports others
  - `_variables.scss`: SCSS variables
  - `_mixins.scss`: Reusable SCSS mixins
  - `_carousel.scss`: Styles specific to the carousel
  - `_responsive.scss`: Media queries for responsiveness
- `scripts/`: JavaScript files
  - `main.js`: Main JS file
  - `Carousel.js`: Carousel class implementation
  - `utils.js`: Utility functions
- `assets/`: Fonts and images

## Setup

1. Clone this repository
2. Open `index.html` in a web browser

## Development

- SCSS files need to be compiled to CSS. You can use a task runner like Gulp or a module bundler like Webpack for this purpose.
- Ensure all image assets are placed in the `assets/images/` directory.
- The Recoleta font file should be placed in `assets/fonts/`.

## Notes

- This implementation uses vanilla JavaScript with ES6 modules. Ensure your development environment supports this.
- The carousel is responsive and should work well on various screen sizes.
- Accessibility features have been considered in the implementation.