import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nikkah-bai-briyani-home',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    foodList: Array<any> = [
        {
            title: 'chicken briyani',
        },
        {
            title: 'chicken briyani',
        },
        {
            title: 'chicken briyani',
        },
        {
            title: 'chicken briyani',
        },
    ];
}
