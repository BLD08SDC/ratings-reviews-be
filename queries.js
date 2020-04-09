const { Pool } = require('pg');
const pool = new Pool(/* config */{
  user: 'thomas',
  host: 'localhost',
  database: 'ratingsreviewsbe',
  port: 5432,
});

const getListOfReviews = (req) => {
    // console.log(req)
    const product_id = parseInt(req.product_id) || 2;
    const page = parseInt(req.page) || 0;
    const count = parseInt(req.count) || 5;
    const sort = req.sort || 'date';
    const offsetBy = page * count || 0;

    return pool
      .query(`SELECT * FROM reviews WHERE product_id=$1 AND NOT reported ORDER BY $3 DESC LIMIT $2`, [product_id, count, sort]) 
        // .then((data) => {
        //   const results = data.rows.map(i => ({
        //     "review_id": i.id,
        //     "rating": i.rating,
        //     "summary": i.summary,
        //     "recommend": i.recommend,
        //     "response": i.response,
        //     "body": i.body,
        //     "date": i.date,
        //     "reviewer_name": i.reviewer_name,
        //     "helpfulness": i.helpfulness,
        //     "photos": [],
        //   }));

        //   return ({
        //     "product": `${id}`,
        //     "page": page,
        //     "count": count,
        //     "results": results,
        //   })
        // })
        // .catch(error => console.log(error))
}

const getCharacteristicsMeta = (req, res) => {
    pool
      .query()
      .then(res.send())
      .catch(error => console.log(error))
}

const addReview = (req, res) => {
  const product_id = parseInt(req.product_id);
  // const { rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness } = req.body;
  const rating = req.rating || 5;
  const date = req.date || "2019-10-22T00:00:00.000Z";
  const summary = req.summary || "testing123summary";
  const body = req.body || "testing123345654body";
  const recommend = req.recommend || true;
  const reported = 'f';
  const reviewer_name = req.reviewer_name || "testName";
  const reviewer_email = req.reviewer_email || null;
  const response = req.response || null;
  const helpfulness = req.helpfulness || 0;

    return pool
      .query(
        `INSERT INTO 
          reviews (
            product_id, 
            rating, 
            date, 
            summary, 
            body, 
            recommend, 
            reported, 
            reviewer_name, 
            reviewer_email, 
            response, 
            helpfulness)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, 
        [
          product_id,
          rating,
          date,
          summary,
          body,
          recommend,
          reported,
          reviewer_name,
          reviewer_email,
          response,
          helpfulness
        ]
      )
}

const markHelpful = (req, res) => {
    const id = parseInt(req.review_id);

    return pool
      .query(`UPDATE reviews SET helpfulness=helpfulness+1 WHERE id=$1`, [id])
}

const reportReview = (req, res) => {
    const id = parseInt(req.review_id);

    return pool
      .query(`UPDATE reviews SET reported='t' WHERE id=$1`, [id])
}

module.exports = {
    getListOfReviews,
    getCharacteristicsMeta,
    addReview,
    markHelpful,
    reportReview,
}
