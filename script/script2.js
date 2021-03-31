 window.console = window.console || function(t) {};

   if (document.location.search.match(/type=embed/gi)) {
     window.parent.postMessage("resize", "*");
   }

   var hours =0;
   var mins =0;
   var seconds =0;
   var vid = document.getElementById("myVideo1");
 var vid2 = document.getElementById("myVideo2");
   var currentlPlayingTime;
   var statusElement = document.getElementById("status");
   var currentlyPlaying = 2;

   var src1 = "capacitor-stop.mp4";

   var src2 = "capacitor-run.mp4";

 var src3 = "coil-stop.mp4";

 var src4 = "coil-run.mp4";

   $('#start').click(function(){
         //startTimer();
         myFunction1();
   });

   $('#stop').click(function(){
       myFunction2();
         clearTimeout(timex);

   });

   $('#reset').click(function(){
         hours =0;      mins =0;      seconds =0;
     $('#hours','#mins').html('00:');
     $('#seconds').html('00');
   });

   function startTimer(){
     timex = setTimeout(function(){
         seconds++;
       if(seconds >59){seconds=0;mins++;
          if(mins>59) {
          mins=0;hours++;
            if(hours <10) {$("#hours").text('0'+hours+':')} else $("#hours").text(hours+':');
                          }

       if(mins<10){
         $("#mins").text('0'+mins+':');}
          else $("#mins").text(mins+':');
                      }
       if(seconds <10) {
         $("#seconds").text('0'+seconds);} else {
         $("#seconds").text(seconds);
         }


         startTimer();
     },1000);
   }


   function myFunction1() {

           $('#myVideo1').hide();
           $('#myVideo2').show();
           $('#mpc').show();
           currentlPlayingTime = vid2.currentTime;
           vid2.src = src4;
           vid2.load();
           vid2.addEventListener('loadedmetadata', function () {
               vid2.currentTime = currentlPlayingTime;
           }, false);

           var i = 0;
       $('#mpc table tbody tr[data-mpc_id='+i+']').show();
       var gl = $('#mpc table tbody tr[data-mpc_id='+i+'] .gl').text();

       var nacl = $('#mpc table tbody tr[data-mpc_id='+i+'] .nacl').text();
       $("#temperature1").css('height',gl+'%');
       $("#temperature1").attr('data-value',gl+'°C');

       $("#temperature2").css('height',nacl+'%');
       $("#temperature2").attr('data-value',nacl+'°C');
       i++;

           setInterval(function() {
               $('#mpc table tbody tr[data-mpc_id='+i+']').show();
               var gl = $('#mpc table tbody tr[data-mpc_id='+i+'] .gl').text();

               var nacl = $('#mpc table tbody tr[data-mpc_id='+i+'] .nacl').text();
               $("#temperature1").css('height',gl+'%');
               $("#temperature1").attr('data-value',gl+'°C');

               $("#temperature2").css('height',nacl+'%');
               $("#temperature2").attr('data-value',nacl+'°C');
               if(i<10)
               {
                   i++;
               }
               else{
                   myFunction2();
                   clearTimeout(t);
                   $('#stop').hide();
                   $('#start').show();
                   $('#round').hide();
                   $('#clear').show();
                   //also add last round when you click stop:
                   addRound();

               }

           }, 60000);


   }

   function myFunction2() {


           currentlPlayingTime = vid2.currentTime;
           vid2.src = src3;
           vid2.load();
           vid2.addEventListener('loadedmetadata', function () {
               vid2.currentTime = currentlPlayingTime;
           }, false);

   }








