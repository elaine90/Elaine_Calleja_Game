#pragma strict

//RED EGG
var red:Rigidbody;

//GREEN EGG
var green:Rigidbody;

//BLUE EGG
var blue:Rigidbody;

//YELLOW EGG
var yellow:Rigidbody;

//PURPLE EGG
var purple:Rigidbody;

//ORANGE EGG
var orange:Rigidbody;

function generateeggs () {

	//create a random number from 1 to 6
	var colornumber: int;
	
	colornumber = Random.Range (1, 7);
	
	Debug.Log(colornumber);
	
	//create a random number for the position 
	var xposition:float;
	
	xposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(xposition);
	
	xposition = transform.position.x + xposition;
	
	var yposition:float;
	
	yposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(yposition);
	
	yposition = transform.position.y + yposition;
	
	switch (colornumber)
	{
		case 1:
			Instantiate(red, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
		case 2:
			Instantiate(blue, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
		case 3:
			Instantiate(green, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
		case 4:
			Instantiate(yellow, Vector3(xposition,yposition,0),Quaternion.identity);
			break;	
		case 5:
			Instantiate(orange, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
		case 6:
			Instantiate(purple, Vector3(xposition,yposition,0),Quaternion.identity);
			break;
	}
	}	

function Start () {
	//run the generate egg method. First parameter is the startup delay, and the 
	//second parameter is how often it will run
	InvokeRepeating("generateeggs",0,1.0);
}

function Update () {
	
	if (transform.position.x > 5.9){
		transform.position.x = 5.9;
	}
	if (transform.position.x < -5.9){
		transform.position.x = -5.9;
	}

}