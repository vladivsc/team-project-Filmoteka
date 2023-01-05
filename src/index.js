import { entryField } from './js/searchFilms';
import { onCardClick, onUpcomingClick } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';
import { backToTop } from './js/backToTop';
import { renderUpcoming } from './js/renderUpcoming';

//Imports
import './js/auth';
import './js/home';
import './js/addToLibrary';
import './js/signupModal';

import { FetchAPI } from './js/api';

import { createGenresFilter } from './js/genresFilter';
import { switchMode } from './js/mode';

import { fetchGenreUrl } from './js/api';
import { slides } from './js/onUpcomingClick';

export const body = document.querySelector('body');
export const galleryList = document.querySelector('.gallery');
export const modeCheckbox = document.querySelector('.mode-checkbox');

// Classes
export const fetchApi = new FetchAPI();

// Listeners
document.addEventListener('DOMContentLoaded', createGenresFilter);
modeCheckbox.addEventListener('click', switchMode);
document.addEventListener('DOMContentLoaded', renderUpcoming);
