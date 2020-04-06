\c ratingsreviewsbe;

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id SERIAL,
  product_id INTEGER NOT NULL,
  name VARCHAR,
  PRIMARY KEY (id)
);

CREATE INDEX product_fk_characteristics  ON characteristics (product_id);

COPY characteristics (id, product_id, name) FROM '/Users/thomas/git-hackreactor/systemDesignCapstone/ratings-reviews-be/csv-files/generated-characteristics.csv' DELIMITER ',' CSV;
