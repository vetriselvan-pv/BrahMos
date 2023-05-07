import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AngularCoreModule } from '@brahmos/angular-core';
import { ICoreHeaderConfig } from '@brahmos/shared-modal';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    standalone: true,
    imports: [
        RouterModule,
        AngularCoreModule,
        HeaderComponent,
        FooterComponent,
    ],
    selector: 'brahmos-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'viva-acadamey';

    headerConfig: ICoreHeaderConfig = {};
}
