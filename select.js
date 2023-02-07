const selectHeader = document.querySelector('.select-header');
if (selectHeader) {
  selectHeader.addEventListener('click', () => {
    closeOpenSelect(selectHeader.parentNode, true);
  });
}

const closeOpenSelect = (parent, bOpenClose) => {
  parent.classList.toggle('select--active');

  if (bOpenClose) {
    const img = parent.querySelector('.select-btn');
    if (parent.classList.contains('select--active')) {
      img.src = "Assets\\img\\accordion_btn_up.png";
      selectHeader.classList.add('--active');
    }
    else {
      img.src = "Assets\\img\\accordion_btn_down.png";
      selectHeader.classList.remove('--active');
    }
  }  
}


//change select name
const select_items = document.querySelectorAll('.select-item');
if (select_items.length > 0) {
  select_items.forEach((item) => {
    item.addEventListener('click', () => {
      let current = item.closest('.select').querySelector('.select-curent-item');
      current.textContent = item.textContent;
      closeOpenSelect(item.closest('.select'), false);
    });
  });
}

