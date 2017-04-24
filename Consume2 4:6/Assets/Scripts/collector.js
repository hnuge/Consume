#pragma strict

var enemy : GameObject;
var count:int;

function Start () {
	count = 0;
}

function Update () {
	count++;
	if (count ==30)
	{
		var xCo = 1;
		var yCo = 1;
		var coins = GameObject.FindGameObjectsWithTag("coin");
		var target = Number.PositiveInfinity;
		for (c = 0; c < coins.length; c++){
			
		}
//		if (transform.position.x >squareX)
//		{
//			xCo = -1;
//		}
//		if (transform.position.y >squareY)
//		{
//			yCo = -1;
//		}
//		if (Mathf.Abs(squareX-transform.position.x) > Mathf.Abs(squareY-transform.position.y))
//		{
//			transform.position.x += xCo;
//		}
//		else
//		{
//			transform.position.y += yCo;
//		}
//		count = 0;
	}
}
