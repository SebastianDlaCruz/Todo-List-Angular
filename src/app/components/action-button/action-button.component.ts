import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {
  @Input('type') type!: string;
  @Output('customAddTask') customAddTask = new EventEmitter<void>();
  @Output('customEditTask') customEditTask = new EventEmitter<void>();


  addTask() {
    this.customAddTask.emit();
  }

  editTask() {
    this.customEditTask.emit()
  }

}
