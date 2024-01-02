
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "fishes" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES "user",
  "name" varchar,
  "location" varchar,
  "image_url" varchar,
  "description" varchar,
  "caught_at" TIMESTAMP,
  "length" varchar,
  "weight" varchar
);

INSERT INTO "fishes" ("name", "location", "image_url", "desciption", "caught_at", "length", "weight")

VALUES ('Freshwater Perch', 'Minnesota', 
'https://www.in-depthoutdoors.com/wp-content/uploads/2018/02/IMG_2846.png', 
'Popular as both food and sport fish, mainly spawn in the spring time.', 'Leech Lake', 
'15 inches', '6 pounds');

INSERT INTO "fishes" ("name", "location", "image_url", "description", "caught_at", "length", "weight")

VALUES ('Barracuda', 'Atlantic Ocean', 'https://critter.science/wp-content/uploads/2020/12/gb1-1180x520.png', 'Large mouth with large sharp teeth, shark in slender form', '2023-07-04 03:00pm', '5 feet', '15 pounds');