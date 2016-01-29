var drawGrid = function(grid, gridItems){
  var canvas = document.getElementById('canvas');
  if (!canvas.getContext){
    // canvas-unsupported code here
    document.write("CANVAS IS NOT SUPPORTED IN THIS BROWSER. Get Opera, Chrome, Firefox today...");
    return;
  }
  var ctx = canvas.getContext('2d');
  var xLen = 1600/Number(grid[0].length);
  var yLen = 1200/Number(grid[0].length);
  for(var xCount in grid){
    for(var yCount in grid[xCount]){
      
      var step = Number(grid[xCount][yCount].step);
      var type = grid[xCount][yCount].type;
      if(step>0){
        var tmpcol1 = [50, 60, (3*step)+30];
        var tmpcol2 = "rgb(" + tmpcol1.join(",") + ")";
        //"rgb(200,0,0)";
        ctx.fillStyle = tmpcol2;
      }else{
        var x = "rgb(50,60,60)";
      }
      ctx.fillRect (xCount*xLen, yCount*yLen, xLen, yLen);
    }
  }
}
findPath(true, drawGrid);
