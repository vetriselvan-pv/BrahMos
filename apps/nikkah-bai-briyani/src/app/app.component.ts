import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
    standalone: true,
    imports: [RouterModule, HomeComponent, CommonModule, HeaderComponent],
    selector: 'nikkah-bai-briyani-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'nikkah-bai-briyani';
    briyaniList = [
        {
            title: 'Chicken Biryani',
            description: '',
            price: '',
            img: './assets/background-image/chicken-briyani.jpeg',
        },
        {
            title: 'Mutton Biryani',
            description: '',
            price: '',
            img: './assets/background-image/mutton-briyani.jpeg',
        },
        {
            title: 'Beef Biryani',
            description: '',
            price: '',
            img: './assets/background-image/beef-Biryani.jpg',
        },
    ];
}
