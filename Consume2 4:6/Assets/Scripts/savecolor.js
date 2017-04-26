#pragma strict

static var sqColor:Color;

function Awake () {
	DontDestroyOnLoad(this);
}

function Update () {
	print("color");
	print(sqColor);
}
