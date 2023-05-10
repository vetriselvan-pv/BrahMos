import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalBarChartComponent } from './horizontal-bar-chart/horizontal-bar-chart.component';
import { Route, RouterModule } from '@angular/router';

const route: Route[] = [
    {
        path: '',
        component: HorizontalBarChartComponent,
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(route)],
    declarations: [HorizontalBarChartComponent],
    exports: [HorizontalBarChartComponent],
})
export class D3JsModule {}
