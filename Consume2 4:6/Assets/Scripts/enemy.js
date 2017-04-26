
#pragma strict


var enemy : GameObject;
var count:int;

var paused : boolean;



function Start () {
	count = 0;
	paused = false;
}

function Update () {
	if (!paused)
	{
		count++;
		if (count ==10)
		{
			var xCo = 1;
			var yCo = 1;
			var squareX = GameObject.Find("Square").transform.position.x;
			var squareY = GameObject.Find("Square").transform.position.y;
			if (transform.position.x >squareX)
			{
				xCo = -1;
			}
			if (transform.position.y >squareY)
			{
				yCo = -1;
			}
			if (Mathf.Abs(squareX-transform.position.x) > Mathf.Abs(squareY-transform.position.y))
			{
				transform.position.x += xCo;
			}
			else
			{
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

}
