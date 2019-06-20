import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.searchResList.innerHTML = '';
};

const renderItem = item => {
    const markup = `
        <li class="results__item">
            <figure class="results__image">
                <img src="${item.links[0].href}" alt="${item.data[0].title}">
            </figure>
            <h2 class="results__title">${item.data[0].title}</h2>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = items => {
  items.forEach(renderItem);
};
