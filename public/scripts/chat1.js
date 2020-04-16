var botui = new BotUI('my-botui-app');

let query='/results?' //query for GET Method

$("#clicker").on('click' , ()=>{
  $("#my-botui-app").css("display" , "inline")
  $('#navbar').css("margin-bottom", '5vh')
  $('#cover').css("display" , "none")
  $('#chat-title').css("display" , "block")
  start()
})

let start = () => {
  botui.message.bot({
    delay: 1000,
    //photo: "img/icon.png",
    content: 'Hey there! I am your virtual assistant!'
  }).then(function(){
    botui.message.add({
      delay: 1500,
      content: 'Would you like some assistance today?'
  }).then(function(){
    return botui.action.button({
      delay: 1000,
      action:[
        {text: 'Yes please!', value: 'yes'},
        {text: 'No thanks! Just browsing',value: 'no'}
      ]
    }).then(function(res){
        if(res.value == 'yes'){
          askMood();
        }
        else if(res.value == 'no'){
          // printEnd();
          escape()
        }
      })
    })
  })
}

let askMood = () => {
  botui.message.add({
    delay: 1000,
    content: "How are you feeling?"
  }).then(function(){
    return botui.action.button({
      delay: 1000,
      action:[
        {text: 'Feeling Anxious', value: 'anxious'},
        {text: "Feeling Depressed", value: 'depressed'},
        {text: 'Not really sure',value: 'unknown'}
      ]
    }).then(function(res){
      if(res.value == 'anxious'){
        query=`${query}mood=anxious`;
        askTransportation();
      }
      else if(res.value == 'depressed'){
        query=`${query}mood=depressed`;
        askTransportation();
      }
      else if(res.value == 'unknown'){
        query=`${query}mood=other`;
        printEnd();
      }
    })
  })
}

let askTransportation = () => {
  botui.message.add({
    delay: 1000,
    content: "I'm sorry to hear that. I'll note that response."
  }).then(function(){
    botui.message.add({
      delay: 1000,
        content: "Will you be needing any help with transportation?"
    }).then(function(){
      return botui.action.button({
        delay: 1000,
        action:[
          {text: 'Yes, I need assitance', value: true},
          {text: 'No thanks',value: false}
        ]
      }).then(function(res){
        if(res.value === true){
          // query=`${query}&transportation=true`;
          query=`${query}&transportation=transportation`;
          botui.message.add({
            content: "Okay, noted!"
          }).then(
            askFood()
            )
        }
        else if(res.value === false){
          // query=`${query}&transportation=false`;
          //  not putting anything so it doesnt affect the query result
          askFood()
        }
      })
    })
  })
}

let askFood = () => {
  botui.message.add({
    delay: 1000,
    content: "Do you need any support with food?"
  }).then(function(){
    return botui.action.button({
      delay: 1000,
      action:[
        {text: 'Yea, assitance with food would be great', value: true},
        {text: "No need for food assistance", value: false}
      ]
    }).then(function(res){
      if(res.value == true){
        query=`${query}&food=food`;
        askHelp();
      }
      else if(res.value == false){
        // query=`${query}&food=false`;
        //  not putting anything so it doesnt affect the query result
        askHelp();
      }
    })
  })
}

let askHelp = () => {
  botui.message.add({
    delay: 1000,
    content: "Are you having issues accessing any direct help to address your needs?"
  }).then(function(){
    return botui.action.button({
      delay: 1000,
      action:[
        {text: 'Yes, I need help finding direct help for me', value: true},
        {text: "Do not need help finding direct help", value: false}
      ]
    }).then(function(res){
      if(res.value == true){
        query=`${query}&help=help`;
        askHousing();
      }
      else if(res.value == false){
        // query=`${query}&help=false`;
        //  not putting anything so it doesnt affect the query result
        askHousing();
      }
    })
  })
}


let askHousing = () => {
  botui.message.add({
    delay: 1000,
    content: "How is your housing situation?"
  }).then(function(){
    return botui.action.button({
      delay: 1000,
      action:[
        {text: 'Would like some assitance with my housing situation', value: true},
        {text: "No thank you", value: false}
      ]
    }).then(function(res){
      if(res.value == true){
        query=`${query}&housing=housing`;
        printEnd();
      }
      else if(res.value == false){
        // query=`${query}&housing=false`;
        //  not putting anything so it doesnt affect the query result
        printEnd();
      }
    })
  })
}

function printEnd(){
  botui.message.add({
    delay: 1000,
    content: "It was nice chatting with you!"
  }).then(function(){
    botui.message.add({
      delay: 1500,
      content: "Have a great day. Bye!"
    })
  })
  redirect()
}

let redirect = () => {
   window.location.href = query;
   //THIS PASSES THE VARIABLE AS A GET REQUEST, CAN CHANGE IT
   //CAN BE MADE INTO A VARIABLE AND PASSED TO SERVER
   //https://stackoverflow.com/questions/13250766/javascript-sending-custom-parameters-with-window-open-but-its-not-working
}






let escape = () => {
   window.location.href ='/';
}
