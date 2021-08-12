import AddressModel from "./AddressModel";
import CompanyModel from "./CompanyModel";

export default interface ContactModel {
  id: number,
  name: string,
  username: string,
  email: string,
  address: AddressModel,
  phone: string,
  website: string,
  company: CompanyModel
}
