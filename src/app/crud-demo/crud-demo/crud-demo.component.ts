import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from '../create-user/create-user.component';
import { ReadUserComponent } from '../read-user/read-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { ListUsersComponent } from '../list-users/list-users.component';

@Component({
  selector: 'app-crud-demo',
  standalone: true,
  imports: [CommonModule, CreateUserComponent, ReadUserComponent, 
            UpdateUserComponent, DeleteUserComponent, ListUsersComponent],
  templateUrl: './crud-demo.component.html',
  styleUrls: ['./crud-demo.component.css']
})
export class CrudDemoComponent {
  crudOperation: string | undefined;

  onSelection(operation: string) {
    this.crudOperation = operation;
  }

  listUsers() {
    this.crudOperation = 'list';
  }
}
