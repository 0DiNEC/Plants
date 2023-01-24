document.querySelectorAll('.accordion-price-item__triger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    const img = item.querySelector('.accordion-btn');

    if (parent.classList.contains('accordion-price-item--active')) {
      parent.classList.remove('accordion-price-item--active');
      img.src = "Assets\\img\\accordion_btn_down.png"
    }
    else {
      document.querySelectorAll('.accordion-price-item').forEach((child) => {
        child.classList.remove('accordion-price-item--active');
        child.querySelector('.accordion-btn').src = "Assets\\img\\accordion_btn_down.png";
      })

      parent.classList.add('accordion-price-item--active');
      img.src = "Assets\\img\\accordion_btn_up.png"
    }
  })
)