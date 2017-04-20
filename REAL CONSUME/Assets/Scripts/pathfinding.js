 var target : Transform; //the enemy's target
 var moveSpeed = 2; //move speed
 var myTransform : Transform; //current transform data of this enemy
  
 function Awake()
 {
     myTransform = transform; //cache transform data for easy access/preformance
 }
  
 function Start()
 {
      target = GameObject.FindWithTag("Player").transform; //target the player
  
 }
  
 function Update () {


     var distance = Vector3.Distance(myTransform.position, target.position);
    // myTransform.LookAt(target);
     var step = moveSpeed *Time.deltaTime;
     myTransform.position = Vector3.MoveTowards(myTransform.position, target.position, step);
     //print(transform.position);

}