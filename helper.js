

function showhelp(helptext){
            
            document.getElementById('help').innerHTML= helptext;
        }

function makeHelpCallback(helptext) {
          
            return function() {
                showhelp(helptext);
            };

}

function setupHelp(){

    var helpertext=[
        {'id':'username','help':'Your username'},
        {'id':'age','help':'Your age'},
        {'id':'city','help':'Your city'}
    ];
    
    for (var i = 0; i < helpertext.length; i++) {
    (function() {
       var item = helpertext[i];
       document.getElementById(item.id).onfocus = function() {
         makeHelpCallback(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
  }
}

setupHelp();


