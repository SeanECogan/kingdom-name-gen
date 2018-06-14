import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kng-names-display',
  templateUrl: './names-display.component.html',
  styleUrls: ['./names-display.component.css']
})
export class NamesDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() names: string[];
}
