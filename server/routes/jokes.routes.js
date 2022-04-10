const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.post("/api/jokes", JokeController.newJoke);
    app.get("/api/jokes/:id", JokeController.findJoke);
    app.put("/api/jokes/:id", JokeController.editJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}
