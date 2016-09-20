'use strict';

function Robot() {
  // implement your solution here!

  // this.coordinates = []; to set coordinate as a place holder, so that you can set this.place

  this.orient = function(currentDirection){
    var directions = [ 'east', 'west', 'north', 'south' ]
    if (directions.includes(currentDirection)) {
      this.bearing = currentDirection
    } else {
      throw Error(["Invalid Robot Bearing"])
    }
  }

  this.turnRight = function() {
    switch (this.bearing) {
      case "north":
        return this.bearing = "east"
      case "east":
        return this.bearing = "south"
      case "south":
        return this.bearing = "west"
      case "west":
        return this.bearing = "north"
    }
  }

  this.turnLeft = function() {
    switch (this.bearing) {
      case "north":
        return this.bearing = "west"
      case "west":
        return this.bearing = "south"
      case "south":
        return this.bearing = "east"
      case "east":
        return this.bearing = "north"
    }
  }

  this.at = function(x,y) {
    this.coordinates = [x,y]
  }

  this.advance = function() {
    switch (this.bearing) {
      case "north":
        return this.coordinates[1] += 1
      case "west":
        return this.coordinates[0] -= 1
      case "south":
        return this.coordinates[1] -= 1
      case "east":
        return this.coordinates[0] += 1
    }
  }

  this.instructions = function(stringOfLetters) {
    var arrayOfInstructions = []
    for (var i = 0; i < stringOfLetters.length; i++) {
      if (stringOfLetters[i] === "R"){
        arrayOfInstructions.push("turnRight")
      }
      if (stringOfLetters[i] === "L"){
        arrayOfInstructions.push("turnLeft")
      }
      if (stringOfLetters[i] === "A"){
        arrayOfInstructions.push("advance")
      }
      // switch (stringOfLetters[i]) {
      //   case "R":
      //     arrayOfInstructions.push("turnRight")
      //     break
      //   case "L":
      //     arrayOfInstructions.push("turnLeft")
      //     break
      //   case "A":
      //     arrayOfInstructions.push("advance")
      //     break
      // }
    }
    return arrayOfInstructions
  }

  this.place = function(startingplace) {
    this.at(startingplace.x,startingplace.y)
    this.bearing = startingplace.direction
  }

  // this.place = function({x: x, y: y, direction: direction}) {
  //   x = this.coordinates[0]
  //   y = this.coordinates[1]
  //   direction = this.bearing
  // }

  this.evaluate = function(stringOfLetters) {
    this.instructions(stringOfLetters).forEach((element)=>{
      switch (element) {
        case "turnLeft":
          this.turnLeft()
          break
        case "turnRight":
          this.turnRight()
          break
        case "advance":
          this.advance()
          break
      }
    })
  }

}

// Robot.prototype.method/function
