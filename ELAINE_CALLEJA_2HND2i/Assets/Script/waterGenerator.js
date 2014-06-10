#pragma strict
var water1:Rigidbody;

function generatewater () {
	
	var xposition:float;
	var yposition:float;
	
	xposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(xposition);
	
	xposition = transform.position.x + xposition;
	
	yposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(yposition);
	
	yposition = transform.position.y + yposition;

	Instantiate(water1, Vector3(xposition,yposition,0),Quaternion.identity);
	
}	

function Start () {
	InvokeRepeating("generatewater",0,6.0);
	
}

function Update () {

	if (transform.position.x > 5.9){
		transform.position.x = 5.9;
	}
	if (transform.position.x < -5.9){
		transform.position.x = -5.9;
	}

}