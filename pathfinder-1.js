var findPath = function(doLogResult, callback){
var enemyLoc = [1,1];
var playerLoc = [4,4];
var playerNotFound = true;
/* Types
* 1 Walkable block
* 2 Player location
* 3 Blocking Wall
*/
var grid = [
  [
    {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}
  ],
  [
    {type: 1, step: null}, {type: 1, step: 0}, {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}
  ],
  [
    {type: 1, step: null}, {type: 3, step: null}, {type: 3, step: null}, {type: 3, step: null}, {type: 1, step: null}
  ],
  [
    {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}
  ],  
  [
    {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}, {type: 1, step: null}, {type: 2, step: null}
  ]
];

var gridItems = [];
// create/update object list
function updateList(){
  console.log("Updating list");
  // Rest gridItems array
  gridItems = []
  // Loop through xVals
  for(var xCount in grid){
    // Loop through yVals
    for(var yCount in grid[xCount]){
      // Select item
      var item = grid[xCount][yCount];
      // Set x and y values
      item.xVal = xCount;
      item.yVal = yCount;
      // Add grid item to array
      gridItems.push(item);
      }    
  }
}

function labelNeighbour(currStep, currCoords, coords){
  var x = coords[0];
  var y = coords[1];
  console.log("Labelling neighour ----  ["+x+","+y+"]")
  if(grid[x]&&grid[x][y]){
    // This grid item does exist
    if(grid[x][y].step==null){
      // No step declared yet, carry on.
      if(grid[x][y].type!=3){
        console.log("Labelling ["+x+","+y+"]")
        // This is a selectable location.
        grid[x][y].step = currStep;
        grid[x][y].locBefore=currCoords;
        if(grid[x][y].type==2){
          // This is the player location. The player has been found.
          console.log("["+x+","+y+"] This is the player location. The player has been found.")
          playerNotFound = false;
        }
      }
    }else{
      // Step already declared, skip this one.
      console.log("Step already declared - ["+x+","+y+"]")
    }
  }else{
    //This grid item doesn't exist
    console.log("Item doesn't exist - ["+x+","+y+"]")
  }
}
function labelNeighbours(currStep, currCoords){
  // Possible neighbours are:
  // [x+1,y] [x-1,y] [x,y+1] [x, y-1]
  var x = currCoords[0];
  var y = currCoords[1];
  labelNeighbour(currStep, currCoords, [Number(x)+1,Number(y)]);
  labelNeighbour(currStep, currCoords, [Number(x)-1,Number(y)]);
  labelNeighbour(currStep, currCoords, [Number(x),Number(y)+1]);
  labelNeighbour(currStep, currCoords, [Number(x),Number(y)-1]);
}
  
// Find player on path hunt
console.log("Starting path hunt");
var stepCount = 0;
while(playerNotFound){
  stepCount = stepCount + 1;
  console.log("Starting step"+stepCount);
  // Update grid list
  updateList();
  console.log(gridItems);
  // Now label the steps
  for(var i in gridItems){
    var item = gridItems[i];
    if(item.step == stepCount - 1){
      console.log("Labelling neghbours of ["+item.xVal+","+item.yVal+"]");
      labelNeighbours(stepCount, [item.xVal,item.yVal]);
    }else{
      console.log("skipping, step not true.");
      console.log("["+item.xVal+","+item.yVal+"] - Step isnt " + item.step + " " + stepCount)
    }
  }
  if(stepCount>20){
    playerNotFound= false;
  }
}
updateList();
if(doLogResult){
console.log(grid);
console.log(gridItems);
}
// Trace path backwards, create array of coords of path
// Coords parent location is .locBefore
  
// Draw grid
/*
for(var xCount in grid){
  for(var yCount in grid[xCount]){
    console.log("Draw ["+xCount+", "+yCount+"] ~ Type: "+ grid[xCount][yCount].type + " Step:" + grid[xCount][yCount].step);
  }    
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}*/
// Draw path overlay
callback(grid,gridItems);
}

// Export if possible
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = findPath;
  }
  exports._ = findPath;
} else {
  //root['_'] = findPath;
}
