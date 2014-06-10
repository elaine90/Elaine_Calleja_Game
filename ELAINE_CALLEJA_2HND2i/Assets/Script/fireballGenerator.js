#pragma strict
var fireball1:Rigidbody;

function generatefireballs () {

	var xposition:float;
	
	xposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(xposition);
	
	xposition = transform.position.x + xposition;
	
	Instantiate(fireball1, Vector3(xposition,5,0),Quaternion.identity);
	
}	

function Start () {
	InvokeRepeating("generatefireballs",0,4.0);
}

function Update () {

	if (transform.position.x > 5.9){
		transform.position.x = 5.9;
	}
	if (transform.position.x < -5.9){
		transform.position.x = -5.9;
	}

}