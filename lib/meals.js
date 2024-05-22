import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export const getMeals = async () => {
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify.replace(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/image/${fileName}`);
  const bufferImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  
  meal.image = `/images/${fileName}`
  
  db.prepare(`INSERT INTO meals
(title, summary, instructions, creator, creator_email, image, slug)
VALUES (
  @title,
  @summary,
  @instructions,
  @creator,
  @creator_email,
  @image,
  @slug
  )
`).run(meal);
};
