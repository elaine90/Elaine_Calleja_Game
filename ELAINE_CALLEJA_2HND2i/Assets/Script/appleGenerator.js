#pragma strict
var apple1:Rigidbody;

function generateapples () {

	var applenumber: int;
	
	applenumber = Random.Range (1, 2);
	
	Debug.Log(applenumber);
	
	var xposition:float;
	
	xposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(xposition);
	
	xposition = transform.position.x + xposition;
	
	var yposition:float;
	
	yposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(yposition);
	
	yposition = transform.position.y + yposition;
	
	switch (applenumber)
	{
		case 1:
			Instantiate(apple1, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
	}
}	

function Start () {
	InvokeRepeating("generateapples",0,3.0);
}

function Update () {

	if (transform.position.x > 5.9){
		transform.position.x = 5.9;
	}
	if (transform.position.x < -5.9){
		transform.position.x = -5.9;
	}

}