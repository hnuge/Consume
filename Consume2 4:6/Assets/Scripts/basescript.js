#pragma strict
// Nugent

var prefab : GameObject;
var cells : GameObject[,];

public var rows : float;
public var columns : float;

public var tileScript : tilescript;	//access maketile script


function Start () {
	rows = 7;
}

function Update () {
	
}

function makeHome(pos : Vector3)
{
	print(pos);
	//tile = Instantiate(prefab, new Vector3(i+0.5, (-1)*j + -0.5, 0), Quaternion.identity);
}
