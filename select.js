const selectHeader = document.querySelector('.select-header');
const afterSelectWrapper = document.querySelector('.after-select-wrapper');

if (selectHeader) {
  selectHeader.addEventListener('click', () => {
    closeOpenSelect(selectHeader.parentNode, true);
    if (afterSelectWrapper.classList.contains('--active'))
      afterSelectWrapper.classList.remove('--active');
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
      if (afterSelectWrapper.classList.contains('--active')) {
        let current = selectHeader.closest('.select').querySelector('.select-curent-item');
        current.textContent = 'City';
      }
    }
  }
}


//change select name
const select_items = document.querySelectorAll('.select-item');
if (select_items.length > 0) {
  select_items.forEach((item) => {
    item.addEventListener('click', () => {
      let current = item.closest('.select').querySelector('.select-curent-item');
      let cityInfo = document.getElementById('wrapper-city-info');
      let phoneInfo = document.getElementById('wrapper-phone-info');
      let officeInfo = document.getElementById('wrapper-office-info');

      switch (item.id) {
        case 'city-canandaigua':
          phoneInfo.textContent = '+1 585 325 2810';
          officeInfo.textContent = '151 Charlotte Street';
          break;
        case 'city-newYork':
          phoneInfo.textContent = '+1 202 939 8907';
          officeInfo.textContent = 'Washington, D.C. 20007';
          break;
        case 'city-younkers':
          phoneInfo.textContent = '+1 914-377 6450';
          officeInfo.textContent = 'Century 21 American Homes';
          break;
        case 'city-sherrill':
          phoneInfo.textContent = '+1 202 225 5034';
          officeInfo.textContent = 'Road Parsippany, NJ 07054';
          break;
      }

      cityInfo.textContent = item.textContent;
      current.textContent = item.textContent;
      closeOpenSelect(item.closest('.select'), false);
      afterSelectWrapper.classList.add('--active');
    });
  });
}

