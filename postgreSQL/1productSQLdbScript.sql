\c ratingsreviewsbe;

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  id INTEGER,
  name VARCHAR,
  slogan VARCHAR,
  description VARCHAR,
  category VARCHAR,
  default_price INTEGER,
  PRIMARY KEY (id)
);

COPY product (id, name, slogan, description, category, default_price) FROM '/Users/thomas/git-hackreactor/systemDesignCapstone/ratings-reviews-be/csv-files/generated-product.csv' DELIMITER ',' CSV HEADER;

-- \COPY characteristics (id, product_id, name) FROM '/Users/thomas/git-hackreactor/systemDesignCapstone/ratings-reviews-be/csv-files/XXXXXXXX.csv' DELIMITER ',' CSV;

