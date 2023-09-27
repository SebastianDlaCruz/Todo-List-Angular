import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { ImportanceComponent } from './components/importance/importance.component';
import { ListAppComponent } from './components/list-app/list-app.component';
import { ModalComponent } from './components/modal/modal.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
@NgModule({
  declarations: [
    AppComponent,
    ListAppComponent,
    ContainerListComponent,
    ModalComponent,
    ImportanceComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
