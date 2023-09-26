import { Component, Input } from '@angular/core';
import { ImportanceEnum } from './importance.constant';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.css']
})
export class ImportanceComponent {
  @Input('text') text !: string;
  currentStatus = ImportanceEnum;
}
