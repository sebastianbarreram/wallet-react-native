import { AccountInterface } from '../../redux/interfaces/AccountInterface';
import { MovementInterface } from '../../redux/interfaces/MovementInterface';
import { AccountGetByIdInterface } from './accountGetByIdInterface';
export interface AccountFullInterface {
  account: AccountInterface;
  movements: MovementInterface[];
  images: AccountGetByIdInterface[];
}
