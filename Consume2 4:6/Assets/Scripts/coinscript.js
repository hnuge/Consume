#pragma strict

var coin : GameObject;
var numcoins : int;
var c : GameObject[];


public var ts : tilescript;  	//access maketile script

function Start () 
{
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

}

function Update () 
{
	
}
