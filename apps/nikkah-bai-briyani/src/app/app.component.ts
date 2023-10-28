import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
    standalone: true,
    imports: [RouterModule, HomeComponent],
    selector: 'nikkah-bai-briyani-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'nikkah-bai-briyani';
}
