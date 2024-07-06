import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState} from '../state/app.state';
import { selectCount } from '../state/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { increment,decrement,reset } from '../state/counter/counter.action';
@Component({
  selector: 'app-state-buttons',
  templateUrl: './state-buttons.component.html',
  styleUrls: ['./state-buttons.component.scss']
})
export class StateButtonsComponent {
count$:Observable<number>;
constructor(private store:Store<AppState>){

  this.count$=this.store.select(selectCount)
}
increment(){
this.store.dispatch(increment());
}
decrement(){
this.store.dispatch(decrement());
}
reset(){
this.store.dispatch(reset());
}
}
