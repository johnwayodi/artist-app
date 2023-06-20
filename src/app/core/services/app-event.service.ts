import { Injectable } from '@angular/core';
import { Observable, Observer, Subscription, Subscriber } from 'rxjs';
import { filter, share, first, take } from 'rxjs/operators';

export interface IEventData {
  name: string;
  content?: any;
}

@Injectable({
  providedIn: 'root',
})
export class AppEventService {
  observable: Observable<any>;
  observer: Observer<any> | undefined;

  constructor() {
    this.observable = new Observable((observer: Observer<any>) => {
      this.observer = observer;
    }).pipe(share());
  }

  broadcast(event: IEventData) {
    if (this.observer != null) {
      this.observer.next(event);
    }
  }

  subscribe(
    eventName: string,
    callback: (event: IEventData) => void,
    firstOne?: boolean
  ): Subscription {
    if (firstOne) {
      return this.observable
        .pipe(
          filter((event) => {
            return event.name === eventName;
          }),
          first()
        )
        .subscribe(callback);
    }

    return this.observable
      .pipe(
        filter((event) => {
          return event.name === eventName;
        })
      )
      .subscribe(callback);
  }
}
