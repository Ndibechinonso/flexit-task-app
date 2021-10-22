import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() color: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  // sendButtonType() {
  //   this.dataService.sendElementType(this.buttonProp.buttonType || this.buttonProp.type);
  // }

}
