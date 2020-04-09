const { Pool } = require('pg');
const pool = new Pool(/* config */{
  user: 'thomas',
  host: 'localhost',
  database: 'ratingsreviewsbe',
  port: 5432,
});

const getListOfReviews = (req) => {
  console.log(req)
    const id = parseInt(req.id) || 2;
    const page = parseInt(req.page) || 0;
    const count = parseInt(req.count) || 5;
    const sort = req.sort || 'date';
    const offsetBy = page * count || 0;

    return pool
      .query(`SELECT * FROM reviews WHERE product_id=$1 AND NOT reported ORDER BY $3 ASC LIMIT $2`, [id, count, sort]) 
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
    const { product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness } = req.body;

    pool
      .query(`INSERT INTO reviews (product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, [product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness])
      .then(res.send())
      .catch(error => console.log(error))
}

const markHelpful = (req, res) => {
    const id = parseInt(req.params.id);

    pool
      .query(`UPDATE reviews SET helpfulness=helpfulness+1 WHERE id=$1`, [id])
      .then(res.send())
      .catch(error => console.log(error))
}

const reportReview = (req, res) => {
    const id = parseInt(req.params.id);

    pool
      .query(`UPDATE reviews SET reported='t' WHERE id=$1`, [id])
      .then(res.send())
      .catch(error => console.log(error))
}

module.exports = {
    getListOfReviews,
    getCharacteristicsMeta,
    addReview,
    markHelpful,
    reportReview,
}
