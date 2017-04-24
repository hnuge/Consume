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
	//var move = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	//if(transform.position.x + move.x * speed * Time.deltaTime > 11.2)   //right wall
		//move.x = 0;
	//if(transform.position.x + move.x * speed * Time.deltaTime < -11.2)  //left wall
		//move.x = 0;
	//if(transform.position.z + move.z * speed * Time.deltaTime > 7.6)
		//move.z = 0;
	//if(transform.position.z + move.z * speed * Time.deltaTime < -7.6)
		//move.z = 0;
	//transform.position += 1.5 * move * speed * Time.deltaTime;
	count++;
	if(count >= 7)
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
