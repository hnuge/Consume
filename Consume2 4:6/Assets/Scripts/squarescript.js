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
var coinCount : int;
var countMoney : String;
var enemyCoins: int = 0;
var gui_money:UI.Text;
public var coinGoal : int;
public var coinTotal : int;

var style : GUIStyle;
var style2 : GUIStyle;

var win : boolean;
var lose : boolean;
var level : int;
static var levArr:String[];
var scene:String;
var started:boolean;

//music vars
//var song:AudioClip;
//var aud:AudioSource;

var raysResults : RaycastHit2D;
var rayVector : Vector2;
private var myCollider2D : Collider2D;
var pos : Vector2;

var enemyObj : GameObject;
var enemyScript : enemy;
var collectObj : GameObject;
var collectScript : collector;

function Start () {
	started = false;
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


	coinCount = 0;
	coinCount = 0;
	print(LayerMask.LayerToName(8));

	myCollider2D = GetComponent.<Collider2D>();

	enemyScript = enemyObj.GetComponent(enemy); 
    collectScript = collectObj.GetComponent(collector); 
}

function Update () {
	/*-----------------------------------------
		Movement 
		Square moves exactly one length of itself
	-----------------------------------------*/
	var move : Vector3 = transform.position;
	rayVector.x = 1;
	rayVector.y = 0;
	pos.x = transform.position.x;
	pos.y = transform.position.y;
	raysResults = Physics2D.Raycast(pos, rayVector, 0.1, 8, -1, 1);
	if (raysResults.collider != null)
	{
		//print("yo");
		var distance = Mathf.Abs(raysResults.point.x - transform.position.x);
		print(distance);
	}


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

	if (coll.gameObject.tag == "wall")
	{
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
			win = true;
		}
		else if (coinTotal - enemyCoins < coinGoal)
		{
			lose = true;
		}
	}
}

function AddEnemyMoney(amount : int)
{
	enemyCoins++;
	if (coinTotal - enemyCoins < coinGoal)
		{
			lose = true;
		}
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

	GUI.skin.button = style;

	if (level ==0 && !started)
    {
        if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), "Use the arrow keys to collect all the coins.\n (Click to begin)"))
        {
            started = true;

        }
    }
    if (level == 1 && !started) //level 2 popup
    {
        enemyScript.paused = true;
        if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), "The red square is trying to chase you! If you get hit, you'll be sent back to base\n (Click to begin)"))
        {
            started = true;
            enemyScript.paused = false;
        }
    }

    if (level == 2 && !started) //level 2 popup
    {
        collectScript.paused = true;
        enemyScript.paused = true;
        if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), "The brown square wants your coins. Beware!\n (Click to begin)"))
        {
            started = true;
            collectScript.paused = false;
            enemyScript.paused = false;
        }
    }

    if (win)
	{
		output = "You win! Click here to proceed to the next level :D";

		GUI.skin.button = style;
        collectScript.paused = true;
        enemyScript.paused = true;

		var nextLev:String = levArr[level+1];
		if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), output))
		{
			SceneManager.LoadScene(nextLev);

		}

		GUI.skin.button = style2;
		if (GUI.Button(Rect(halfPromptW-(80/2), halfPromptH-(80/2)/3+120, 80, 80), ""))
		{
			SceneManager.LoadScene("title");

		}
	}

	if (lose)
	{
		enemyScript.paused = true;
		collectScript.paused = true;
		output = "You lose :( Click to try again.";

		GUI.skin.button = style;

		if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2), buttonW, buttonH), output))
		{
			SceneManager.LoadScene(scene);
		}
	}

	GUI.EndGroup();

}
