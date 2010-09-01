(function() {
  CanvasRenderingContext2D.prototype.star = function(center_x,center_y,apeces_num,peak_size,inner_size,tilt){
    var prev_x = 0;
    var prev_y = 0; 
    for (var i = 0; i <= apeces_num * 2; i++){
      starEdge(this,i);
    }

    function starEdge(ctx,count) {
      var x = center_x;
      var y = center_y;
      var angle = tilt + 360 / apeces_num * count
        var rad = angle * Math.PI / 360;
      if (count % 2 != 0) {
        var length = peak_size - inner_size;
      } else {
        var length = peak_size;
      }
      x += Math.sin(rad) * length;
      y += Math.cos(rad) * length;
      ctx.beginPath();
      if (angle != tilt) {
        ctx.moveTo(prev_x,prev_y);
        ctx.lineTo(x,y);
      }
      prev_x = x;
      prev_y = y;
      ctx.stroke();
      ctx.closePath();
    }
  }

  CanvasRenderingContext2D.prototype.polygon = function(center_x,center_y,apeces_num,size,tilt){
    var prev_x = 0;
    var prev_y = 0; 
    for (var i = 0; i <= apeces_num; i++){
      polygonEdge(this,i);
    }

    function polygonEdge(ctx,count) {
      var x = center_x;
      var y = center_y;
      var angle = tilt + 360 / apeces_num * count
      var rad = angle * Math.PI / 180;
      x += Math.sin(rad) * size;
      y += Math.cos(rad) * size;
      ctx.beginPath();
      if (angle != tilt) {
        ctx.moveTo(prev_x,prev_y);
        ctx.lineTo(x,y);
      }
      prev_x = x;
      prev_y = y;
      ctx.stroke();
      ctx.closePath();
    }
  }
})();
