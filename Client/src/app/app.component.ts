import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { AuthService } from './services/auth.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pageTitle = 'User Info';
  loading: boolean = true;

  constructor(private authService: AuthService, private messageService: MessageService, private router: Router) {
        router.events.subscribe( (routerEvent: Event) => {
          this.checkRouterEvent(routerEvent);
        });
  }

    checkRouterEvent(routerEvent: Event): void {
      if (routerEvent instanceof NavigationStart) {
          this.loading = true;
      }
      
      if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
          this.loading = false;
      }
  }
  /*
    displayMessages(): void {
      this.router.navigate([{outlets: { popup: ['messages']}}]); // Works
      this.messageService.isDisplayed = true;
  }
  
  hideMessages(): void {
      this.router.navigate([{ outlets: { popup: null } }]);
      this.messageService.isDisplayed = false;
  } */
  
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/login');    
  }
}
