import { pgTable, varchar, integer, serial } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cartColumns = pgTable("cartdata", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", {
    length: 255,
  }).notNull(),
  product_id: varchar("product_id", {
    length: 255,
  }).notNull(),
  product_title: varchar("product_title", {
    length: 255,
  }).notNull(),
  product_price: varchar("product_price", {
    length: 255,
  }).notNull(),
  product_quantity: varchar("product_quantity", {
    length: 255,
  }).notNull(),
  image_url: varchar("image_url", {
    length: 255,
  }).notNull(),
});
export const db=drizzle(sql);
