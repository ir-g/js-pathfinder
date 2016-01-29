var drawGrid = function(grid, gridItems){
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
          ctx.fillStyle = "rgb(200,10,0)";
          ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
          break;
        default:
          // Walled, blocking space
          console.log("Wall");
          ctx.fillStyle = "rgb(0,10,200)";
          ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
          //iso.add(Shape.Pyramid(new Point(xCount, yCount, 1)), blue);
      }
      
    }
  }
}
findPath(true, drawGrid);
