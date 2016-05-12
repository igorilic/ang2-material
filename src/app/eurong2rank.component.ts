import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdIcon } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES} from '@angular2-material/input';

let max = 5;

@Component({
  moduleId: module.id,
  selector: 'eurong2rank-app',
  templateUrl: 'eurong2rank.component.html',
  styleUrls: ['eurong2rank.component.css'],
  directives: [MdToolbar, MdButton, MD_INPUT_DIRECTIVES, MdCard, MdCheckbox, MdIcon]
})
export class Eurong2rankAppComponent {
  title = 'eurong2rank works!';
  
  dividerColor: boolean;
  requiredField: boolean;
  floatingLabel: boolean;
  name: string;
  items: any[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 40 },
    { value: 50 }
  ];
  
  addABunch(n: number) {
    for (let x = 0; x < n; x++) {
      this.items.push({ value: ++max });
    }
  }
}
