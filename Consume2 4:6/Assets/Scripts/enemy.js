
#pragma strict

var dist:float;
var dir:int;
public var score:int;
public var text:GUIText;

var count:int;

var hits:int;

function Start () {
	count = 0;
	score = 0;
}

function Update () {
	count++;
	if (count ==60)
	{
		dir = Random.Range(1,5);
		print(dir);
		dist = Random.Range(1,5);

		if (dir==1) 	//up
		{
			if (transform.position.y + dist < 0)
			{
				transform.position.y +=dist;
			}
		}
		else if (dir ==2) //down
		{
			if (transform.position.y - dist > -8)
			{
				transform.position.y -=dist;
			}

		}
		else if (dir == 3) //left
		{
			if (transform.position.x - dist >0)
			{
				transform.position.x -=dist;
			}

		}
		else if (dir == 4) //right
		{
			if (transform.position.x + dist < 16)
			{
				transform.position.x +=dist;
			}

		}
		count = 0;
	}
}

function OnTriggerEnter2D(hit : Collider2D)
{
	if (hit.gameObject.tag == "player_square")
	{
		print("yo");
		//score++;
	}

}