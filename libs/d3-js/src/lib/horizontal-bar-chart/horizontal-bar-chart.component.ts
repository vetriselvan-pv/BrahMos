/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'd3js-horizontal-bar-chart',
    templateUrl: './horizontal-bar-chart.component.html',
    styleUrls: ['./horizontal-bar-chart.component.scss'],
})
export class HorizontalBarChartComponent implements OnInit {
    private margin = 50;
    private width = 750 - this.margin * 2;
    private height = 400 - this.margin * 2;

    svg: any;

    ngOnInit(): void {
        console.log(this.svg);
        this.svg = d3
            .select('figure#barChart')
            .append('svg')
            .attr('width', this.width + this.margin * 2)
            .attr('height', this.height + this.margin * 2)
            .append('g')
            .attr(
                'transform',
                'translate(' + this.margin + ',' + this.margin + ')'
            );
        d3.json('./assets/json/horizontal-bar.json').then((res: any) => {
            console.log(res);
            this.render(res.data);
        });
    }

    render = (data: any) => {
        this.svg
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('width', 300)
            .attr('height', 300);
    };
}
