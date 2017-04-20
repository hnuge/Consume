#pragma strict
// Nugent

// width and height of the grid
public var width = 20;
public var height = 20;

// active map of the world
public var cells : GridCell[,];

// size of the cell
public var cellSize : float = 1.0f;

// scan the bounds of the model and create a grid
var bound : Renderer; 

public class GridCell
{
	public var color = Color.white; //default color of grid cell
	var filling = false; // cell has not been filled
}

function Start () {
	bound = GetComponent.<Renderer>();
	var topLeftCorner = bound.bounds.center;
	print(topLeftCorner);
}

function Update () {
	
}
