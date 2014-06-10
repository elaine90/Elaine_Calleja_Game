#pragma strict
var music:GameObject;

function Start () {
	var G : GameObject = GameObject.FindGameObjectWithTag("GameController");
	if(!G){
		Instantiate(music, Vector3.zero, Quaternion.identity);
	}
}
