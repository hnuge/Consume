#pragma strict

var prefab : GameObject;
var cells : GameObject[,];

public var rows : float;
public var columns : float;

public var tileScript : maketile;	//access maketile script


function Start () {
	
}

function Update () {
	
}

function makeHome(tile : GameObject, home : GameObject)
{
	tile = Instantiate(prefab, new Vector3(i+0.5, (-1)*j + -0.5, 0), Quaternion.identity);
}
