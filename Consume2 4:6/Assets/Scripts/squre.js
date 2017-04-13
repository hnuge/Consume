#pragma strict

var square:GameObject;
var lastKey:String;
var currKey:String;

var speed : float = 0.25;

var array = new Array();



function Start () {
	currKey = "start";
}

function Update () {
	/*-----------------------------------------
		Movement 
		Square moves exactly one length of itself
	-----------------------------------------*/
	if (Input.GetKey("up"))
	{
		lastKey = "up";
		transform.position.y +=.5 * speed;
	}
	else if (Input.GetKey("down"))
	{
		lastKey = "down";
		transform.position.y -=.5 * speed;
	}
	else if (Input.GetKey("left"))
	{
		lastKey = "left";
		transform.position.x -=.5 * speed;
	}
	else if (Input.GetKey("right"))
	{
		lastKey = "right";
		transform.position.x +=.5 * speed;
	}

	if (lastKey != currKey)
	{
		array.Push(transform.position);
		print(array);
	}

	currKey = lastKey;
}


function OnTriggerEnter2D(hit : Collider2D)
{
	if (hit.gameObject.tag == "home")
	{
		print(array);
		array.length = 0; 	// clearing array
		print(array);
	}

}

function turnCorners()
{
	
}
