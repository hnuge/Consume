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
		if (count ==30)
		{
			var xCo = 1;
			var yCo = 1;
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
				xCo = -1;
			}
			if (transform.position.y >coinY)
			{
				yCo = -1;
			}
			if (Mathf.Abs(coinX-transform.position.x) > Mathf.Abs(coinY-transform.position.y))
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
