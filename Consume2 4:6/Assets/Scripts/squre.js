#pragma strict

var square:GameObject;
var lastKey:String;
var currKey:String;
var goalTime : float;
var speed : float = 0.25;
public var tileScript : maketile;	//access maketile script
  


var array = new Array();

var cells : GameObject[,];
var columns : int = 16;
var rows : int = 10;

function Start () {
	currKey = "start";
	goalTime = Time.time;
	cells = new GameObject[columns, rows];
	var i : float;
	var j : float;
/*	for (i = 0; i < columns; i++)
	{
		for (j = 0; j < rows; j++)
		{
			print(tileScript.rows);
			cells[i,j] = tileScript.cells[i,j];

			//tileScript.addCollider(cells[i,j]);
		}

	} */

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

	/*----------
	 	make tail
	--------------
	var pos : Vector3 = square.transform.position;
	var x : int = pos.x;
	var y : int = pos.y;
	if (currKey != "start")
		if (currKey == "right")
		{
			x = x - .5;
			y = (y - .5) * (-1);		// * -1 to keep index in range
		}
		if (currKey == "left")
		{
			x = x + .5;
			y = (y - .5) * (-1);		// * -1 to keep index in range
		}
		if (currKey == "down")
		{
			x = x + .5;
			y = (y - .5) * (-1);		// * -1 to keep index in range
		}
		if (currKey == "up")
		{
			x = x + .5;
			y = (y - 1.5) * (-1);
		}
	//tileScript.changeColor(x, y, Color(202.0/255.0,242.0/255.0,249.0/255.0, 1)); */
}

function OnTriggerEnter2D(hit : Collider2D)
{
/*	print("trigger");
	if (hit.gameObject.tag == "home")
	{
		print(array);
		var i : int = 0;
		for (i = 0; i < array.length; i++)
		{
			var point : Vector3 = array.Pop();
		}
		array.length = 0; 	// clearing array
	}
	*/
	if (hit.gameObject.tag == "tile")
	{
		
	}

}

function turnCorners()
{
	
}
