
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
  "id" integer [primary key],
  "user_id" integer,
  "name" varchar,
  "location" varchar,
  "image_url" varchar,
  "description" varchar,
  "caught_at" TIMESTAMP,
  "length" varchar,
  "weight" varchar
);