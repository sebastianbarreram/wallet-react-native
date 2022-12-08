import { AccountInterface } from './AccountInterface';
import { AppInterface } from './AppInterface';
export interface ClientInterface {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  photo: string;
  state: number;
  createdAt: Date;
  updatedAt: Date | null;
  account: AccountInterface;
  app: AppInterface;
}
