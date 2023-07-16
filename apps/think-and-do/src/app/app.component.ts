import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { D3JsModule } from '@brahmos/d3-js';

@Component({
    standalone: true,
    imports: [RouterModule, D3JsModule],
    selector: 'brahmos-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'think-and-do';
}
