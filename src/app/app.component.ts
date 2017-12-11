import {Component, OnInit} from '@angular/core';
import {UsersService} from './user-page/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

}
