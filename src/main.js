import TripPresenter from './presenter/trip-presenter.js';
import {render} from './render.js';
import TripInfoView from './view/trip-info.js';
import FiltersView from './view/filters-view.js';


const siteHeaderElement = document.querySelector('.page-header');
const siteTripMainElement = siteHeaderElement.querySelector('.trip-main');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');

const siteEventsElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({pointContainer: siteEventsElement});


render(new TripInfoView(), siteTripMainElement, 'afterbegin');
render(new FiltersView(), siteFiltersElement);

tripPresenter.init();
