import { IUser } from '../interfaces/IUser';

import { Collection } from 'fireorm';

@Collection()
export default class User {
    id:string;
    name:string;
    email:string;
    password:string;
    salt:string;
    role: string;
    lastLogin:Date
}
