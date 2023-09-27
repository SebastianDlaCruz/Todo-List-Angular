import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ListTaskModel } from '../list-app/list.model';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnChanges {

  @Input('open') openModal!: boolean;
  @Input('taskValue') taskValue!: ListTaskModel;
  @Input('type') type!: string;

  @Output('customCloset') customClosetModal = new EventEmitter<void>();
  @Output('customAddTask') customAddTask = new EventEmitter<ListTaskModel>();
  @Output('customEditTask') customEditTask = new EventEmitter<string>();
  @Output('customOnEditTask') customOnEditTask = new EventEmitter<ListTaskModel>();


  ModalStyle = 'modal';
  ModalForm = 'modal-form';

  task: ListTaskModel = {
    id: '',
    date: '',
    description: '',
    important: '',
    title: ''
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.openModal) {
      this.ModalStyle = 'modal is-active-modal'
      this.ModalForm = 'modal-form is-active-modal-form'
    } else {
      this.ModalStyle = 'modal'
      this.ModalForm = 'modal-form'
    }

    this.task = { ...this.taskValue }
  }

  onClosetModal() {
    this.customClosetModal.emit();
  }

  generateID() {
    const timesTamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    const id = `${timesTamp}-${random}`;
    return id;
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();
  }

  onAddTask() {
    this.task['id'] = this.generateID();
    const item = this.task;
    this.customAddTask.emit(item);
    this.task = {
      id: '',
      date: '',
      important: '',
      description: '',
      title: ''
    }
  }

  onEditTask(id: string) {
    this.customEditTask.emit(id);
  }

  onEdit() {
    this.customOnEditTask.emit(this.task);
  }

}

