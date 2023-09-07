import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  templateUrl: './d3-demo.component.html'
})
export class D3DemoComponent implements OnInit {
  ngOnInit() {
    this.createDonutPieChart();
  }

  private createDonutPieChart() {
    const input = [
      { value: 10, color: 'red' },
      { value: 50, color: 'blue' },
      { value: 80, color: 'green' },
      { value: 60, color: 'yellow' },
      { value: 20, color: 'brown' }
    ];

    const width = window.innerWidth;
    const height = window.innerHeight;
    const innerRadius = 64;
    const outerRadius = 80;

    const data = input.map((d, i) => ({
      color: d.color,
      startAngle: i * ((2 * Math.PI) / input.length),
      endAngle: i * ((2 * Math.PI) / input.length) + d.value / 100
    }));

    const arc = (startAngle: number, endAngle: number) =>
      d3.arc()({
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        startAngle: startAngle,
        endAngle: endAngle
      });

    const transform = (selection: d3.Selection<SVGGElement, unknown, HTMLElement, any>, offset: number = 0) =>
      selection.attr('transform', `translate(${width / 2},${height / 2 + offset})`);

    const svg = d3.select('svg').attr('width', width).attr('height', height).attr('class', 'bg-[#D4CBF0]');

    svg
      .append('g')
      .call(transform)
      .append('path')
      .attr('d', arc(0, 2 * Math.PI))
      .attr('class', 'fill-gray-200');

    svg.append('g').call(transform).append('circle').attr('r', innerRadius).attr('class', 'fill-gray-100');

    svg
      .append('g')
      .call(transform)
      .selectAll('slices')
      .data(data)
      .join('path')
      .attr('d', (d, i) => arc(d.startAngle, d.endAngle))
      .attr('fill', (d) => d.color);

    svg
      .append('g')
      .call(transform)
      .append('text')
      .text('Walking')
      .attr('class', 'text-xl uppercase font-semibold font-mono')
      .style('text-anchor', 'middle');

    svg
      .append('g')
      .call(transform, 20)
      .append('text')
      .text('3:30 min')
      .attr('class', 'font-semibold')
      .style('text-anchor', 'middle');
  }
}
