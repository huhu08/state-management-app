import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StateButtonsComponent } from './state-buttons/state-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        StateButtonsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ counter: counterReducer })
       
    ]
})
export class AppModule { }
