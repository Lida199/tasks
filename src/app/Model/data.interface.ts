export type Statuses = 'Deleted' | 'Active' | 'Inactive';
export interface Data {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: Date;
  status: Statuses;
}
