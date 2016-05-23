window.onload = function() {
  // var pages = {
  //   // dashboard:  '<div class="button-span"><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs1" style="background-color:#BBDEFB"><i class="material-icons">dashboard</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs2" style="background-color:#2196F3"><i class="material-icons">wb_sunny</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs3" style="background-color:#0D47A1"><i class="material-icons">timeline</i></button></div><div class="dash"><img src="http://placekitten.com/600/600" alt=""></div><div class="info-display-dash"><h1>Monday, May 2, 2016</h1><h3>52F High: 56, Low: 41</h3></div>',
  //   // socialMedia:  '<div class="button-span"><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs1" style="background-color:#DCEDC8"><i class="material-icons">dashboard</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs2" style="background-color:#8BC34A"><i class="material-icons">wb_sunny</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs3" style="background-color:#33691E"><i class="material-icons">timeline</i></button></div><div class="dash"><img src="http://placekitten.com/600/600" alt=""></div><div class="info-display-dash"><h1>Monday, May 2, 2016</h1><h3>52F High: 56, Low: 41</h3></div>',
  //   // entertainmentHub: '<div class="button-span"><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="musicBtn " style="background-color:#EF9A9A"><i class="material-icons">library_music</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="movieBtn" style="background-color:#F44336"><i class="material-icons">movie</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs3" style="background-color:#D32F2F"><i class="material-icons">photo_library</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" id="bs3" style="background-color:#B71C1C"><i class="material-icons">camera</i></button></div>'
  // }
  console.log('Loaded');
  $.ajax({
  url: 'https://api.forecast.io/forecast/25ed601ec043da4bd3bde78dd30c9032/40.0179794,-105.2821007',
  method: "GET",
  success: function(data) {
    console.log(data);
  }
});


  $('#t1').on('click',function(e){
    $('.demo-card-square.mdl-card').css('background-color','#DCEDC8');
    $('#red').css('display','none');
    $('#green').css('display','none');
    $('#yellow').css('display','none');
    $('#blue').css('display','block');
    return;

  })
  $('#t2').on('click',function(e){
    $('.demo-card-square.mdl-card').css('background-color','#C5CAE9');
    $('#blue').css('display','none');
    $('#red').css('display','none');
    $('#yellow').css('display','none');
    $('#green').css('display','block');
    return;
  })
  $('#t3').on('click',function(e){
    $('.demo-card-square.mdl-card').css('background-color','#FFF9C4');
    $('#blue').css('display','none');
    $('#green').css('display','none');
    $('#yellow').css('display','none');
    $('#red').css('display','block');
    return;
  })
  $('#t4').on('click',function(e){
    $('.demo-card-square.mdl-card').css('background-color','#FFF9C4');
    $('#blue').css('display','none');
    $('#green').css('display','none');
    $('#red').css('display','none');
    $('#yellow').css('display','block');
    return;
  })


  $('#bs1').on('click',function(e){
    $('#weatherBoard').css('display','none');
    $('#dashboard').css('display','block');
  })
  $('#bs2').on('click',function(e){
    $('#dashboard').css('display','none');
    $('#weatherBoard').css('display','flex');
  })
}
  // I want to have these prompts show up when the user firsts enters the page, and blur the                  page behind the inputs
  // DISPLAY IS OFF > CSS
  // function setUp() {
  //   $('.setUp').prepend(
  //     '<label>What is your name?</label><input type="text" placeholder="Name" value="Sam" id="name"></input>'
  //   )
  //     user.name = $('#name').value;
  //     console.log(user);
  // }
  // if(!localStorage.name) {
  //   return setUp();
  // }

  // $('#systemOn').on('click', function(){
  //   if(system.active == false) {
  //     system.active = true;
  //   } else {
  //     system.active = false;
  //   }
  //   console.log(system.active);
  // });
