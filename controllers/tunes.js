const router = require("express").Router()
const mongoose = require("../db/connection.js")
const Tune = require("../models/tune.js")

router.get("/", async (req, res) => {
  try {
    res.json(await Tune.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/seed", async (req, res) => {
  try {
    res.json(await Tune.deleteMany({}))
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {
  try {
    res.json(await Tune.create(req.body))
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put("/:id", async (req, res) => {
  const fav = !req.body.favorite
  try {
    res.json(
      await Tune.findByIdAndUpdate(
        req.params.id,
        { favorite: fav },
        { new: true }
      )
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Tune.findByIdAndDelete(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})


module.exports = router
