#pragma strict

var coin : GameObject;

public var square : GameObject;

function Start () 
{
	
}

function Update () 
{
	
}


function OnTriggerEnter2D (hit : Collider2D)
{
	
	if (hit.gameObject.tag == "player_square")
	{
		Destroy(coin);
		hit.gameObject.SendMessage("AddMoney", 1);
	}

	else if (hit.gameObject.tag == "enemy")
	{
		Destroy(coin);
		square = GameObject.Find("Square");
		square.SendMessage("AddEnemyMoney", 1);
	}
}






/*
	var coin : GameObject;
var numcoins : int;
var c : GameObject[];
var columns : int;
var rows : int;


public var ts : tilescript;  	//access maketile script
	c = new GameObject[ts.columns * ts.rows];
	var x : int;
	var y : int;
	var i : int;
	print(ts.columns);
	for (i = 0; i < numcoins; i++)
	{
		x = Random.Range(0, ts.columns);
		y = Random.Range(0, ts.rows);
		c[i] = Instantiate(coin, new Vector3(x, y, 0), Quaternion.identity);

	}

	*/