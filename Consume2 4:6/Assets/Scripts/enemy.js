
#pragma strict


var enemy : GameObject;
var dist:float;
var dir:int;
var count:int;


public var ebs : enemybasescript;	//access enemy base script


function Start () {
	count = 0;
}

function Update () {
	count++;
	if (count ==15)
	{
		dir = Random.Range(1,5);
		print(dir);
		dist = 1;

		if (dir==1) 	//up
		{
			//if (transform.position.y + dist < 0)
			//{
				transform.position.y +=dist;
			//}
		}
		else if (dir ==2) //down
		{
			//if (transform.position.y - dist > -8)
			//{
				transform.position.y -=dist;
			//}

		}
		else if (dir == 3) //left
		{
			//if (transform.position.x - dist >0)
			//{
				transform.position.x -=dist;
			//}

		}
		else if (dir == 4) //right
		{
			//if (transform.position.x + dist < 16)
			//{
				transform.position.x +=dist;
			//}

		}
		count = 0;
	}
}

function wait()
{
	yield WaitForSeconds(5); 
}


function OnTriggerEnter2D(hit : Collider2D)
{

	if (hit.gameObject.tag == "tile")
	{
		print("hit");
		ebs.makeHome(enemy.transform.position);
	}

}