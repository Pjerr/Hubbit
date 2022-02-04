import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  placeholder: string | undefined = undefined;

  ngOnInit(): void {}

  searchValue = new FormControl('', [Validators.required]);

  selectFilter(value: string) {
    this.placeholder = value;
  }

  searchByFilter() {
    console.log(this.placeholder);
    console.log(this.searchValue.value);
    //API CALL ZA SEARCH
  }
}
