//Imports
import './js/auth';
import './js/addToLibrary';
import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { onCardClick } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';
import { backToTop } from './js/backToTop';
import { switchMode } from './js/mode';
import { onLoadMore, onLoadMoreSearch } from './js/loadMore';

// Variables
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

export const body = document.querySelector('body');
export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');
export const modeCheckbox = document.querySelector('.mode-checkbox');
export const loadMoreTrend = document.querySelector('.loadMoreBtn');
export const loadMoreSearchBtn = document.querySelector('.loadMoreSearchBtn');

// Classes
export const fetchApi = new FetchAPI();

// Listeners
document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
document.addEventListener('click', getTrailerFilm);
searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));
modeCheckbox.addEventListener('click', switchMode);
loadMoreTrend.addEventListener('click', onLoadMore);
loadMoreSearchBtn.addEventListener('click', onLoadMoreSearch);
