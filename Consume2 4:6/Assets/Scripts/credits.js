#pragma strict
//consume
import UnityEngine.SceneManagement;

var style:GUIStyle;

var style2:GUIStyle;

function Start () {
}

function OnGUI(){
	GUILayout.BeginArea (Rect(0,0,Screen.width, Screen.height));
	StartPrompt();

	GUILayout.EndArea();
}

function StartPrompt () {
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

	GUI.skin.button = style;


	if (GUI.Button(Rect(halfPromptW-(buttonW/2), halfPromptH-(buttonH/2)/3, buttonW, buttonH), ""))
	{
		SceneManager.LoadScene("level1");
	}

	GUI.skin.button = style2;
	if (GUI.Button(Rect((halfPromptW-(300/2)), halfPromptH-(buttonH/2)+110, 300, buttonH), ""))
	{
		SceneManager.LoadScene("title");
	}
	GUI.EndGroup();
}