#pragma strict
import UnityEngine.SceneManagement;

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
var enemyCoins: int = 0;
var gui_money:UI.Text;
public var coinGoal : int;

var style : GUIStyle;

var win : boolean;
var lose : boolean;
var level : int;
static var levArr:String[];
var scene:String;

function Start () {
	//levArr = new List.<String>();
	levArr = ["level1","level2","level3","level4","level5","level6","level7"];

	currKey = "start";
	count = 0;
	cells = new GameObject[columns, rows];
	var i : float;
	var j : float;

	// you have to initialize win and lose in the Start function
	win = false;
	lose = false;
	//words = new List.<GameObject>();


	scene = SceneManager.GetActiveScene().name; //get current scene
	if (scene == "level1") {level=0;} //get index of current scene
	if (scene == "level2") {level=1;}
	if (scene == "level3") {level=2;}
	if (scene == "level4") {level=3;}
	if (scene == "level5") {level=4;}
	if (scene == "level6") {level=5;}
	if (scene == "level7") {level=6;}



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

function OnCollisionEnter2D(coll : Collision2D)
{
	if (coll.gameObject.tag == "enemy")
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
		coinCount++;
		gui_money.text = "Coins: " + coinCount.ToString();
		if (coinCount >= coinGoal)
		{
			print("poop");
			win = true;
		}
		else if (coinCount + enemyCoins == coinGoal)
		{
			lose = true;
		}
	}
}

function AddEnemyMoney(amount : int)
{
	enemyCoins++;
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
	var buttonW:int = 400;
	var buttonH:int = 160;
	var output : String;

	if (win)
	{
		output = "You win! Click here to proceed to the next level :D";

		GUI.skin.button = style;

		var nextLev:String = levArr[level+1];
		if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), output))
		{
			SceneManager.LoadScene(nextLev);
		}
	}

	if (lose)
	{
		output = "You lose :( Click to try again.";

		GUI.skin.button = style;

		if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), output))
		{
			SceneManager.LoadScene(scene);
		}
	}

	GUI.EndGroup();

}
