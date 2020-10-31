/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

function tyClick() {
  document.getElementById("text").innerHTML="Thank you for participating. This is all we have for you now. Please don't forget about your choe.";
  document.getElementById("text2").innerHTML=" ";
}                    
function tutorial() {
  if(localStorage.getItem("firstTime")==null){
   alert("Hello!\nYou are going to be presented with 4 options (water, light, snip, & ignore). They may not always make sense, and they may not always seem to apply to the situation, but they are your options. Use them. Otherwise, you choe will be ignored.\nAlso, unique user clicks are recorded, so no spam. :)");
   localStorage.setItem("firstTime","done");
}

}     
        
       
