#pragma strict
var coin1:Rigidbody;

function generatecoins () {

	var coinnumber: int;
	
	coinnumber = Random.Range (1, 2);
	
	Debug.Log(coinnumber);
	
	var xposition:float;
	
	xposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(xposition);
	
	xposition = transform.position.x + xposition;
	
	var yposition:float;
	
	yposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(yposition);
	
	yposition = transform.position.y + yposition;
	
	switch (coinnumber)
	{
		case 1:
			Instantiate(coin1, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
	}
}	

function Start () {
	InvokeRepeating("generatecoins",0,2.0);
}

function Update () {

	if (transform.position.x > 5.9){
		transform.position.x = 5.9;
	}
	if (transform.position.x < -5.9){
		transform.position.x = -5.9;
	}

}