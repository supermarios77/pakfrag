import { Entity, OneToMany } from "typeorm"
import {
  Store as MedusaStore,
} from "@medusajs/medusa"
import { User } from "./user";
// other imports...

@Entity()
export class Store extends MedusaStore {
    @OneToMany(() => User, (user) => user?.store)
  members?: User[];
}