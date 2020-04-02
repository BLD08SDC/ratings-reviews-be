-- Create database and tables here
-- then link .csv files 
-- then run this file in command prompt

DROP DATABASE ratings-reviews-be

CREATE DATABASE ratings-reviews-be

USE DATABASE ratings-reviews-be

CREATE TABLE "characteristics" (
  "id" SERIAL,
  "product_id" INTEGER NOT NULL,
  "name" VARCHAR,
  PRIMARY KEY ("id")
);

CREATE INDEX "FK" ON  "characteristics" ("product_id");

CREATE TABLE "reviews_photos" (
  "id" SERIAL,
  "review_id" INTEGER NOT NULL,
  "url" VARCHAR,
  PRIMARY KEY ("id")
);

CREATE INDEX "FK" ON  "reviews_photos" ("review_id");

CREATE TABLE "characteristics_reviews" (
  "id" SERIAL,
  "character_id" INTEGER NOT NULL,
  "review_id" INTEGER NOT NULL,
  "value",
  PRIMARY KEY ("id")
);

CREATE INDEX "FK" ON  "characteristics_reviews" ("character_id", "review_id");

CREATE TABLE "products" (
  "id" SERIAL,
  "name" VARCHAR,
  "slogan" VARCHAR,
  "description" VARCHAR,
  "category" VARCHAR,
  "default_price" INTEGER,
  PRIMARY KEY ("id")
);

CREATE TABLE "reviews" (
  "id" SERIAL,
  "product_id" INTEGER NOT NULL,
  "rating" INTEGER,
  "date" DATE,
  "summary" VARCHAR,
  "body" VARCHAR,
  "recommend" BOOLEAN,
  "reported",
  "reviewer_name" VARCHAR,
  "reviewer_email" VARCHAR,
  "response" VARCHAR,
  "helpfulness" INTEGER,
  PRIMARY KEY ("id")
);

CREATE INDEX "FK" ON  "reviews" ("product_id");

--==--==-==-==-==-==-==-==-==-==-==-==--==-==-==-==-==-==-==-==-==-==-==--==-==-==-==-==-==-==-==-==-==-==--==-==-==-==-==-==-==-==-==-==--
--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--
--==--==-==-==-==-==-==-==-==-==-==-==--==-==-==-==-==-==-==-==-==-==-==--==-==-==-==-==-==-==-==-==-==-==--==-==-==-==-==-==-==-==-==-==--

COPY "characteristics" ("product_id", "name") FROM characteristics.csv

COPY "reviews_photos" ("review_id", "url") FROM reviews_photos.csv

COPY "characteristics_reviews" ("character_id", "review_id", "value") FROM characteristic_reviews.csv

COPY "products" ("name", "slogan", "description", "category", "default_price") FROM product.csv

COPY "reviews" ("product_id", "rating", "date", "summary", "body", "recommend", "reported", "reviewer_name", "reviewer_email", "response", "helpfulness") FROM reviews.csv