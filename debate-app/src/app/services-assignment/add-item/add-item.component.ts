import { LoggingService } from './../logging.servce';
import { Component, OnInit, 
        Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers:[LoggingService]
})
export class AddItemComponent implements OnInit {

  @Output() addNewUser = new EventEmitter<{name:string, email:string}>();
  @ViewChild('emailInput') emailInp: ElementRef;
  @ViewChild('nameInput') nameInp: ElementRef;

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  addUser() {
    let name = this.emailInp.nativeElement.value;
    let email = this.nameInp.nativeElement.value;
    this.addNewUser.emit({name, email});
    this.loggingService.log('Add');
  }

}
