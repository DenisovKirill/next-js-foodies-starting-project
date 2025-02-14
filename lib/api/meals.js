import sql from 'better-sqlite3';
import fs from 'node:fs';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
};

export const getMeal = (slug) => {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const img = meal.image;
  const extension = img.name.slice(img.name.lastIndexOf('.') + 1);

  const filename = `${meal.slug}-${Date.now()}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);

  const bufferImg = await img.arrayBuffer();

  stream.write(Buffer.from(bufferImg), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `INSERT INTO meals 
        (title, summary, instructions, creator, creator_email, image, slug)
    VALUES
        (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `,
  ).run(meal);
};
