import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

// https://d3-graph-gallery.com/graph/pie_annotation.html

@Component({
  templateUrl: './pie-labels-demo.component.html'
})
export class PieLabelsDemoComponent implements OnInit {
  ngOnInit() {
    const width = 450;
    const height = 450;
    const radius = Math.min(width, height) / 2 - 20;

    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie: any = d3.pie().value(1);
    const arc: any = d3.arc().innerRadius(180).outerRadius(radius);
    const color = d3.scaleOrdinal().range(d3.schemeDark2);

    const data = ['aaaaaa', 'bbbbbb', 'cccccc', 'dddddd', 'dddddd', 'dddddd', 'dddddd', 'dddddd', '5', '6', '7'];

    svg
      .selectAll('chart')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('id', (d, i) => `arc_${i}`)
      .attr('fill', (d: any) => color(d) as any)
      .attr('class', 'stroke-white stroke-2');

    svg
      .selectAll('labels')
      .data(data)
      .enter()
      .append('text')
      .attr('dx', 10)
      .attr('dy', 18)
      .append('textPath')
      .attr('xlink:href', (d, i) => `#arc_${i}`)
      .text((d: any) => d);
  }
}
