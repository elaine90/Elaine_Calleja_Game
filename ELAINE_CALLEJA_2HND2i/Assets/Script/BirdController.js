#pragma strict
//on the ground
private var grounded:boolean;
private var anim:Animator;

static var score:int;
static var lives:int;
static var coins:int;
static var apples:int;
static var water:int;
static var bee:int;

var facingLeft:boolean;
var facingRight:boolean;

var AudioClip;

function Start () {
	score = 0;
	
	facingLeft = true;
	facingRight = false;
	
	//get the animator component associated with the player
	anim = GetComponent(Animator);
	grounded = false;
	
	lives = 2;	
	
	coins = 0;
	
	apples = 0;
	
	water = 0;
	
	
	DontDestroyOnLoad(this.gameObject);
	
}

function OnTriggerEnter (egg:Collider) {

	if (egg.gameObject.tag == "red")
	{
		audio.Play();
		score = score + 1;
		//Debug.Log("red");
	}

	if (egg.gameObject.tag == "green")
	{
		audio.Play();
		score = score + 1;
		//Debug.Log("green");
	}

	if (egg.gameObject.tag == "blue")
	{
		audio.Play();
		score = score + 1;
		//Debug.Log("blue");
	}

	if (egg.gameObject.tag == "yellow")
	{
		audio.Play();
		score = score + 1;
		//Debug.Log("yellow");
	}
	
	if (egg.gameObject.tag == "purple")
	{
		audio.Play();
		score = score + 1;
		//Debug.Log("purple");
	}
	
	if (egg.gameObject.tag == "orange")
	{
		audio.Play();
		score = score + 1;
		//Debug.Log("orange");
	}
	
	if (egg.gameObject.tag == "fireball1")
	{
		Destroy(egg.gameObject);
		
		anim.SetTrigger("burn");
		yield WaitForSeconds(0.5);
		Application.LoadLevel(0);
	}
	
	if (egg.gameObject.tag == "coin1")
	{
		audio.Play();
		coins = coins + 1;
		//Debug.Log("coin1");
	}
	
	if (egg.gameObject.tag == "apple1")
	{
		audio.Play();
		apples = apples + 1;
		//Debug.Log("apple1");
	}
	
	if (egg.gameObject.tag == "water1")
	{
		audio.Play();
		water = water + 1;
		//Debug.Log("water1");
	}
	
	if (egg.gameObject.tag == "bee1")
	{
		anim.SetTrigger("attention");
		yield WaitForSeconds(0.5);
		lives = lives - 1;
		//Debug.Log("bee1");
	}
	
	if(egg.gameObject.tag != "feather1")
	{
	Destroy(egg.gameObject);
	}
	Debug.Log(score);

}

function OnGUI()
{
	GUI.Label(Rect(2,0,120,60), "Score: "+score);
	GUI.Label(Rect(2,20,120,60), "Lives: "+lives);
}

function FixedUpdate () {

	if(coins == 15){
		lives = lives + 1;
		coins = 0;
	}
	
	if(apples == 5){
		lives = lives + 1;
		apples = 0;
	}
	
	if(water == 8){
		lives = lives + 1;
		water = 0;
	}
	
	if(lives == 0){
	Application.LoadLevel(0);
	}
	
	if (score == 30)
	{
		Application.LoadLevel(2);
	}
	
	if (score == 50)
	{
		Application.LoadLevel(3);
	}
	
	//horizontal movement
	transform.Translate(Vector3.right * 10 * Time.deltaTime * Input.GetAxis("Horizontal"));
	
	if (transform.position.y > 4.4){
		transform.position.y = 4.4;
	}
	if (transform.position.y < -4.4){
		transform.position.y = -4.4;
	}
	
	if (transform.position.x > 5.9){
		transform.position.x = 5.9;
	}
	if (transform.position.x < -5.9){
		transform.position.x = -5.9;
	}
	
	transform.Translate(Vector3.up * 10 * Time.deltaTime * Input.GetAxis("Vertical"));
	
	anim.SetBool("left",false);
	anim.SetBool("right",false);
	
	//if I am moving left
	if (Input.GetAxis("Horizontal")<0)
	{
		facingLeft = true;
		facingRight = false;
		anim.SetBool("left",true);
	}
	//if I am moving right
	if(Input.GetAxis("Horizontal")>0)
	{
		facingRight = true;
		facingLeft = false;
		anim.SetBool("right",true);
	}
	
}
