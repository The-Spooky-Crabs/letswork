
module.exports = (app) => {

    app.get('/', (request, response) => {
        response.send("Server is UP! WOOOOHOOOO!");
    });

    app.get('/hello', (request, response) => {
        response.send("Just another route to test the initial set up");
    });

    app.get('/api/hello', (request, response) => {
        response.send("If you clicked message on front-end -> you should get this message ;)");
    });

}