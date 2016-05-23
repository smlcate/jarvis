window.onload = function() {
  $('#t1').css('margin-left','-10px')
  console.log('Loaded');
  $.ajax({
    url: 'http://api.wunderground.com/api/7c8eaaf84b5e5dd0/conditions/q/CO/Boulder.json',
    method: "GET",
    success: function(data) {
      console.log(data.currentObservation.temp_f);
    }
  });
  $(document).ready(function(){
    window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
    }(document, "script", "twitter-wjs"));
  });

  function setTime() {
    var date = new Date(),
        againToday = date.getDate(),
        date = new Date(),
        month = date.getMonth(),
        hour = date.getHours(),
        minutes = date.getMinutes();
        console.log(today,month,hour,minutes);
    $('#time').text(date);
  }
  setInterval(setTime, 1000);

  var date = new Date(),
      today = date.getDate(),
      monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
  var currentMonthsLength = monthLengths[today];
  var day_of_week_int = 5;
  var day_of_week = function(){
    if(today <= 7) {
      day_of_week_int = today;
    } else {
      day_of_week_int = today % 7;
    };
  }
  var buildCalendar = function() {
    if(today == 1) {
      var start_int = day_of_week_int -1;
    }
    for(i=0;i < start_int;i++) {
      $('#calendarDisplay').append('<div class="calendarCell" id="blankCell"</div>');
    }
    for(i=0; i < currentMonthsLength; i++) {
      var day = i + 1
      $('#calendarDisplay').append('<div class="calendarCell" id="cc'+ i + '">' + day + '</div>');
    }
    for(i=0; i < (35 - currentMonthsLength); i++) {
      $('#calendarDisplay').append('<div class="calendarCell" id="blankCell"</div>');
    }
  }();
  console.log(day_of_week_int);
  console.log(localStorage);

  $('#taskHeader input').hide();
  $('#taskHeader button').hide();

  $('#newTask').on('click',function(){
    $('#taskHeader input').show();
    $('#taskHeader button').show()
    $('#newTask').hide();
  })

  var tasks = {

  };

  $('#taskSubmit').on('click', function(){
    var taskTitle = $('#taskTitleInput').val(),
        taskDescription = $('#taskDescriptionInput').val();
    localStorage.setItem(taskTitle,taskDescription);
    console.log(localStorage);

    console.log(localStorage);
    $('#taskList').prepend(
      '<div id="taskCell">' +
        '<li>' + taskTitle + '</li>' +
      '</div>'
    )
    $('#taskHeader input').hide();
    $('#taskHeader button').hide()
    $('#newTask').show();
  })

  // var taskArray = Object.keys(localStorage);
  for(i=0;i<localStorage.length;i++) {
    var taskArray = Object.keys(localStorage);
    if(taskArray[i] == 'username' || taskArray[i] == 'twitter') {
      console.log('lol');
    } else {
      $('#taskList').append(
        '<div id="taskCell">' +
          '<li>' + taskArray[i] + '</li>' +
        '</div>'
      )
    }
  }
  $('#t1').on('click',function(e){
    $('.demo-card-square.mdl-card').css('background-color','#DCEDC8');
    $('#red').css('display','none');
    $('#green').css('display','none');
    $('#yellow').css('display','none');
    $('#blue').css('display','block');
    $('#t1').css('margin-left','-10px');
    $('#t2').css('margin-left','10px');
    $('#t3').css('margin-left','10px');
    $('#t4').css('margin-left','10px');
    return;

  })
  // $('#t2').on('click',function(e){
  //   $('.demo-card-square.mdl-card').css('background-color','#C5CAE9');
  //   $('#blue').css('display','none');
  //   $('#red').css('display','none');
  //   $('#yellow').css('display','none');
  //   $('#green').css('display','block');
  //   $('#t1').css('margin-left','10px');
  //   $('#t2').css('margin-left','-10px');
  //   $('#t3').css('margin-left','10px');
  //   $('#t4').css('margin-left','10px');
  //
  //   return;
  // })
  // $('#t3').on('click',function(e){
  //   $('.demo-card-square.mdl-card').css('background-color','#FFF9C4');
  //   $('#blue').css('display','none');
  //   $('#green').css('display','none');
  //   $('#yellow').css('display','none');
  //   $('#red').css('display','block');
  //   $('#t1').css('margin-left','10px');
  //   $('#t2').css('margin-left','10px');
  //   $('#t3').css('margin-left','-10px');
  //   $('#t4').css('margin-left','10px');
  //   return;
  // })
  $('#t4').on('click',function(e){
    $('.demo-card-square.mdl-card').css('background-color','#FFEBEE');
    $('#blue').css('display','none');
    $('#green').css('display','none');
    $('#red').css('display','none');
    $('#yellow').css('display','block');
    $('#t1').css('margin-left','10px');
    $('#t2').css('margin-left','10px');
    $('#t3').css('margin-left','10px');
    $('#t4').css('margin-left','-10px');
    return;
  })

  $('#bs-1').on('click',localStorage.clear());

  var power = false;
  $('#bs0').on('click',function(){
    if(!power) {
      $('.page-content').css('display','none');
      power = true;
    } else {
      $('.page-content').css('display','flex');
      power = false;
    }

  })

  // Blue button controller
  $('#bs1').on('click',function(e){
    $('#weatherBoard').css('display','none');
    $('#dayPlan').css('display','none');
    $('#dashboard').css('display','block');
  })
  $('#bs2').on('click',function(e){
    $('#dashboard').css('display','none');
    $('#dayPlan').css('display','none');
    $('#weatherBoard').css('display','flex');
  })
  $('#bs3').on('click',function(e){
    $('#dashboard').css('display','none');
    $('#weatherBoard').css('display','none');
    $('#dayPlan').css('display','flex');
  })
  // Green button controller
  $('#bs4').on('click',function(e){
    $('#weatherBoard').css('display','none');
    $('#dayPlan').css('display','none');
    $('#dashboard').css('display','block');
  })
  $('#bs5').on('click',function(e){
    $('#dashboard').css('display','none');
    $('#dayPlan').css('display','none');
    $('#weatherBoard').css('display','flex');
  })
  $('#bs6').on('click',function(e){
    $('#dashboard').css('display','none');
    $('#weatherBoard').css('display','none');
    $('#dayPlan').css('display','flex');
  })
  // Red button controller
  $('#bs7').on('click',function(e){
    $('#youtube').css('display','none');
    $('#dayPlan').css('display','none');
    $('#camera').css('display','none');
    $('#music').css('display','flex');
  })
  $('#bs8').on('click',function(e){
    $('#music').css('display','none');
    $('#photos').css('display','none');
    $('#camera').css('display','none');
    $('#youtube').css('display','flex');
  })
  $('#bs9').on('click',function(e){
    $('#music').css('display','none');
    $('#youtube').css('display','none');
    $('#camera').css('display','none');
    $('#photos').css('display','flex');
  })
  $('#bs10').on('click',function(e){
    $('#music').css('display','none');
    $('#youtube').css('display','none');
    $('#photos').css('display','none');
    $('#camera').css('display','flex');
  })
  // Yellow button controller
  $('#bs11').on('click',function(e){
    $('#calendar').css('display','block');
    $('#tasks').css('display','none');
    $('#planner').css('display','none');
    $('#checklist').css('display','none');
  })
  $('#bs12').on('click',function(e){
    $('#calendar').css('display','none');
    $('#tasks').css('display','block');
    $('#planner').css('display','none');
    $('#checklist').css('display','none');
  })
  $('#bs13').on('click',function(e){
    $('#calendar').css('display','none');
    $('#tasks').css('display','none');
    $('#planner').css('display','block');
    $('#checklist').css('display','none');
  })
  $('#bs14').on('click',function(e){
    $('#calendar').css('display','none');
    $('#tasks').css('display','none');
    $('#planner').css('display','none');
    $('#checklist').css('display','block');
  })
}
  $(document).ready(function(){
    if(!localStorage.username) {
      $('#setUp').css('display','flex');
      $('#blue').css('display','none');
      $('#yellow').css('display','none');
      $('#t1').attr('disabled','disabled');
      $('#t2').attr('disabled','disabled');
      $('#t4').attr('disabled','disabled');
    }
    $('#userSubmit').on('click',function(){
      localStorage.username = $('#nameInput').val();
      localStorage.twitter = $('#twitterHandle').val();
      $('#setUp').css('display','none');
      $('#blue').css('display','block');
      $('#t1').removeAttr('disabled');
      $('#t2').removeAttr('disabled');
      $('#t4').removeAttr('disabled');

      console.log(localStorage.username);
      console.log(localStorage.twitter);
    })
  })


  $('#systemOn').on('click', function(){
    if(system.active == false) {
      system.active = true;
    } else {
      system.active = false;
    }
    console.log(system.active);
  });
