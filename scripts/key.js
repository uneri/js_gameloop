// キーボードが押されているかの判定を行う
var isTouch = false;
var isPressLeft = false;
var isPressRight = false;
var isPressUp = false;
var isPressDown = false;

function handleTouchstart(event){
  isTouch = true;
  console.log('X:%s',event.changedTouches[0].pageX);
  console.log('Y:%s',event.changedTouches[0].pageY);
}

function handleTouchend(event){
  isTouch = false;
}

function handleKeydown(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;
  // 条件文で制御する
  switch(keyCode){
    case 39:
      // 右
      isPressRight = true;
    break;
    case 37:
      // 左
      isPressLeft = true;
    break;
    case 38:
      // 上
      isPressUp = true;
    break;
    case 40:
      // 下
      isPressDown = true;
    break;
  }
}

function handleKeyup(event){
  // キーコード(どのキーが押されたか)を取得
  var keyCode = event.keyCode;
  // 条件文で制御する
  switch(keyCode){
    case 39:
      // 右
      isPressRight = false;
    break;
    case 37:
      // 左
      isPressLeft = false;
    break;
    case 38:
      // 上
      isPressUp = false;
    break;
    case 40:
      // 下
      isPressDown = false;
    break;
  }
}
