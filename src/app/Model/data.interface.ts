export interface Data {
  firstName: string;
  lastName: string;
  about: string;
  birthDate: Date;
  status: 'Deleted' | 'Active' | 'Inactive';
}
