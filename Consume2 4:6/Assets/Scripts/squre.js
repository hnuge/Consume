#pragma strict

var square:GameObject;
var lastKey:String;
var currKey:String;
var goalTime : float = Time.time;
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
		print(array);
	}

	currKey = lastKey;
}


function MoveUp()
{
	
	print(Time.time);
	yield WaitForSeconds(500000);
	print(Time.time);
}

function MoveDown()
{

}

function MoveLeft()
{

}

function MoveRight()
{

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
