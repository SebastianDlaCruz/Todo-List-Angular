import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ListTaskModel } from '../list-app/list.model';



@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.css']
})

export class ContainerListComponent {
  @Input('type') type!: string;
  @Input('taskList') taskList!: ListTaskModel[];
  @Output('customDeleteTask') customDeleteTask = new EventEmitter<string>()
  @Output('customEditTask') customEditTask = new EventEmitter<string>()

  deleteTask(id: string) {
    this.customDeleteTask.emit(id);
  }

  editTask(id: string) {
    this.customEditTask.emit(id);
  }

}
