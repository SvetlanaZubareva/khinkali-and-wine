  
const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('square-animation');
    }
  });
});
observer.observe(document.querySelector('.section-minu__h2'));
observer.observe(document.querySelector('.main__section'));
observer.observe(document.querySelector('.section-minu__ul'));
 