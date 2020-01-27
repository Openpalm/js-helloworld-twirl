'use strict'
module.exports= class globals { 
  constructor() { 
    this.entrypoint = process.env.entrypoint || "./public/index.html";
    this.port = process.env.PORT || 5000;
  }
}
