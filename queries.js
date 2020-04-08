const Pool = require('pg');
const pool = new Pool(config);

// config is an object that look like {
//   user: me,
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 3000,    
// }

const getListOfReviews = (req,res) => {
    const id = parseInt(req.params.id);
    const numberOfReviews = req.params.numberOfReviews || 5;
    const sort = req.params.sort || Date;

    pool
      .query(`SELECT * FROM reviews WHERE product_id=$1 AND NOT reported ORDER BY $3 ASC LIMIT $2`, [id, numberOfReviews, sort]) // and make it sizeable and sortable, add $2 and $3 and give them default values in case they are not supplied (default values currently coded)
      .then(res.send())
      .catch(error => console.log(error))
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
      .query(`UPDATE reviews SET reported='t' WHERE id=$1`, )
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
