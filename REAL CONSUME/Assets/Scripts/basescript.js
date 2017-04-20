#pragma strict
// Nugent

var prefab : GameObject;
var cells : GameObject[,];

public var rows : float;
public var columns : float;

public var ts : tilescript;	//access maketile script


function Start () {
	rows = 7;
}

function Update () {
	
}

function makeHome(pos : Vector3)
{
	ts.cells[pos.x,-pos.y] = Instantiate(prefab, new Vector3(pos.x, pos.y, 0), Quaternion.identity);
	ts.cells[pos.x,-pos.y].layer = 2;
	ts.cells[pos.x,-pos.y].tag = "home";



}
