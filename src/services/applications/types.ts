import { User } from "../users/types";

export enum ApplicationStatus {
  OPEN = "Открыто",
  CLOSED = "Закрыто",
  IN_WORK = "В работе",
}

export type Application = {
  id?: number;
  theme?: string;
  text: string;
  user: User;
  status: ApplicationStatus;
  at_created: Date;
  at_updated: Date;
};

export type CreateApplicationData = {
  theme: string;
  text: string;
};
