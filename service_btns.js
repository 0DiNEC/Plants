const gardens = document.querySelectorAll(".garden-section-contant");
const plantings = document.querySelectorAll(".planting-section-contant");
const lawns = document.querySelectorAll(".lawn-section-contant");


const onBtnGardenService_click = () => {
  showService();
  if (gardens.length > 0) {
    hideService(plantings, lawns);
  }
}

const onBtnPlantingService_click = () => {
  showService();
  if (plantings.length > 0) {
    hideService(gardens, lawns);
  }
}

const onBtnLawnService_click = () => {
  showService();
  if (lawns.length > 0) {
    hideService(gardens, plantings);
  }
}

const hideService = (service1, service2) => {
  if (service1.length > 0)
  service1.forEach((service) => { service.focus();  });
  if (service2.length > 0)
  service2.forEach((service) => { service.classList.add('_hide') });
}

const showService = () => {
  if (gardens.length > 0)
  gardens.forEach((service) => {
    if (service)
    service.classList.remove('_hide');
  });
  
  if (plantings.length > 0)
  plantings.forEach((service) => {
    if (service)
    service.classList.remove('_hide');
  });
  
  if (lawns.length > 0)
  lawns.forEach((service) => {
    if (service)
    service.classList.remove('_hide');
  });
}

const allService = document.querySelector('.all-service');
if (allService)
  allService.addEventListener('click', showService);