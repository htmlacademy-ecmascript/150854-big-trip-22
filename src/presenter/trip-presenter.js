import {render} from '../render.js';
import SortingView from '../view/sorting-view.js';
import EventsListView from '../view/events-list-view.js';
import EventPointView from '../view/event-point.js';
import EventEditFormView from '../view/event-edit-form-view.js';


export default class TripPresenter {

  eventsListComponent = new EventsListView();

  constructor({pointContainer}) {
    this.pointContainer = pointContainer;
  }

  init() {
    render(new SortingView(), this.pointContainer);
    render(this.eventsListComponent, this.pointContainer);
    render(new EventEditFormView(), this.eventsListComponent.getElement());

    for (let i = 1; i <= 3; i++){
      render(new EventPointView(), this.eventsListComponent.getElement());

    }
  }
}
