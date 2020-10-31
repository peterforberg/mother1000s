
        var step = -1;
        // BUTTON CODE
        function tutorial() {
        step += 1;
        if (step >= 0) {
          var a = document.getElementById("waterb");
            a.style.display = "block";
        }
        if (step >= 1){
        var b = document.getElementById("lightb");
            b.style.display = "block";
        }
        if (step >= 2){
        var c = document.getElementById("snipb");
            c.style.display = "block";
        }
        if (step >= 3){
        var d = document.getElementById("ignoreb");
            d.style.display = "block";
        }
        if (step >= 4){
        var e = document.getElementById("demo");
            e.style.display = "block";
        }
        if (step >= 5) {
        var g = document.getElementById("next");
            g.style.display = "none";
        }
        
        }
        function skip() {
          step += 6;
          var a = document.getElementById("waterb");
            a.style.display = "block";
          var b = document.getElementById("lightb");
            b.style.display = "block";
          var c = document.getElementById("snipb");
            c.style.display = "block";
          var d = document.getElementById("ignoreb");
            d.style.display = "block";
          var e = document.getElementById("demo");
            e.style.display = "block";
          var f = document.getElementById("skip");
            f.style.display = "none";
          var g = document.getElementById("next");
            g.style.display = "none";
        }
          
        
        function onWaterClick() {
            water += 1;
            step +=1;
            document.getElementById("water").innerHTML = water;
        }
            
        function onLightClick() {
            light += 1;
            step += 1;
            document.getElementById("light").innerHTML = light;
        }
            
        function onSnipClick() {
            snip += 1;
            step += 1;
            document.getElementById("snip").innerHTML = snip;
        }
            
        function onIgnoreClick() {
            ignore -= 1;
            step += 1;
            document.getElementById("ignore").innerHTML = ignore;
        }
        function onRandVarClick() {
          if (step >= 17) {
            tourism -= 3;
            document.getElementById("tourism").innerHTML = tourism;
            var y = document.getElementById("randvar1");
            y.style.display = "block";
          }
          if (step >= 14) {
            var min = -11; 
            var max = 13;  
            var random = Math.floor(Math.random() * (+max - +min)) + +min;
            rainy += random;
            document.getElementById("rainy").innerHTML = rainy;
            var v = document.getElementById("randvar2");
            v.style.display = "block";
          }
          if (step >= 22) {
            var min2 = -3; 
            var max2 = 5;  
            var random2 = Math.floor(Math.random() * (+max2 - +min2)) + +min2;
            social += random2;
            document.getElementById("social").innerHTML = social;
            var u = document.getElementById("randvar3");
            u.style.display = "block";
          }
          if (step >= 26) {
            var min3 = -5; 
            var max3 = 2;  
            var random3 = Math.floor(Math.random() * (+max3 - +min3)) + +min3;
            gov += random3;
            document.getElementById("gov").innerHTML = gov;
            var t = document.getElementById("randvar4");
            t.style.display = "block";
          }
          if (step >= 30) {
            var min4 = 2; 
            var max4 = 5;  
            var random4 = Math.floor(Math.random() * (+max4 - +min4)) + +min4;
            visas += random4;
            document.getElementById("visas").innerHTML = visas;
            var s = document.getElementById("randvar5");
            s.style.display = "block";
          }
        }
        
        function gameDisplay() {
          document.getElementById("display").src=images[step];
          document.getElementById("text").innerHTML=text[step];   
          var x = document.getElementById("secret");
          if (step == 15) {
          x.style.display = "block";
          } else {
          x.style.display = "none";
          }
          var w = document.getElementById("shop");
          if (step == 13) {
          w.style.display = "block";  
          } else {
          w.style.display = "none";  
          }
        }
        
        var images = ["https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559","https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559",
          "https://cdn.glitch.com/7c26f08c-bc92-478b-9286-5d0f30d14786%2Fplants.gif?v=1562878556559"]
          
        var text = ["The buttons on the left allow you to interact with the world around you. Right now the \"water\" button lets you give your plant water. Leave them alone for now.", "These buttons will affect your choe's stats, like \"warmth,\" which will increase when you press \"light.\" Remember: everything in moderation.", "Not all choices will always make sense. Sometimes, \"snip\" will not refer to the plant. Just trust that you have all of the options available to you and do your best!", "Everyone needs to work together on this, so collaborate to make the best decision for your choe. Think of yourselves as thousands of mothers. If no one chooses to take care of your choe, the plant will simply be ignored.", "One last thing: this timer above your choe signals the next time you can make a choice.", "OK! You're ready to go! Return to mother1000s.com and make your choice. But first, make sure you talk to the other gardeners out there. We're all in this together."]
      
        var colorw = text.indexOf("water");
       
