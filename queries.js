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

    pool
      .query(`SELECT * FROM reviews WHERE product_id=$1 LIMIT ORDER BY id ASC`, [id, numberOfReviews, sort]) // and make it sizeable and sortable, add $2 and $3 and give them default values in case they are not supplied (default values currently coded)
      .then(res.send())
      .catch(error => console.log(error))

}

const getSingleReview = (req,res) => {
    pool
      .query()
      .then(res.send())
      .catch (error => console.log(error))
}

const getCharacteristicsMeta = (req, res) => {
    pool
      .query()
      .then(res.send())
      .catch(error => console.log(error))
}

const markHelpful = (req, res) => {
    pool
      .query()
      .then(res.send())
      .catch(error => console.log(error))
}

const reportReview = (req, res) => {
    pool
      .query()
      .then(res.send())
      .catch(error => console.log(error))
}

module.exports = {
    getListOfReviews,
    getSingleReview,
    getCharacteristicsMeta,
    markHelpful,
    reportReview,
}
