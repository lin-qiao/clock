
var canvas=document.querySelector('canvas');
ctx=canvas.getContext('2d');
var r=function(deg){
  return (Math.PI/180)*deg;
}

var watch=function(){
  canvas.width=canvas.height=600;
  ctx.translate(300,300);
  //外表盘
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(-150,-250);
  ctx.arcTo(250,-250,250,250,100);
  ctx.arcTo(250,250,-250,250,100);
  ctx.arcTo(-250,250,-250,-250,100);
  ctx.arcTo(-250,-250,250,-250,100);
  ctx.fillStyle = '#fff';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  var jianbian=ctx.createLinearGradient(0,-250,0,250);
  jianbian.addColorStop(0,'#fff');
  jianbian.addColorStop(1,'#E9E9E9');
  ctx.fillStyle=jianbian;
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  //表盘
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(200,0)
  ctx.arc(0,0,200,0,(Math.PI/180)*360);
  var jianbian2=ctx.createLinearGradient(0,-200,0,200);
  jianbian2.addColorStop(0,'#8B8B8B');
  jianbian2.addColorStop(1,'#323232');
  ctx.fillStyle=jianbian2;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 8;
  ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();


  ctx.beginPath();
  for(var i=0; i<12; i++){
      ctx.moveTo(0,-180)
      ctx.strokeStyle='#181616';
      ctx.lineWidth=2;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.lineTo(0,-190);
    ctx.rotate(r(30));
  }

  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  var date= new Date;
  var Milliseconds=date.getMilliseconds();
  var seconds=(date.getSeconds()*1000+Milliseconds)/60000*360;
  var minutes=(date.getMinutes()*60+date.getSeconds())/3600*360;
  var hours=(date.getHours()*60+date.getMinutes())/720*360;
  //时针
  ctx.beginPath()
  ctx.save();
  ctx.rotate(r(hours));
  ctx.moveTo(0,8);
  ctx.lineTo(0,-50);
  ctx.lineWidth=15;
  ctx.lineCap='round';
  ctx.strokeStyle='#fff';
  ctx.stroke();
  ctx.restore();
  ctx.closePath();
  //分针
  ctx.save();
  ctx.rotate(r(minutes));
  ctx.moveTo(0,8);
  ctx.lineTo(0,-100);
  ctx.lineWidth=15;
  ctx.lineCap='round';
  ctx.strokeStyle='#fff';
  ctx.stroke();
  ctx.restore();
  //秒针
    ctx.save();
  ctx.beginPath();
  ctx.rotate(r(seconds));
  ctx.moveTo(0,30);
  ctx.lineTo(0,5);
  ctx.moveTo(5,0);
  ctx.arc(0,0,5,0,r(360));
  ctx.fillStyle='rgb(226, 45, 34)';
  ctx.strokeStyle='rgb(226, 45, 34)';
  ctx.fill();
  ctx.moveTo(0,-5);
  ctx.lineTo(0,-150);
  ctx.lineWidth=3;
  ctx.lineCap='round';
  ctx.stroke();
  ctx.closePath();
    ctx.restore();
}
watch();
setInterval(watch,13);
