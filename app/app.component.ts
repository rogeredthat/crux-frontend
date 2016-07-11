import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/views/app.component.html',
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
