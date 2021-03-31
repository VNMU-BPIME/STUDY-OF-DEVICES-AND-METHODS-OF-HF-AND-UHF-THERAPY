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
           $('#myVideo1').show();
           $('#epc').show();

           currentlPlayingTime = vid.currentTime;
           vid.src = src2;
           vid.load();
           vid.addEventListener('loadedmetadata', function () {
               vid.currentTime = currentlPlayingTime;
           }, false);
           var i = 0;
       $('#epc table tbody tr[data-epc_id='+i+']').show();
       var gl = $('#epc table tbody tr[data-epc_id='+i+'] .gl').text();

       var nacl = $('#epc table tbody tr[data-epc_id='+i+'] .nacl').text();
       $("#temperature1").css('height',gl+'%');
       $("#temperature1").attr('data-value',gl+'°C');

       $("#temperature2").css('height',nacl+'%');
       $("#temperature2").attr('data-value',nacl+'°C');
       i++;
           setInterval(function() {
               $('#epc table tbody tr[data-epc_id='+i+']').show();
                var gl = $('#epc table tbody tr[data-epc_id='+i+'] .gl').text();

                var nacl = $('#epc table tbody tr[data-epc_id='+i+'] .nacl').text();
                $("#temperature1").css('height',gl+'%');
               $("#temperature1").attr('data-value',gl+'°C');

               $("#temperature2").css('height',nacl+'%');
               $("#temperature2").attr('data-value',nacl+'°C');
               if(i<10)
               {
                   i++;
               }

           }, 60000);



   }

   function myFunction2() {


           currentlPlayingTime = vid.currentTime;
           vid.src = src1;
           vid.load();
           vid.addEventListener('loadedmetadata', function () {
               vid.currentTime = currentlPlayingTime;
           }, false);



   }








