// CONSTANS
const radius = 30;
const ypadding = 200;
const darkblue = "rgb(0,91,96)";
const lightblue = "rgb(0,173,173)";
const grey = "rgb(171,171,171)";
const black = "rgb(0,0,0)"
const linewidth = 2;

// CLASSES
class Vertex{
  constructor(child,position,color,name,level){
    this.child = child;
    this.position = position;
    this.color = color;
    this.name = name;
    this.level = level;
  }
}

// FUNCTIONS
// Find the position of the vertexes
function find_position(list){
  big = list.length
  // Find the lowest level
  lowestLevel = 0;
  for (let i = 0; i<big; i++){
    if (lowestLevel < list[i].level){lowestLevel = list[i].level;}
  }

  // Find x and y
  inThisLevel = 0;
  levelFound = 0;
  for (let i = 0; i<=lowestLevel; i++){
    for (let j = 0; j<big; j++){
      if (i == list[j].level){inThisLevel++;}
    }

    for (let j = 0; j<big; j++){
      if (i == list[j].level){
        levelFound++;
        list[j].position = [(canvas.width/(inThisLevel+1))*levelFound, ypadding*(i+1)];
      }
    }
    inThisLevel = 0;
    levelFound = 0;
  }
}

// Find the height of the canvas
function find_height(){
  height = 0;
  for (let i = 0; i<vertexes.length; i++){
    if (height < vertexes[i].position[1]){height = vertexes[i].position[1];}
  }
  return height;
}

// Find the position of a child
function find_child_position(child_name){
  for (let i = 0; i<vertexes.length; i++){
    if (child_name === vertexes[i].name){return vertexes[i].position}
  }
}

// Return a Kürzel based on the name given
function find_the_name(the_name){
  if (the_name[0]=="C"){return "C".concat(only_numbers(the_name));}
  if (the_name[0]=="P" && the_name[1]=="o"){return "Po".concat(only_numbers(the_name));}
  return "P".concat(only_numbers(the_name).slice(1));
}

// Return only the numbers of a string
function only_numbers(the_name){
  new_name = "";
  for (let i = 0; i<the_name.length; i++){
    if (the_name.charCodeAt(i)>=48 && the_name.charCodeAt(i)<=57){new_name += the_name[i];}
  }
  return new_name;
}

// Find the parents and children of a vertex
function find_conections(starter){
  // Children
  what_to_return = [].concat(starter.child);
  // Parents
  for (let i = 0; i<vertexes.length; i++){
    for (let j = 0; j<vertexes[i].child.length; j++){
      if (vertexes[i].child[j] === starter.name){
        what_to_return = what_to_return.concat(vertexes[i].name);
      }
    }
  }

  return what_to_return;
}

// Find if the mouse hovers over a vertex
function colision(x, y){
  for (let i = 0; i<vertexes.length; i++){
    if ((x-vertexes[i].position[0])**2 + (y-vertexes[i].position[1])**2 < radius**2){
      return vertexes[i];
    }
  }
  return null;
}

// VARIABLES
var vertexes = [
	new Vertex(["Prop. 1.1","Prop. 1.2","Prop. 1.4","Prop. 1.5","Prop. 1.6","Prop. 1.7"],[],"BLUE","Post. 1",0),
	new Vertex(["Prop. 1.2","Prop. 1.5"],[],"BLUE","Post. 2",0),
	new Vertex(["Prop. 1.1","Prop. 1.1","Prop. 1.2","Prop. 1.2","Prop. 1.3","Prop. 1.12"],[],"BLUE","Post. 3",0),
	new Vertex([],[],"BLUE","Post. 4",0),
	new Vertex(["Prop. 1.29","Prop. 1.44"],[],"BLUE","Post. 5",0),
	new Vertex(["Prop. 1.1","Prop. 1.2","Prop. 1.3","Prop. 1.13","Prop. 1.14","Prop. 1.15"],[],"BLUE","C.N. 1",0),
	new Vertex(["Prop. 1.13","Prop. 1.13"],[],"BLUE","C.N. 2",0),
	new Vertex(["Prop. 1.2","Prop. 1.5","Prop. 1.5","Prop. 1.14","Prop. 1.15"],[],"BLUE","C.N. 3",0),
	new Vertex(["Prop. 1.4","Prop. 1.4","Prop. 1.4","Prop. 1.4","Prop. 1.8"],[],"BLUE","C.N. 4",0),
	new Vertex(["Prop. 1.6","Prop. 1.7","Prop. 1.7"],[],"BLUE","C.N. 5",0),
	new Vertex(["Prop. 1.2","Prop. 1.9","Prop. 1.10","Prop. 1.11"],[],"BLUE","Prop. 1.1",1),
	new Vertex(["Prop. 1.3"],[],"BLUE","Prop. 1.2",2),
	new Vertex(["Prop. 1.5","Prop. 1.6","Prop. 1.9","Prop. 1.11","Prop. 1.16","Prop. 1.18","Prop. 1.20","Prop. 1.22","Prop. 1.24","Prop. 1.26","Prop. 1.26","Prop. 1.46"],[],"BLUE","Prop. 1.3",3),
	new Vertex(["Prop. 1.5","Prop. 1.5","Prop. 1.6","Prop. 1.10","Prop. 1.16","Prop. 1.24","Prop. 1.25","Prop. 1.26","Prop. 1.26","Prop. 1.26","Prop. 1.26","Prop. 1.33","Prop. 1.34","Prop. 1.35","Prop. 1.47"],[],"BLUE","Prop. 1.4",1),
	new Vertex(["Prop. 1.7","Prop. 1.7","Prop. 1.18","Prop. 1.19","Prop. 1.20","Prop. 1.24"],[],"BLUE","Prop. 1.5",4),
	new Vertex([],[],"BLUE","Prop. 1.6",4),
	new Vertex(["Prop. 1.8"],[],"BLUE","Prop. 1.7",5),
	new Vertex(["Prop. 1.9","Prop. 1.11","Prop. 1.12","Prop. 1.23"],[],"BLUE","Prop. 1.8",6),
	new Vertex(["Prop. 1.10"],[],"BLUE","Prop. 1.9",7),
	new Vertex(["Prop. 1.12","Prop. 1.16","Prop. 1.42"],[],"BLUE","Prop. 1.10",8),
	new Vertex(["Prop. 1.13","Prop. 1.46"],[],"BLUE","Prop. 1.11",7),
	new Vertex([],[],"BLUE","Prop. 1.12",9),
	new Vertex(["Prop. 1.14","Prop. 1.15","Prop. 1.15","Prop. 1.17","Prop. 1.28","Prop. 1.29","Prop. 1.32"],[],"BLUE","Prop. 1.13",8),
	new Vertex(["Prop. 1.45","Prop. 1.45","Prop. 1.47"],[],"BLUE","Prop. 1.14",9),
	new Vertex(["Prop. 1.16","Prop. 1.28","Prop. 1.29","Prop. 1.44"],[],"BLUE","Prop. 1.15",9),
	new Vertex(["Prop. 1.17","Prop. 1.18","Prop. 1.21","Prop. 1.26","Prop. 1.27"],[],"BLUE","Prop. 1.16",10),
	new Vertex([],[],"BLUE","Prop. 1.17",11),
	new Vertex(["Prop. 1.19"],[],"BLUE","Prop. 1.18",11),
	new Vertex(["Prop. 1.20","Prop. 1.24"],[],"BLUE","Prop. 1.19",12),
	new Vertex(["Prop. 1.21","Prop. 1.22"],[],"BLUE","Prop. 1.20",13),
	new Vertex([],[],"BLUE","Prop. 1.21",14),
	new Vertex(["Prop. 1.23"],[],"BLUE","Prop. 1.22",14),
	new Vertex(["Prop. 1.24","Prop. 1.31","Prop. 1.42"],[],"BLUE","Prop. 1.23",15),
	new Vertex(["Prop. 1.25"],[],"BLUE","Prop. 1.24",16),
	new Vertex([],[],"BLUE","Prop. 1.25",17),
	new Vertex(["Prop. 1.34"],[],"BLUE","Prop. 1.26",11),
	new Vertex(["Prop. 1.28","Prop. 1.28","Prop. 1.30","Prop. 1.31","Prop. 1.33"],[],"BLUE","Prop. 1.27",11),
	new Vertex([],[],"BLUE","Prop. 1.28",12),
	new Vertex(["Prop. 1.30","Prop. 1.30","Prop. 1.32","Prop. 1.32","Prop. 1.33","Prop. 1.34","Prop. 1.34","Prop. 1.35","Prop. 1.44","Prop. 1.45","Prop. 1.45","Prop. 1.45","Prop. 1.46"],[],"BLUE","Prop. 1.29",10),
	new Vertex(["Prop. 1.45"],[],"BLUE","Prop. 1.30",12),
	new Vertex(["Prop. 1.32","Prop. 1.37","Prop. 1.37","Prop. 1.38","Prop. 1.38","Prop. 1.39","Prop. 1.40","Prop. 1.42","Prop. 1.42","Prop. 1.44","Prop. 1.44","Prop. 1.46","Prop. 1.46","Prop. 1.47"],[],"BLUE","Prop. 1.31",16),
	new Vertex([],[],"BLUE","Prop. 1.32",17),
	new Vertex(["Prop. 1.36","Prop. 1.45"],[],"BLUE","Prop. 1.33",12),
	new Vertex(["Prop. 1.35","Prop. 1.36","Prop. 1.36","Prop. 1.36","Prop. 1.37","Prop. 1.37","Prop. 1.38","Prop. 1.41","Prop. 1.43","Prop. 1.43","Prop. 1.45","Prop. 1.45","Prop. 1.46","Prop. 1.46"],[],"BLUE","Prop. 1.34",12),
	new Vertex(["Prop. 1.36","Prop. 1.37"],[],"BLUE","Prop. 1.35",13),
	new Vertex(["Prop. 1.38"],[],"BLUE","Prop. 1.36",14),
	new Vertex(["Prop. 1.39","Prop. 1.41"],[],"BLUE","Prop. 1.37",17),
	new Vertex(["Prop. 1.40","Prop. 1.42"],[],"BLUE","Prop. 1.38",17),
	new Vertex([],[],"BLUE","Prop. 1.39",18),
	new Vertex([],[],"BLUE","Prop. 1.40",18),
	new Vertex(["Prop. 1.42","Prop. 1.47","Prop. 1.47"],[],"BLUE","Prop. 1.41",18),
	new Vertex(["Prop. 1.44","Prop. 1.45"],[],"BLUE","Prop. 1.42",19),
	new Vertex(["Prop. 1.44"],[],"BLUE","Prop. 1.43",13),
	new Vertex(["Prop. 1.45"],[],"BLUE","Prop. 1.44",20),
	new Vertex([],[],"BLUE","Prop. 1.45",21),
	new Vertex(["Prop. 1.47"],[],"BLUE","Prop. 1.46",17),
	new Vertex([],[],"BLUE","Prop. 1.47",19)
]

// PROGRAM
// Window stuff
var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth-(0.02*window.innerWidth);
find_position(vertexes);
canvas.height = find_height()+ypadding;
var canvastx = canvas.getContext("2d");

// Edge drawing
for (let i = 0; i<vertexes.length; i++){
  for (let j = 0; j<vertexes[i].child.length; j++){
    var childPosition = find_child_position(vertexes[i].child[j]);
    canvastx.beginPath();
    canvastx.moveTo(vertexes[i].position[0], vertexes[i].position[1]);
    canvastx.lineTo(childPosition[0],childPosition[1]);
    canvastx.lineWidth = linewidth;
    canvastx.strokeStyle = darkblue;
    canvastx.stroke();
  }
}

// Circle and name drawing
for (let i = 0; i<vertexes.length; i++){
  // Circle
  canvastx.beginPath();
  canvastx.arc(vertexes[i].position[0], vertexes[i].position[1], radius, 0, 2*Math.PI);
  canvastx.fillStyle = darkblue;
  canvastx.fill();
  // Name
  canvastx.beginPath();
  canvastx.font = "20px Arial";
  canvastx.fillStyle = black;
  canvastx.fillText(find_the_name(vertexes[i].name),vertexes[i].position[0]-17, vertexes[i].position[1]+7);
}


// Highlight when hovering
document.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect(); // Get canvas position relative to viewport
    where = colision(event.clientX-rect.left, event.clientY-rect.top);
    if (where != null){
      // Highlight stuff
      // Edges
      conections = find_conections(where);
      for (let j = 0; j<conections.length; j++){
        for (let i = 0; i<vertexes.length; i++){
          if (conections[j] === vertexes[i].name){
            canvastx.beginPath();
            canvastx.moveTo(vertexes[i].position[0], vertexes[i].position[1]);
            canvastx.lineTo(where.position[0],where.position[1]);
            canvastx.lineWidth = linewidth+1;
            canvastx.strokeStyle = lightblue;
            canvastx.stroke();
            break;
          }
        }
      }

      // Circle and names
      canvastx.beginPath();
      canvastx.arc(where.position[0], where.position[1], radius+1, 0, 2*Math.PI);
      canvastx.fillStyle = lightblue;
      canvastx.fill();
      // Name
      canvastx.beginPath();
      canvastx.font = "20px Arial";
      canvastx.fillStyle = black;
      canvastx.fillText(find_the_name(where.name), where.position[0]-17, where.position[1]+7);
      for (let j = 0; j<conections.length; j++){
        for (let i = 0; i<vertexes.length; i++){
          if (conections[j] === vertexes[i].name){
            canvastx.beginPath();
            canvastx.arc(vertexes[i].position[0], vertexes[i].position[1], radius+1, 0, 2*Math.PI);
            canvastx.fillStyle = lightblue;
            canvastx.fill();
            // Name
            canvastx.beginPath();
            canvastx.font = "20px Arial";
            canvastx.fillStyle = black;
            canvastx.fillText(find_the_name(vertexes[i].name),vertexes[i].position[0]-17, vertexes[i].position[1]+7);
            break;
          }
        }
      }
    }
    else{
      // Blanck
      canvastx.beginPath();
      canvastx.fillStyle = "rgb(255,255,255)";
      canvastx.fillRect(0, 0, canvas.width, canvas.height);

      // Edge drawing
      for (let i = 0; i<vertexes.length; i++){
        for (let j = 0; j<vertexes[i].child.length; j++){
          var childPosition = find_child_position(vertexes[i].child[j]);
          canvastx.beginPath();
          canvastx.moveTo(vertexes[i].position[0], vertexes[i].position[1]);
          canvastx.lineTo(childPosition[0],childPosition[1]);
          canvastx.lineWidth = linewidth;
          canvastx.strokeStyle = darkblue;
          canvastx.stroke();
        }
      }

      // Circle and name drawing
      for (let i = 0; i<vertexes.length; i++){
        // Circle
        canvastx.beginPath();
        canvastx.arc(vertexes[i].position[0], vertexes[i].position[1], radius, 0, 2*Math.PI);
        canvastx.fillStyle = darkblue;
        canvastx.fill();
        // Name
        canvastx.beginPath();
        canvastx.font = "20px Arial";
        canvastx.fillStyle = black;
        canvastx.fillText(find_the_name(vertexes[i].name),vertexes[i].position[0]-17, vertexes[i].position[1]+7);
      }
    }
});
