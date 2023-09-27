import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsModalService {

  openModalCreate: boolean;
  opeModalEdit: boolean;

  constructor() {
    this.openModalCreate = false;
    this.opeModalEdit = false;
  }

  OpenModal(type: string) {
    if (type === "create") {
      this.openModalCreate = true;
    } else if (type === "edit") {
      this.openModalCreate = true;
    }
  }

  closetModal(type: string) {
    if (type === "create") {
      this.openModalCreate = false;
    } else if (type === "edit") {
      this.openModalCreate = false;
    }
  }


}
