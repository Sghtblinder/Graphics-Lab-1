/*
 *
 *  Contains code for Program Code window.
 * 
 */

//Declare all variables
var codeSep = 0; //Used for naming div elements that separate code lines
var codeText = new Array();

//Point object
function makePoint(startX, startY) {
	this.startX = startX;
	this.startY = startY;
	this.type = 'point';
	this.varNum = pointVariables.length; //Index of this object in pointVariables
	this.drawNum = toDraw.length; //Index of this object in toDraw
	this.active = true; //Boolean to control if shape needs to be drawn or not
	this.assigned = true; //Boolean to control whether variable has been assigned or not
	var arr = new Array("cell1", "cell2", "cell3");
	makeRow(arr);
}
//Line object
function makeLine(startX, startY, endX, endY, type) {
	this.startX = startX;
	this.startY = startY;
	this.endX = endX;
	this.endY = endY;
	this.type = type;
	this.varNum = lineVariables.length; //Index of this object in lineVariables
	this.drawNum = toDraw.length; //Index of this object in toDraw
	this.active = true; //Boolean to control if shape needs to be drawn or not
	this.assigned = true; //Boolean to control whether variable has been assigned or not 
}
//Circle object
function makeCircle(startX, startY, diameter) {
	this.startX = startX;
	this.startY = startY;
	this.diameter = diameter;
	this.type = 'circle';
	this.varNum = circleVariables.length;
	this.drawNum = toDraw.length;
	this.active = true;
	this.assigned = true;
}
//Polygon object
function makePolygon(angles) {
	this.angles = angles;
	this.type = 'polygon';
	this.varNum = polygonVariables.length;
	this.drawNum = toDraw.length;
	this.active = true;
	this.assigned = true;
}

//Makes new row in parentTable and takes array of cells. First row is reserved for pointer
function makeRow(cells) {
    var string = "<td>&nbsp&nbsp&nbsp</td>";
    for (var i = 0; i < cells.length; i++) {
        string += "<td>" + cells[i] + "</td>";
    }
    
}

//Allows user to assign values to a declared variable
function assign() {
	console.log("Assign");
}

//Allows user to choose a shape to draw
function drawShape() {
	console.log("Draw declared and assigned shape");
}

//Erases a shape
function erase() {
    console.log("Erase object");
}

//Allow users to change the color of shapes
function changeColor() {
    console.log("change color");
}

//Creates a loop in program window
function loop() {
    console.log("create a loop");
}

//Increments a variable by specified amount
function increment() {
    console.log("increment");
}

//Decrements a variable by specified amount
function decrement() {
    console.log("decrement");
}


$(document).ready(function() {
    $("#program_code").html("<table id='parentTable' border='1'><table>");
});









