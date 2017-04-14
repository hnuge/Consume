#pragma strict

var square:GameObject;
var lastKey:String;
var currKey:String;
var goalTime : float;
var speed : float = 0.25;
public var tileScript : maketile;	//access maketile script

var array = new Array();

var cells : GameObject[,];
var columns = tileScript.columns;
var rows = tileScript.rows;

function Start () {
	currKey = "start";
	goalTime = Time.time;
	cells = new GameObject[columns, rows];
	var i : float;
	var j : float;
	for (i = 0; i < columns; i++)
	{
		for (j = 0; j < rows; j++)
		{
			cells[i,j] = tileScript.cells[i,j];
			print(i);
		}

	}

}

function Update () {
	/*-----------------------------------------
		Movement 
		Square moves exactly one length of itself
	-----------------------------------------*/
	if (Input.GetKey("up") && Time.time > goalTime)
	{
		lastKey = "up";
		transform.position.y += 1;
		goalTime = Time.time + .1;
	}
	else if (Input.GetKey("down") && Time.time > goalTime)
	{
		lastKey = "down";
		transform.position.y -= 1;
		goalTime = Time.time + .1;
	}
	else if (Input.GetKey("left") && Time.time > goalTime)
	{
		lastKey = "left";
		transform.position.x -= 1;
		goalTime = Time.time + .1;
	}
	else if (Input.GetKey("right") && Time.time > goalTime)
	{
		lastKey = "right";
		transform.position.x += 1;
		goalTime = Time.time + .1;
	}

	if (lastKey != currKey)
	{
		array.Push(transform.position);
	}

	currKey = lastKey;

	// access tiles?
	var pos : Vector3 = square.transform.position;
	var x : int = pos.x + .5;
	var y : int = pos.y - .5;

	tileScript.changeColor(1, 1, Color.blue);
}

function OnTriggerEnter2D(hit : Collider2D)
{
	if (hit.gameObject.tag == "home")
	{
		array.length = 0; 	// clearing array
	}

	if (hit.gameObject.tag == "tile")
	{
		print("poop");
	}

}

function turnCorners()
{
	
}
