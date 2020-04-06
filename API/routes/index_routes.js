export default (app) => {
    app.route(`${id}/reviews/list`)
        .get(ratingsreviewsbe.getListOfReviews);
    
    app.route(`${id}/reviews/meta`)
        .get(ratingsreviewsbe.getReviewsMeta);

    app.route(`${id}/reviews`)
        .post(ratingsreviewsbe.addReview);

    app.route(`${id}/reviews/helpful`)
        .put(ratingsreviewsbe.markReviewHelpful);

    app.route(`${id}/reviews/reported`)
        .put(ratingsreviewsbe.reportReview);

    // delete my review
};