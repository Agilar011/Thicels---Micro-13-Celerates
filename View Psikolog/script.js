const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const textWrapper = document.querySelector('.text-wrapper-2');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

dropdownContent.addEventListener('click', (event) => {
  const selectedOption = event.target.closest('li');
  if (selectedOption) {
    textWrapper.textContent = selectedOption.textContent;
    dropdownContent.classList.remove('show');
    dropdownContent.querySelectorAll('li').forEach((option) => {
      option.classList.remove('selected');
    });
    selectedOption.classList.add('selected');
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});