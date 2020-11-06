const apiRouter = require("express").Router()

const weightController = require("./controllers/weightController")

const cors = require("cors")

apiRouter.use(cors())

apiRouter.post("/create-weight", weightController.apiCreateWeight)

module.exports = apiRouter