#pragma strict

var pink:GUIStyle;
var blue:GUIStyle;
var green:GUIStyle;
var yellow:GUIStyle;
var purple:GUIStyle;

var sqColor:Color;

var colorObj : GameObject;
var colorScript : savecolor;


function Start () {
	colorScript = colorObj.GetComponent(savecolor); 

}

function Update () {
	
}

function OnGUI () {

	var winPromptW:int = Screen.width;
	var winPromptH:int = Screen.height;
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	var halfPromptW:int = winPromptW/2;
	var halfPromptH:int = winPromptH/2;

	GUI.BeginGroup(Rect(halfScreenW-halfPromptW, halfScreenH-halfPromptH, winPromptW, winPromptH));
	//GUI.Box(Rect(0,0,winPromptW, winPromptH), "Click below to play.");
	var buttonW:int = 50;
	var buttonH:int = 50;
	var output : String;

	GUI.skin.button = pink;

    if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2)+70, buttonW, buttonH), ""))
    {
    	savecolor.sqColor = new Color(.99607843f,.50196078f,.64313725f,1);
    	//sqColor = Color.red;
    	SceneManager.LoadScene("level1");
    }
    GUI.skin.button = blue;

    if (GUI.Button(Rect(halfPromptW-(buttonW/2)-60, halfPromptH-(buttonH/2)+70, buttonW, buttonH), ""))
    {
    	savecolor.sqColor = new Color(.43137255f,.8470588f,.91372549f,1);

    	SceneManager.LoadScene("level1");
    }
    GUI.skin.button = green;

    if (GUI.Button(Rect(halfPromptW-(buttonW/2)-120, halfPromptH-(buttonH/2)+70, buttonW, buttonH), ""))
    {
    	savecolor.sqColor = new Color(.56862745,1,.64705882f,1);
    	SceneManager.LoadScene("level1");
    }
    GUI.skin.button = yellow;

    if (GUI.Button(Rect(halfPromptW-(buttonW/2)+60, halfPromptH-(buttonH/2)+70, buttonW, buttonH), ""))
    {
    	savecolor.sqColor = new Color(1,1,.67058824f,1);
		SceneManager.LoadScene("level1");
    }
    GUI.skin.button = purple;

    if (GUI.Button(Rect(halfPromptW-(buttonW/2)+120, halfPromptH-(buttonH/2)+70, buttonW, buttonH), ""))
    {
    	savecolor.sqColor = new Color(.76078431,.56470588,.78431373f,1);
    	SceneManager.LoadScene("level1");
    }

    GUI.EndGroup();

}
