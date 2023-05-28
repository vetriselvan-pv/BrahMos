import { bootstrapApplication } from '@angular/platform-browser';
import {
    provideRouter,
    withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { StudioState } from '@brahmos/custom-studio';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
        importProvidersFrom(
            BrowserAnimationsModule,
            NgxsModule.forRoot([StudioState]),
            NgxsReduxDevtoolsPluginModule.forRoot(),
            // NgxsStoragePluginModule.forRoot(),
            NgxsRouterPluginModule.forRoot(),
            NgxsLoggerPluginModule.forRoot()
        ),
    ],
}).catch((err) => console.error(err));

/**
 *  NgxsStoragePluginModule is commented because when its given as empty default stae are stored in the localstorage and retained after refresh also
 *
 */
