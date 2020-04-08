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

    const id = parseInt(req.params.id)
    const numberOfReviews = req.params.numberOfReviews || 5;
    const sort = req.params.sort || Date;

    pool
      .query(`SELECT * FROM reviews WHERE product_id=$1 AND reported='f' ORDER BY $3 ASC LIMIT $2`, [id, numberOfReviews, sort]) // and make it sizeable and sortable, add $2 and $3 and give them default values in case they are not supplied (default values currently coded)
      .then(res.send())
      .catch(error => console.log(error))

}

const getCharacteristicsMeta = (req, res) => {
    pool
      .query()
      .then(res.send())
      .catch(error => console.log(error))
}

const addReview = (req,res) => {
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
    getCharacteristicsMeta,
    addReview,
    markHelpful,
    reportReview,
}
