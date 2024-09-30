import { Company } from "./company";
import { User } from "./user";

export interface Job {
  id?: number;
  name: string;
  jobDescription: string;
  position: string;
  education: string;
  createDate: Date;
  expireDate: Date;
  status: string;
  company?: Company;
  companyDescription?: string;
  users?: User[];
}

export interface Filter {
  name?: string;
  startDate?: Date;
  endDate?: Date;
}
