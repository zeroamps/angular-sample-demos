import { Component, ViewEncapsulation } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';

const states = [
  'Alabama lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Alaska lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'American Samoa lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Arizona lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Arkansas lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'California lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Colorado lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Connecticut lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Delaware lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'District Of Columbia lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Federated States Of Micronesia lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Florida lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Georgia lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Guam lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Hawaii lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Idaho lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Illinois lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Indiana lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Iowa lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Kansas lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Kentucky lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Louisiana lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Maine lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Marshall Islands lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Maryland lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Massachusetts lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Michigan lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Minnesota lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Mississippi lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Missouri lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Montana lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Nebraska lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Nevada lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'New Hampshire lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'New Jersey lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'New Mexico lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'New York lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'North Carolina lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'North Dakota lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Northern Mariana Islands lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Ohio lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Oklahoma lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Oregon lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Palau lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Pennsylvania lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Puerto Rico lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Rhode Island lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'South Carolina lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'South Dakota lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Tennessee lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Texas lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Utah lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Vermont lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Virgin Islands lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Virginia lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Washington lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'West Virginia lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Wisconsin lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.',
  'Wyoming lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, recusandae.'
];

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TypeaheadComponent {
  public model: any;

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) => (term.length < 2 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
}
