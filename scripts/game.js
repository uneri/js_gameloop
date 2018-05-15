var Game = {};

Game.fps = 50;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
};

Game.addRect = function() {
  // rectのオブジェクトを生成して配列に追加する
  Game.entities.push(new Rect());
};

Game.input = function() {
  for (var i=0; i < this.entities.length; i++) {
    // rectのinputを呼び出す
    this.entities[i].input();
  }
};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    // rectのupdateを呼び出す
    this.entities[i].update();
  }
};

Game.draw = function() {
  this.context.clearRect(0, 0, 640, 480);
  for (var i=0; i < this.entities.length; i++) {
    // rectのdrawを呼び出す
    this.entities[i].draw(this.context);
  }
};



