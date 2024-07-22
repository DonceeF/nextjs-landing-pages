enum Speciality {}

interface IFormInputBase {
  nom: string;
  prenom: string;
}

export interface IFormHomeInput extends IFormInputBase {
  telephone: number;
  specialite: Speciality;
  checkbox: boolean;
}

export interface IFormContactInput extends IFormInputBase {}

export type IFormInput = IFormHomeInput & IFormContactInput;
