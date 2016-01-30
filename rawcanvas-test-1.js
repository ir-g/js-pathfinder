var drawGrid = function(grid, gridItems){
  var playerPos;
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
  // Potential path tracer
  var getNextPos = function(itemLoc){
    return grid[itemLoc[0]][itemLoc[1]].locBefore;
  }
  isEnd = false;
  var turn = 0;
  var path = [];
  var curPlayer = playerPos;
  while(isEnd){
    turn = turn + 1;
    console.log(turn);
    path.push(curPlayer);
    if(grid[Number(curPlayer[0])][Number(curPlayer[1])].locBefore){
      curPlayer = grid[Number(curPlayer[0])][Number(curPlayer[1])].locBefore;
    }else{
      isEnd = true;
    }
  }
  console.log(path);
}
findPath(true, drawGrid);
