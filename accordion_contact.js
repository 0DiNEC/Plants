document.querySelectorAll('.accordion-contact-item__triger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    const img = item.querySelector('.accordion-btn');

    if (parent.classList.contains('accordion-contact-item--active')) {
      parent.classList.remove('accordion-contact-item--active');
      img.src = "Assets\\img\\accordion_btn_down.png"
    }
    else {
      document.querySelectorAll('.accordion-contact-item').forEach((child) => {
        child.classList.remove('accordion-contact-item--active');
        child.querySelector('.accordion-btn').src = "Assets\\img\\accordion_btn_down.png";
      })

      parent.classList.add('accordion-contact-item--active');
      img.src = "Assets\\img\\accordion_btn_up.png"
    }
  })
)