
#pragma strict


var enemy : GameObject;
var count:int;
var r : float;
var move : int = 2;

var paused : boolean;



function Start () {
	count = 0;
	paused = false;
}

function Update () {
	if (!paused)
	{
		count++;
		if (count ==4)
		{
			var xCo = .25;
			var yCo = .25;
			var squareX = GameObject.Find("Square").transform.position.x;
			var squareY = GameObject.Find("Square").transform.position.y;
			if (transform.position.x >squareX)
			{
				xCo = -.25;
			}
			if (transform.position.y >squareY)
			{
				yCo = -.25;
			}
			if (Mathf.Abs(squareX-transform.position.x) > Mathf.Abs(squareY-transform.position.y))
			{
				if (move == 0 && r != transform.position.x)
				{
					move = 1;
					transform.position.y += .25;
				}
				move = 0;
				transform.position.x += xCo;
				r = transform.position.x;
			}
			else
			{
				if (move == 1 && r != transform.position.y)
				{
					move = 0;
					transform.position.x += .25;
				}
				transform.position.y += yCo;
			}
			count = 0;
		}
	}
}

function wait()
{
	yield WaitForSeconds(5); 
}


function OnCollisonEnter2D(hit : Collision2D)
{
	print("hit");
	if (hit.gameObject.tag == "wall")
	{
		print("hit wall");
	}
}
