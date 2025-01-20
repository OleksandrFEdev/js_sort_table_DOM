'use strict';

const thead = document.querySelector('thead');

const buttons = thead.querySelectorAll('th');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => toSorting(index));
});

const names = [];
const position = [];
const ages = [];
const salarys = [];

function getPropertys() {
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((item) => {
    const cells = item.querySelectorAll('td');

    names.push(cells[0].textContent);
    position.push(cells[1].textContent);
    ages.push(cells[2].textContent);
    salarys.push(cells[3].textContent);
  });

  toSorting(names, position, ages, salarys);
}

function toSorting(index) {
  if (index === 0) {
    names.sort((a, b) => a.localeCompare(b));
  } else if (index === 1) {
    position.sort((a, b) => a.localeCompare(b));
  } else if (index === 2) {
    ages.sort((a, b) => a - b);
  } else if (index === 3) {
    const convertSalatyToNum = salarys.map((salary) => {
      return parseInt(salary.replace(/[^\d.-]/g, ''));
    });

    convertSalatyToNum.sort((a, b) => a - b);
    salarys.length = 0;
    salarys.push(...convertSalatyToNum);
  }

  updeteList();
}

function updeteList() {
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((row, index) => {
    const cells = row.querySelectorAll('td');

    cells[0].textContent = names[index] || cells[0].textContent;
    cells[1].textContent = position[index] || cells[1].textContent;
    cells[2].textContent = ages[index] || cells[2].textContent;
    cells[3].textContent = salarys[index] || cells[3].textContent;
  });
}

getPropertys();
