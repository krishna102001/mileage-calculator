import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const milehistory = sqliteTable("milehistory", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  distance: text("distance").notNull(),
  fuel: text("fuel").notNull(),
  fuelprice: text("fuelprice").notNull(),
  totalfuelcost: text("totalfuelcost").notNull(),
  fuelcostperkm: text("fuelcostperkm").notNull(),
  mileage: text("mileage").notNull(),
});

export type MileHistory = typeof milehistory.$inferSelect;
