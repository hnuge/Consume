#pragma strict

var square:GameObject;

var lastKey:String;
var currKey:String;
var count : int;
public var ts : tilescript;  	//access maketile script

var startX : float;
var startY : float;
var rightWall : float;
var leftWall : float;
var upWall : float;
var downWall : float;


var array = new Array();

var cells : GameObject[,];
var columns : int = 16;
var rows : int = 10;

// coin
var coinCount : int = 0;
var countMoney : String;
var gui_money:UI.Text;
public var coinGoal : int;

var style : GUIStyle;

var win : boolean = false;

function Start () {
	currKey = "start";
	count = 0;
	cells = new GameObject[columns, rows];
	var i : float;
	var j : float;

}

function Update () {
	/*-----------------------------------------
		Movement 
		Square moves exactly one length of itself
	-----------------------------------------*/
	var move : Vector3 = transform.position;

	count++;
	if(count >= 7)
	{
		if (Input.GetKey("up"))
		{
			lastKey = "up";
			move.y += 1;
			count = 0;
		}
		else if (Input.GetKey("down"))
		{
			lastKey = "down";
			move.y -= 1;
			count = 0;
		}
		else if (Input.GetKey("left"))
		{
			lastKey = "left";
			move.x -= 1;
			count = 0;
		}
		else if (Input.GetKey("right"))
		{
			lastKey = "right";
			move.x += 1;
			count = 0;
		}
		/* --------------------
		 	wall
		 ---------------------*/
		if (move.x < leftWall)
		{
			move.x = move.x+1;
		}
		if (move.x > rightWall)
		{
			move.x = move.x-1;
		}
		if (move.y > upWall)
		{
			move.y = move.y-1;
		}
		if (move.y < downWall)
		{
			move.y = move.y+1;
		}
	
		if (lastKey != currKey)
		{
			array.Push(move);
		}

		currKey = lastKey;
		transform.position = move;
	}

}

function OnTriggerEnter2D(hit : Collider2D)
{

	if (hit.gameObject.tag == "coin")
	{
		AddMoney(coinCount++);
	}
	if (hit.gameObject.tag == "enemy")
	{
		print("hit enemy");
		transform.position.x = startX;
		transform.position.y = startY;
	}
}



function AddMoney(amount : int) {
	if (amount == 0){
		countMoney = "Coins: 0";
	}
	else {
		gui_money.text = "Coins: " + coinCount.ToString();
		if (coinCount >= coinGoal)
		{
			win = true;
			print("winnnn");
		}
	}
	print(coinCount);
}

function OnGUI ()
{
	var winPromptW:int = 400;
	var winPromptH:int = 400;
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	var halfPromptW:int = winPromptW/2;
	var halfPromptH:int = winPromptH/2;

	GUI.BeginGroup(Rect(halfScreenW-halfPromptW, halfScreenH-halfPromptH, winPromptW, winPromptH));
	//GUI.Box(Rect(0,0,winPromptW, winPromptH), "Click below to play.");
	var buttonW:int = 200;
	var buttonH:int = 80;

	if (win)
	{
		print("in gui");

		GUI.skin.button = style;


		if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), "You win! Click here to proceed to the next level :)"))
		{
			Application.LoadLevel("level2");
		}
	}

	GUI.EndGroup();

}
