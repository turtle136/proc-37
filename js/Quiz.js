class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here
    background("yellow");
    //write code to show a heading for showing the result of Quiz
    if(contestantCount === 2){
      fill("black");
    textSize(30);
    text("contestants here are the results",300,0);
  }
    //call getContestantInfo( ) here

    //write condition to check if contestantInfor is not undefined
    if(contestantCount !== undefined){
      fill("cyan");
      textSize(20);
      text("Note:contestants in green are correct unlike the red contestants!!",130,250);
    }
    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns===allContestants[plr].answer){
        fill("green");
      }else{
        fill("red");
        }
      textSize(15);
      text(allContestants[plr].name+": "+allContestants[plr].answer,120);
      }

  }





}
