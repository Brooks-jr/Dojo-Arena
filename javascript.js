$(document).ready(function () {

// beach button 
var imgURL;
   $('.arenaButton').hover(function () {
    imgURL = $(this).attr('id');
    $('#container').css('background', 'url(' + imgURL + '.jpg) no-repeat');
    $('#container').css('background-size', '100% 100%');
    });

  var clickimgURL;
   $('.arenaButton').click(function () {
    clickimgURL = $(this).attr('id');
    $('#container').css('background', 'url(' + clickimgURL + '.jpg) no-repeat');
    $('#container').css('background-size', '100% 670px');
    $("#selBoxArena").fadeOut("fast");
     $( "#selFighterBox" ).fadeIn( "slow" );
    });


    
     $('#characterSelectp1').change(function(){
         var src = $(this).find('option:selected').attr('value');
         $('img#charImagep1').attr('src',src);
         $( "#p1character img" ).show( "slow" );
         });

        
        
        
         $('#characterSelectp2').change(function(){
         var src = $(this).find('option:selected').attr('value');
         $('img#charImagep2').attr('src',src);
          $( "#p2character img" ).show( "slow" );
         });

});
            