import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppCreateTaskComponent } from './app-create-task/app-create-task.component';
import { AppTasksListComponent } from './app-tasks-list/app-tasks-list.component';
import { AppTaskComponent } from './app-tasks-list/app-task/app-task.component';
import { TasksService } from './shared/tasks.service';
import { AppTasksOptionsComponent } from './app-tasks-options/app-tasks-options.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCreateTaskComponent,
    AppTasksListComponent,
    AppTaskComponent,
    AppTasksOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
