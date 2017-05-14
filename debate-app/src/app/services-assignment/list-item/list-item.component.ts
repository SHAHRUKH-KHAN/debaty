import { LoggingService } from './../logging.servce';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  providers: [LoggingService]
})
export class ListItemComponent implements OnInit {

  @Input() newItems:{name:string, email:string}[] = [];
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  remove(index) {
    this.newItems.splice(index, 1);
    this.loggingService.log('Delete');
  }
}
