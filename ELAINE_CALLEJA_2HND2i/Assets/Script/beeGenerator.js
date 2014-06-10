#pragma strict
var bee1:Rigidbody;

function generatebees () {

	var beenumber: int;
	
	beenumber = Random.Range (1, 2);
	
	Debug.Log(beenumber);
	
	var xposition:float;
	
	xposition = Random.Range(-5.0f,5.0f);
	
	Debug.Log(xposition);
	
	xposition = transform.position.x + xposition;
	
	switch (beenumber)
	{
		case 1:
			Instantiate(bee1, Vector3(xposition,5,0),Quaternion.identity);
			break;
	}
}	

function Start () {
	InvokeRepeating("generatebees",0,2.0);
}
