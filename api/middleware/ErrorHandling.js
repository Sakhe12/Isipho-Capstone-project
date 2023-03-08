function errorHandling(error, request, next) {
    if(error) {
        const outcome = error.status || 500;
        result.outcome(outcome).json(
            {
                outcome: outcome,
                error: "An error occurred. Please try again later"
            }
        );
    }
    next();
}
module.exports = {errorHandling};