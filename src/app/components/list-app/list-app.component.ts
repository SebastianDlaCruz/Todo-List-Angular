import { Component, inject, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/lists/list.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { ListTaskModel } from './list.model';

@Component({
  selector: 'app-list-app',
  templateUrl: './list-app.component.html',
  styleUrls: ['./list-app.component.css'],
})

export class ListAppComponent implements OnInit {

  openModal = false;
  taskValue!: ListTaskModel;
  typeButton!: string;

  private listTaskService = inject(ListService);
  private localStorage = inject(LocalStorageService);


  ngOnInit(): void {
    const item = this.localStorage.getItem('list');
    if (item) {
      this.listTaskService.iniLisTask(item);
    }
  }

  onOpenModal(type?: string) {
    this.openModal = true;
    if (type) {
      this.typeButton = type;
    }

  }

  onClosetModal() {
    this.openModal = false;
    this.taskValue = { id: '', date: '', description: '', important: '', title: '' };
  }

  onAddTask(task: ListTaskModel) {
    this.listTaskService.addTask(task);
    this.localStorage.setItem('list', this.listTaskService.listTask);
  }

  getDataTodoList() {
    return this.listTaskService.listTask;
  }

  deleteTask(id: string) {
    this.listTaskService.deleteTask(id);
    this.localStorage.setItem('list', this.listTaskService.listTask)
  }

  editTask(id: string) {
    this.onOpenModal('edit');
    const item = this.listTaskService.show(id);
    if (item) {
      this.taskValue = item;

    }
  }

  onEditTask(task: ListTaskModel) {
    this.listTaskService.updateTask(this.taskValue.id, task);
    this.localStorage.setItem('list', this.listTaskService.listTask);
  }




}
