#pragma strict

var feather1:Rigidbody;

function Start () {

}

function Update () {

if (Input.GetKeyDown (KeyCode.Space))
{
Instantiate(feather1,transform.position,Quaternion.identity);
}

}