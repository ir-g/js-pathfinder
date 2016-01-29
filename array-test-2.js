var drawGrid = function(grid){
  //clearRect(0, 0, canvas.width, canvas.height);
  var Point  = Isomer.Point;
  var Path   = Isomer.Path;
  var Shape  = Isomer.Shape;
  var Vector = Isomer.Vector;
  var Color  = Isomer.Color;
  
  var iso = new Isomer(document.getElementById("canvas"));
  
  var red = new Color(160, 60, 70);
  var blue = new Color(50, 60, 160);
  /*    
  iso.add(Shape.Prism(Point.ORIGIN, 10, 10, 1));
  iso.add(Shape.Pyramid(Point(0, 2, 1)), red);
  iso.add(Shape.Prism(Point(2, 0, 1)), blue); */
  
  // Draw grid
  for(var xCount in grid){
    for(var yCount in grid[xCount]){
      console.log("Drawing ["+xCount+", "+yCount+"] ~ Type: "+ grid[xCount][yCount].type + " Step:" + grid[xCount][yCount].step);
      var step = Number(grid[xCount][yCount].step);
      var type = grid[xCount][yCount].type;
      if(step>0){
        var x = new Color(50, 60, (3*step)+30);
      }else{
        var x = new Color(50, 60, 60);
      }
      //iso.add(Shape.Prism(Point(Number(yCount), Number(xCount), 0)), new Color(50, 60, 60));
      iso.add(Shape.Prism(Point.ORIGIN, 10, 10, 0.1));
      switch(type){
        case 1:
          // Normal walking space
          break;
        case 2:
          console.log("Player");
          // Player position
          iso.add(Shape.Pyramid(new Point(xCount, yCount, 2)), red);
          break;
        default:
          // Walled, blocking space
          console.log("Wall");
          iso.add(Shape.Pyramid(new Point(xCount, yCount, 2)), red);
          //iso.add(Shape.Pyramid(new Point(xCount, yCount, 1)), blue);
      }
    }    
  }
}
findPath(true, drawGrid);
