import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jay Parker Productions';

  constructor(private router: Router, private _activateRoute: ActivatedRoute) {
    this.router.navigate(['/main/home']);
   }
  
}
