\c ratingsreviewsbe;

DROP TABLE IF EXISTS characteristics_reviews;

CREATE TABLE characteristics_reviews (
  id SERIAL,
  characteristic_id INTEGER NOT NULL,
  review_id INTEGER NOT NULL,
  value INTEGER,
  PRIMARY KEY (id)
);

CREATE INDEX characteristics_fk_characteristics_reviews ON characteristics_reviews (characteristic_id);
CREATE INDEX reviews_fk_characteristics_reviews ON characteristics_reviews (review_id);

COPY characteristics_reviews (id, characteristic_id, review_id, value) FROM '/Users/thomas/git-hackreactor/systemDesignCapstone/ratings-reviews-be/csv-files/generated-characteristics_reviews.csv' DELIMITER ',' CSV;