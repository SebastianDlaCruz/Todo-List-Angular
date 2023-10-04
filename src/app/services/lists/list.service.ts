import { Injectable } from '@angular/core';
import { ListTaskModel } from 'src/app/components/list-app/list.model';


@Injectable({
  providedIn: 'root'
})

export class ListService {


  listTask: ListTaskModel[] = [];

  constructor() { }

  iniLisTask(list: any) {
    this.listTask = list;
  }

  addTask(task: ListTaskModel) {
    this.listTask.push(task);
  }

  deleteTask(id: string) {
    const newList = this.listTask.filter(item => item.id !== id);
    this.listTask = newList;
  }

  updateTask(id: string, newData: ListTaskModel) {
    this.listTask = this.listTask.map(item => item.id === id ? { ...item, ...newData } : item)
    console.log(newData)
  }

  show(id: string) {
    const item = this.listTask.find(item => item.id === id)
    return item;
  }



}
