import { Address } from "./address";

export interface User {
    id?: string;
    fname: string;
    lname: string;
    fullname: string;
    gender: string;
    email: string;
    mobile: string[];
    password: string;
    roleType: string;
    // address: Address;
    address: {
        addr1: string;
        city: string;
        state: string;
        pincode: string;
    }
}
