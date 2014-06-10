#pragma strict
var featherSpeed:int;

var moveLeft:boolean=false;
var moveRight:boolean=false;

function Start () {

var BirdAnimator:BirdController;

	BirdAnimator = GameObject.FindGameObjectWithTag("bird").GetComponent(BirdController);

	if (BirdAnimator.facingLeft == true)
	{
		moveLeft = true;
		moveRight = false;
	}
	if (BirdAnimator.facingRight == true)
	{
		moveLeft = false;
		moveRight = true;
	}

}

function Update () {
	//move the feather FORWARD
	
	if (moveLeft)
	{
	Debug.Log("left");	
	transform.Translate(Vector3.left * featherSpeed * Time.deltaTime);
	}
	
	if (moveRight)
	{
	Debug.Log("right");
	transform.Translate(Vector3.right * featherSpeed * Time.deltaTime);
	}
	
}

function OnTriggerEnter(other:Collider)
{
	if (other.gameObject.tag == "bee1")
	{
	//increase score in bird.
	BirdController.score++;
	
	Destroy(other.gameObject);
	Destroy (this.gameObject);
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}