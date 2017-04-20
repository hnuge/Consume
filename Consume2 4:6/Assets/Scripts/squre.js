#pragma strict

var square:GameObject;
var home:GameObject;

var lastKey:String;
var currKey:String;
var count : int;
public var ts : tilescript; // 	//access maketile script
public var bs : basescript;	//access home base script


var array = new Array();

var cells : GameObject[,];
var columns : int = 16;
var rows : int = 10;

function Start () {


	print(bs.rows);
	currKey = "start";
	count = 0;
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
	count++;
	if(count >= 15)
	{
		if (Input.GetKey("up"))
		{
			lastKey = "up";
			transform.position.y += 1;
			count = 0;
		}
		else if (Input.GetKey("down"))
		{
			lastKey = "down";
			transform.position.y -= 1;
			count = 0;
		}
		else if (Input.GetKey("left"))
		{
			lastKey = "left";
			transform.position.x -= 1;
			count = 0;
		}
		else if (Input.GetKey("right"))
		{
			lastKey = "right";
			transform.position.x += 1;
			count = 0;
		}
	
		if (lastKey != currKey)
		{
			array.Push(transform.position);
		}

		currKey = lastKey;
	}

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

	if (hit.gameObject.tag == "tile")
	{
		//print("hit");
		bs.makeHome(square.transform.position);
	}

}

function turnCorners()
{
	
}
