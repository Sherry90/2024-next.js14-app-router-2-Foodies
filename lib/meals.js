import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};
