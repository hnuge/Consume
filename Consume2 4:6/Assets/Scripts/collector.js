#pragma strict

var enemy : GameObject;
var count:int;
var r : float;
var move : int;

var paused : boolean;

function Start () {
	count = 0;
	paused = false;
}

function Update () {
	if (!paused)
	{
		count++;
		if (count ==8)
		{
			var xCo = .25;
			var yCo = .25;
			var coins = GameObject.FindGameObjectsWithTag("coin");
			var dist = Number.PositiveInfinity;
			for (var c = 0; c < coins.length; c++){
				var q = (coins[c].transform.position.x-transform.position.x)*(coins[c].transform.position.x-transform.position.x)+(coins[c].transform.position.y-transform.position.y)*(coins[c].transform.position.y-transform.position.y);
				if (q < dist)
				{
					dist = q;
					var target = coins[c];
				}
			var coinX = target.transform.position.x;
			var coinY = target.transform.position.y;
			}
			if (transform.position.x >coinX)
			{
				xCo = -.25;
			}
			if (transform.position.y >coinY)
			{
				yCo = -.25;
			}
			if (Mathf.Abs(coinX-transform.position.x) > Mathf.Abs(coinY-transform.position.y))
			{
				if (move == 0 && r != transform.position.x)
				{
					move = 1;
					transform.position.y += -.25;
				}
				else
				{
					move = 0;
					transform.position.x += xCo;
					r = transform.position.x;
				}
			}
			else
			{
				if (move == 1 && r != transform.position.y)
				{
					move = 0;
					transform.position.x += -.25;
				}
				else
				{
					transform.position.y += yCo;
				}
			}
			count = 0;
		}
	}
}

function OnCollisonEnter2D(hit : Collision2D)
{
	print("hit");
	if (hit.gameObject.tag == "wall")
	{
		print("hit wall");
	}
}
