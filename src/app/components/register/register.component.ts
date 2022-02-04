import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { max, Subject } from 'rxjs';
import { Interest } from 'src/app/models/interest';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private toastrService: ToastrService, private router: Router) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe;
  }

  ngOnInit(): void {}

  destroy$: Subject<boolean> = new Subject();

  registerFormUserDetails: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  listOfInterests: Interest[] = [];
  listOfTurnOns: Interest[] = [];
  listOfTurnOffs: Interest[] = [];

  checkboxesTurnOnsDisabled: boolean = true;

  registerFormUserPreferences: FormGroup = new FormGroup({});

  toggleChecked(
    checked: boolean,
    category: string,
    interestName: string,
    listToAddTo: string
  ) {
    switch (listToAddTo) {
      case 'offs': {
        if (checked)
          this.handleAddToList(this.listOfTurnOffs, category, interestName, 2);
        else this.handleRemoveFromList(this.listOfInterests, interestName);
        break;
      }
      case 'ons': {
        if (checked)
          this.handleAddToList(this.listOfTurnOns, category, interestName, 2);
        else this.handleRemoveFromList(this.listOfTurnOns, interestName);
        break;
      }
      case 'int': {
        if (checked)
          this.handleAddToList(this.listOfInterests, category, interestName, 3);
        else this.handleRemoveFromList(this.listOfInterests, interestName);
        break;
      }
      default: {
        this.toastrService.error(
          'I should not have entered here. HELP!',
          'Error'
        );
      }
    }
  }

  handleAddToList(
    list: Interest[],
    category: string,
    interestName: string,
    maxNumberOfItemsInList: number
  ): boolean {
    if (list.length === maxNumberOfItemsInList) {
      this.toastrService.info('Already have enough items in this list', 'Info');
      return false;
    }
    const interestToAdd: Interest = {
      category,
      name: interestName,
    };
    list.push(interestToAdd);
    if (this.checkIfListFull(list, maxNumberOfItemsInList)) {
      this.checkboxesTurnOnsDisabled = true;
    } else this.checkboxesTurnOnsDisabled = false;
    return true;
  }

  handleRemoveFromList(list: Interest[], interestName: string) {
    const interestIndex = list.findIndex(
      (interest: Interest) => interest.name === interestName
    );
    if (interestIndex != -1) list.splice(interestIndex, 1);
  }

  checkIfListFull(list: Interest[], maxNumber: number): boolean {
    if (list.length === maxNumber) return true;
    return false;
  }

  areListsValid(): boolean {
    if (
      this.listOfInterests.length === 3 &&
      this.listOfTurnOffs.length === 2 &&
      this.listOfTurnOns.length === 2
    )
      return true;
    return false;
  }

  shouldDisableCheckbox(list: Interest[], interestToCheck: string) {
    const foundInterest = list.find(
      (interest: Interest) => interest.name === interestToCheck
    );

    if (foundInterest) return false;
    else return true;
  }

  //TODO: find a way to get all preferences
  register() {
    if (this.registerFormUserDetails.valid && this.areListsValid()) {
      console.log(this.registerFormUserDetails.value);
      console.log('INTERESTS');
      console.log(this.listOfInterests);
      console.log('TURN ONS');
      console.log(this.listOfTurnOns);
      console.log('TURN OFFS');
      console.log(this.listOfTurnOffs);
      console.log('REGISTERING');
    } else {
      this.toastrService.info('Please enter all information needed', 'Info');
    }
  }
}
