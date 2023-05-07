import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBarListComponent } from './menu-bar-list/menu-bar-list.component';

@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent,
        MenuBarComponent,
        MenuBarListComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
