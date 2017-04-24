
#pragma strict
//Nugent

var prefab : GameObject;
var cells : GameObject[,];

var coin : GameObject;
var numcoins : int;
var c : GameObject;

public var rows : float;
public var columns : float;

var coinloc : int[,];



function Start () {
	cells = new GameObject[columns, rows];
	coinloc = new int[columns,rows];

	var i : float;
	var j : float;
	for (i = 0; i < columns; i++)
	{
		for (j = 0; j < rows; j++)
		{
			cells[i,j] = Instantiate(prefab, new Vector3(i+0.5, (-1)*j + -0.5, 0), Quaternion.identity);
			cells[i,j].layer = 3;
			addCollider(cells[i,j]);
			cells[i,j].tag = "tile";
			coinloc[i,j] = 0;
		}

	}
	var x:int;
	var y:int;
	for (i = 0; i < numcoins; i++)
	{
		x = Random.Range(0, columns);
		y = Random.Range(0, rows);
		c = Instantiate(coin, new Vector3(cells[x,y].transform.position.x, cells[x,y].transform.position.y, 0), Quaternion.identity);
		coinloc[x,y] = 1;


	}

}

function Update () {

}



function addCollider(tile : GameObject)
{
	// adds an IsTrigger box collider to each tile 
	tile.AddComponent.<BoxCollider2D>();
	tile.GetComponent.<Collider2D>().isTrigger = true;
	tile.AddComponent.<Rigidbody2D>();
	tile.GetComponent.<Rigidbody2D>().mass = 0;
	tile.GetComponent.<Rigidbody2D>().gravityScale = 0;
}

function OnTriggerEnter2D(hit : Collider2D)
{
	

}