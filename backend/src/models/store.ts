import { Entity, OneToMany } from "typeorm";
import { User } from "./user";
import { Product } from "./product";
import {
  Store as MedusaStore,
} from "@medusajs/medusa";

@Entity()
export class Store extends MedusaStore {
    @OneToMany(() => User, (user) => user?.store)
  members?: User[];
  @OneToMany(() => Product, (product) => product?.store)
  products?: Product[];
}