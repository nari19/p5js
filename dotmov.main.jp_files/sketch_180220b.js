var sakuraArray = [];
var sakura;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //クラスを作成　　newはクラスを作る
  sakura=new Sakura();
  
  //クラスを配列に指定数分作成
  for (var i = 0; i < 30; i++){
   sakuraArray.push(new Sakura()); 
  }
  

}

function draw() {
  background(128);
  
  //クラスの中のメソッドを呼ぶ
  sakura.draw();
  
    //クラスを配列に指定数分作成
  for (var i = 0; i < sakuraArray.length; i++){  //.length は配列数を返す。
   sakuraArray[i].draw(); 
  }
  
}


//ウィンドウのリサイズ
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

