import { MovementInterface } from './MovementInterface';
export interface AccountInterface {
  id: string;
  idClient: string;
  balance: string;
  credit: string;
  state: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt: Date | null;
  movementsIncome: MovementInterface[];
  movementsOutcome: MovementInterface[];
}
