import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { Interest } from 'src/app/models/interest';
import { UserRegisterDto } from 'src/app/models/user/userRegisterDto';

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

  @Input() interestsArray: Interest[] | undefined = undefined;
  @Output() registerEventEmmiter: EventEmitter<any> = new EventEmitter();

  //TODO: Validators.required
  registerFormUserDetails: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
  });

  listOfInterests: Interest[] = [];
  listOfTurnOns: Interest[] = [];
  listOfTurnOffs: Interest[] = [];

  registerFormUserPreferences: FormGroup = new FormGroup({});

  toggleChecked(checked: boolean, interestName: string, listToAddTo: string) {
    switch (listToAddTo) {
      case 'offs': {
        if (checked) this.handleAddToList(this.listOfTurnOffs, interestName, 2);
        else this.handleRemoveFromList(this.listOfTurnOffs, interestName);
        break;
      }
      case 'ons': {
        if (checked) this.handleAddToList(this.listOfTurnOns, interestName, 2);
        else this.handleRemoveFromList(this.listOfTurnOns, interestName);
        break;
      }
      case 'int': {
        if (checked)
          this.handleAddToList(this.listOfInterests, interestName, 3);
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
    interestName: string,
    maxNumberOfItemsInList: number
  ): boolean {
    if (list.length === maxNumberOfItemsInList) {
      this.toastrService.info('Already have enough items in this list', 'Info');
      return false;
    }
    const interestToAdd: Interest = {
      category: interestName,
    };
    list.push(interestToAdd);
    console.log(list);
    return true;
  }

  handleRemoveFromList(list: Interest[], interestName: string) {
    const interestIndex = list.findIndex(
      (interest: Interest) => interest.category === interestName
    );
    if (interestIndex != -1) list.splice(interestIndex, 1);
    console.log(list);
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
      (interest: Interest) => interest.category === interestToCheck
    );

    if (foundInterest) return false;
    else return true;
  }

  register() {
    if (this.registerFormUserDetails.valid && this.areListsValid()) {
      // console.log(this.registerFormUserDetails.value);
      // console.log('INTERESTS');
      // console.log(this.listOfInterests);
      // console.log('TURN ONS');
      // console.log(this.listOfTurnOns);
      // console.log('TURN OFFS');
      // console.log(this.listOfTurnOffs);
      // console.log('REGISTERING');

      const objForRegister: UserRegisterDto = {
        userDetails: this.registerFormUserDetails.value,
        listOfInterests: this.listOfInterests,
        listOfTurnOffs: this.listOfTurnOffs,
        listOfTurnOns: this.listOfTurnOns,
      };

      this.registerEventEmmiter.emit(objForRegister);
    } else {
      this.toastrService.info('Please enter all information needed', 'Info');
    }
  }
}
