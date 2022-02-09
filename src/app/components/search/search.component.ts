import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserSearchViewsService } from 'src/app/services/user-search-views.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private userSearchViewsService: UserSearchViewsService) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  placeholder: string | undefined = undefined;

  destroy$: Subject<boolean> = new Subject();

  results: any | undefined = undefined;

  ngOnInit(): void {}

  searchValue = new FormControl('', [Validators.required]);

  selectFilter(value: string) {
    switch (value) {
      case 'username': {
        this.placeholder = 'u';
        break;
      }
      case 'location': {
        this.placeholder = 'l';
        break;
      }
      default: {
        this.placeholder = 'fn';
      }
    }
  }

  searchByFilter() {
    let valueForSend = this.searchValue.value;
    this.searchValue.setValue('');
    if (this.placeholder)
      this.userSearchViewsService
        .getSpecificUser(this.placeholder, valueForSend)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (data: any) => {
            this.results = data;
          },
        });
  }
}
