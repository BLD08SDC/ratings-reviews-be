const express = require('express');
const queryPool = require('./queries');
const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/reviews/:product_id/list', (req, res) => {
    queryPool.getListOfReviews(req.params)
            .then(data => {
                const results = data.rows.map(i => ({
                    "review_id": i.id,
                    "rating": i.rating,
                    "summary": i.summary,
                    "recommend": i.recommend,
                    "response": i.response,
                    "body": i.body,
                    "date": i.date,
                    "reviewer_name": i.reviewer_name,
                    "helpfulness": i.helpfulness,
                    "photos": [],
                }));
                
                return res.send(
                    {
                        "product": req.params.product_id,
                        "page": 0,
                        "count": 5,
                        "results": results,
                    }
            )})
            .catch(error => console.log(error))
})

app.get('reviews/:product_id/meta', (req, res) => {
    queryPool.getCharacteristicsMeta(req.params)
        .then(res.send(data => {

        }))
        .catch(error => console.log(error))
})

app.post('/reviews/:product_id', (req, res) => {
    queryPool.addReview(req.params)
        .then(res.send("Thank\'s for your review!"))
        .catch(error => console.log(error))
})

app.put('/reviews/helpful/:review_id', (req, res) => {
    queryPool.markHelpful(req.params)
        .then(res.send('Thank\'s for the feedback'))
        .catch(error => console.log(error))
})

app.put('/reviews/report/:review_id', (req, res) => {
    queryPool.reportReview(req.params)
        .then(res.send('Review Reported'))
        .catch(error => console.log(error))
})

app.listen(port, () => {
    console.log(`the server is running on port ${3000}`)
});
