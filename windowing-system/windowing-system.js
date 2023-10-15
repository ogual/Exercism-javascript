// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

  export function Size(width = 80, height = 60){
    this.width = width;
    this.height = height;
  }

  Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
  }

  export function Position(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  Position.prototype.move = function(newX, newY){
    this.x = newX;
    this.y = newY;
  }

  export function ProgramWindow(){
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  ProgramWindow.prototype.resize = function(newSize){
    if (newSize.height < 1) {
      this.size.height = 1;
    } else if (this.screenSize.height > (this.position.y + newSize.height)) {
      this.size.height = newSize.height;
    } else {
      this.size.height = this.screenSize.height - this.position.y;
    }

    if (newSize.width < 1) {
      this.size.width = 1;
    } else if (this.screenSize.width > (this.position.x + newSize.width)) {
      this.size.width = newSize.width;
    } else {
      this.size.width = this.screenSize.width - this.position.x;
    }
  }

  ProgramWindow.prototype.move = function(newPosition) {    
    if (newPosition.y <= 0) {
      this.position.y = 0;
    } else if (this.screenSize.height > (newPosition.y + this.size.height)) {
      this.position.y = newPosition.y;
    } else {
      this.position.y = this.screenSize.height - this.size.height;
    }

    if (newPosition.x <= 0) {
      this.position.x = 0;
    } else if (this.screenSize.width > (newPosition.x + this.size.width)) {
      this.position.x = newPosition.x;
    } else {
      this.position.x = this.screenSize.width - this.size.width;
    }    
  }

  export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    
    return programWindow;
  }