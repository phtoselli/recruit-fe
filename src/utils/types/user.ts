export interface User {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  picture?: string;
  city?: string;
  district?: string;
  uf?: string;
  gender?: string;
  socialLink?: string;
  education?: string;
  professionalGoals?: string;
  tecnicalHabilities?: string[];
  professionalExperiences?: string[];
}

export interface Login {
  email: string;
  password: string;
}

export interface Filter {
  name?: string;
}