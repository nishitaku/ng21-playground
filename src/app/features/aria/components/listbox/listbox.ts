import { Listbox, Option } from '@angular/aria/listbox';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listbox',
  imports: [Listbox, Option, FormsModule],
  templateUrl: './listbox.html',
  styleUrl: './listbox.css',
})
export class ListboxComponent {
  /** The options available in the listbox. */
  options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
  ];

  values = signal<string[]>([]);
}
