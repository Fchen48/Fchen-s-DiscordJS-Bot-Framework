module.exports = rateLimitInfo => {
    console.error("rateLimit reached");
    if(rateLimitInfo) {
        console.error(rateLimitInfo);
    }
};