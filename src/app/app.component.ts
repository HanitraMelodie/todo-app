import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoArray: string[] = [];

  addTodo(value: string) {
    if (value.trim()) {
      this.todoArray.push(value.trim());

    }
    console.log(this.todoArray);
  }

  deleteItem(todo: string) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
    console.log("delete item")
  }
  todoSubmit(value: string) {
    if (value.trim()) {
      this.addTodo(value.trim());
    } else {
      alert('Field required **');
    }
  }

}

