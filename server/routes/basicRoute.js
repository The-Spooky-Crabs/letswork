
module.exports = (app) => {

    app.get('/', (request, response) => {
        response.send("Server is UP! WOOOOHOOOO!");
    });

    app.get('/hello', (request, response) => {
        response.send("Just another route to test the initial set up");
    });

}