var drawGrid = function(data){
  var grid       = data.grid;
  var gridItems  = data.gridItems;
  var path       = data.path;
  
  var canvas = document.getElementById('canvas');
  if (!canvas.getContext){
    // canvas-unsupported code here
    document.write("CANVAS IS NOT SUPPORTED IN THIS BROWSER. Get Opera, Chrome, Firefox today...");
    return;
  }
  var ctx = canvas.getContext('2d');
  // REMEMBER: In the case of canvas, 0,0 starts in the top right corner, x goes to the right, y goes down
  var xLen = 1600/Number(grid[0].length);
  var yLen = 1200/Number(grid[0].length);

  for(var xCount in grid){
    for(var yCount in grid[xCount]){
      
      var step = Number(grid[xCount][yCount].step);
      var type = grid[xCount][yCount].type;
      ctx.fillStyle = false;
      if(step>0){
        //var tmpcol1 = [50, 60, (4*step)+30];
        var tmpcol1 = [(4*step)+50, (4*step)+50, (4*step)+50];
        var tmpcol2 = "rgb(" + tmpcol1.join(",") + ")";
        console.log(tmpcol2);
        //"rgb(200,0,0)";
        ctx.fillStyle = tmpcol2;
        ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
      }else{
        //var x = "rgb(50,60,0)";
      }
      
    }
  }
  for(var xCount in grid){
    for(var yCount in grid[xCount]){
      
      var step = Number(grid[xCount][yCount].step);
      var type = grid[xCount][yCount].type;
        switch(type){
        case 1:
          // Normal walking space
          break;
        case 2:
          console.log("Player");
          // Player position
          playerPos = [Number(xCount),Number(yCount)];
          ctx.fillStyle = "rgb(139,195,74)";
          ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
          break;
        case 2:
          console.log("Player");
          // Player position
          playerPos = [xCount,yCount];
          ctx.fillStyle = "rgb(10,200,10)";
          ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
          break;
        case 3:
          // Walled, blocking space
          console.log("Wall");
          ctx.fillStyle = "rgb(10,10,200)";
          ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
          //iso.add(Shape.Pyramid(new Point(xCount, yCount, 1)), blue);
          break;
        case 4:
          console.log("Enemy location");
          // Player position
          ctx.fillStyle = "rgb(200,20,20)";
          ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
          break;
      }
    }
  }
      // DRAW PATH HERE
      console.log("Path");
      console.log(path);
      console.log("Path drawing commenced");
      var xLen40 = xLen*0.4;
      var yLen40 = yLen*0.4;
      var xLen20 = xLen*0.2;
      var yLen20 = yLen*0.2;
      var pathColour = "rgb(50,60,0)";
      ctx.fillStyle = pathColour;
      for(i in path){
        var obj = path[i];
        var xCount = obj[0];
        var yCount = obj[1];
        //ctx.fillRect (xStart, yStart, length, height);
        ctx.fillRect ((xCount*xLen)+xLen40, (yCount*yLen)+yLen40, xLen20, yLen20);
      }
      ctx.beginPath();
      ctx.moveTo(path[0][0], path[0][1]);
      for(i in path){
        var obj = path[i];
        var xCount = obj[0];
        var yCount = obj[1];
        ctx.lineTo(xCount, yCount);
        ctx.stroke();
      }
}
findPath(drawGrid);
