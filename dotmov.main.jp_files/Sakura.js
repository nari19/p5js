//クラス
//thisはクラスの中にだけ使える。クラスの中のパラメーター（グローバル変数との区別）
function Sakura() {
  //パラメーター
 this.x= random(0,width);  //クラス変数
 this.y =random(0,height);
 this.w=random(10,100);
 this.color=random(0, 20);
 this.s=random(1, 3);
 
 //メソッド
 this.draw=function(){
   this.x+=this.s ;
   if(this.x>width)this.x=0;
   //ellipse(this.x,this.y,this.w,this.w);
   colorMode(HSB, 100); //色相・彩度・明度  RGBよりも、簡単に色の変化が作れる。
  
  push();
   textSize(this.w);
   translate(this.x, this.y);
   rotate(radians(45)); 
       //distは距離を計算する。
   var d=dist(this.x, this.y, mouseX, mouseY);
       //mapは範囲を別の範囲に対応づける  
   var sat=map(d,0, width, 0, 100);  
   fill(this.color,sat,100);
   text(int(d), this.x, this.y);
   pop();
 };
  
}