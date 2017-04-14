#pragma strict

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

		}

	}
}

function Update () {

}


function changeColor(row : int, column : int, shade : UnityEngine.Color) //color : Color)
{
	cells[row,column].GetComponent.<Renderer>().material.color = shade;
}