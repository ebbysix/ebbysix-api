const weightsCollection = require("../db").db().collection("Weights")
const ObjectID = require("mongodb").ObjectID

let Weight = function (data) {
  this.data = data
  this.errors = []
}

Weight.prototype.cleanUp = function () {
  if (typeof this.data.fridgeIdNum != "string") {
    this.data.fridgeIdNum = ""
  }
  this.data = {
    idNum: this.data.fridgeIdNum.trim(),
    weight: this.data.fridgeWeight,
    created: new Date()
  }
}

Weight.prototype.createWeight = function () {
  return new Promise(async (resolve, reject) => {
    this.cleanUp()
    if (!this.errors.length) {
      weightsCollection
        .insertOne(this.data)
        .then(() => {
          resolve("Your weight was recorded")
        })
        .catch(e => {
          this.errors.push("Please try again later.")
          reject(this.errors)
        })
    } else {
      reject(this.errors)
    }
  })
}

module.exports = Weight

