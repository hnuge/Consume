#pragma strict

var prefab : GameObject;
var cells : GameObject[,];

public var rows : int;
public var columns : int;



function Start () {
	cells = new GameObject[rows, columns];

	var i : int;
	var j : int;
	for (i = 0; i < rows; i++)
	{
		for (j = 0; j < columns; j++)
		{
			cells[i,j] = Instantiate(prefab, new Vector3(0, 0, 0), Quaternion.identity);
			cells[i,j].GetComponent.<Renderer>().material.color = Color.red;

		}

	}
}

function Update () {
	
}
