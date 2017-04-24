#pragma strict

var square:GameObject;
var home:GameObject;

var lastKey:String;
var currKey:String;
var count : int;
public var ts : tilescript; // 	//access maketile script
public var bs : basescript;	//access home base script
var startX : float;
var startY : float;
var rightWall : float;
var leftWall : float;
var upWall : float;
var downWall : float;


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

}

function Update () {
	/*-----------------------------------------
		Movement 
		Square moves exactly one length of itself
	-----------------------------------------*/
	var move : Vector3 = transform.position;

	count++;
	if(count >= 7)
	{
		if (Input.GetKey("up"))
		{
			lastKey = "up";
			move.y += 1;
			count = 0;
		}
		else if (Input.GetKey("down"))
		{
			lastKey = "down";
			move.y -= 1;
			count = 0;
		}
		else if (Input.GetKey("left"))
		{
			lastKey = "left";
			move.x -= 1;
			count = 0;
		}
		else if (Input.GetKey("right"))
		{
			lastKey = "right";
			move.x += 1;
			count = 0;
		}
		/* --------------------
		 	wall
		 ---------------------*/
		if (move.x < leftWall)
		{
			move.x = move.x+1;
		}
		if (move.x > rightWall)
		{
			print("AAAAAAAA");
			move.x = move.x-1;
		}
		if (move.y > upWall)
		{
			move.y = move.y-1;
		}
		if (move.y < downWall)
		{
			move.y = move.y+1;
		}
	
		if (lastKey != currKey)
		{
			array.Push(move);
		}

		currKey = lastKey;
		transform.position = move;
	}

}

function OnTriggerEnter2D(hit : Collider2D)
{

	if (hit.gameObject.tag == "tile")
	{
		bs.makeHome(square.transform.position);
	}

	if (hit.gameObject.tag == "wall")
	{
		print("hit wall");
	}
	if (hit.gameObject.tag == "enemy")
	{
		print("hit enemy");
		transform.position.x = startX;
		transform.position.y = startY;
	}
}



function turnCorners()
{
	
}
