import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
})
export class User implements FormValueControl<UserModel> {
  value = model({ name: '', age: 20 });

  delete = output<void>();

  updateName(name: string) {
    this.value.update((curr) => ({ ...curr, name }));
  }

  updateAge(age: number) {
    this.value.update((curr) => ({ ...curr, age }));
  }
}
