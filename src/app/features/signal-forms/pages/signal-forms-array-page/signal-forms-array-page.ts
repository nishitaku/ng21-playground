import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { applyEach, form, FormField, min, required, schema } from '@angular/forms/signals';
import { User } from './components/user/user';

@Component({
  selector: 'signal-forms-array-page',
  imports: [FormField, User, JsonPipe],
  templateUrl: './signal-forms-array-page.html',
})
export class SignalFormsArrayPage {
  readonly usersModel = signal<UserModel[]>([]);

  readonly userSchema = schema<UserModel>((schemaPath) => {
    required(schemaPath.name, { message: '名前は必須項目です' });
    required(schemaPath.age, { message: '年齢は必須項目です' });
    min(schemaPath.age, 1, { message: '年齢は0より大きい数値を入力してください' });
  });

  readonly usersForm = form(this.usersModel, (schemaPath) => {
    applyEach(schemaPath, this.userSchema);
  });

  addUser() {
    const userModel: UserModel = {
      name: '',
      age: 20,
    };
    this.usersModel.update((curr) => [...curr, userModel]);
  }

  deleteUser(index: number) {
    this.usersModel.update((curr) => curr.filter((_, i) => i !== index));
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const credential = this.usersModel();
    console.warn(JSON.stringify(credential));
  }
}
