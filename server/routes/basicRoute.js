module.exports = (app) => {

    app.get('/', (request, response) => {
        response.send("Server is UP! WOOOOHOOOO!");
    });

}