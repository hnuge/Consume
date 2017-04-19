
#pragma strict
//Nugent

var prefab : GameObject;
var cells : GameObject[,];

public var rows : float;
public var columns : float;



function Start () {
	cells = new GameObject[columns, rows];

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
		}

	}
}

function Update () {

}


function changeColor(row : int, column : int, shade : UnityEngine.Color) //color : Color)
{
	cells[row,column].GetComponent.<Renderer>().material.color = shade;
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