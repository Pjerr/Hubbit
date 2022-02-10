import { Interest } from '../interest';
import { UserRegisterDetails } from './userRegisterDetails';

export interface UserRegisterDto {
  userDetails: UserRegisterDetails;
  listOfTurnOns: Interest[];
  listOfTurnOffs: Interest[];
  listOfInterests: Interest[];
}
