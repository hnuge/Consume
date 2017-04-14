#pragma strict
//consume

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
	var buttonW:int = 100;
	var buttonH:int = 20;

	if (GUI.Button(Rect(halfPromptW-(buttonW/2), (halfPromptH-(buttonH/2))/.7, buttonW, buttonH), "Start Game"))
	{
		Application.LoadLevel("screen1");
	}
	GUI.EndGroup();
}