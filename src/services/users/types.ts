export type Departament = {
  id?: number;
  name: string;
};

export type Position = {
  id?: number;
  name: string;
  departament: Departament;
};

export type User = {
  id?: number;
  username: string;
  first_name: string;
  last_name: string;
  position: Position;
  is_staff: boolean;
};
