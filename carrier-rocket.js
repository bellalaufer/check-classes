class CarrierRocket {
  constructor(stages) {
    this.stages = stages.slice();
  }

  detachStage() {
    this.stages.shift()
  }
}

module.exports = CarrierRocket;
