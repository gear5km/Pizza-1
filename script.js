/*********************
*USER INTERFACE LOGIC
*
**********************/



    //Creates Variables to Store pizzaObject attributes (flavour, Size, Crust) and their respective Prices

    var flavourSelect=[1];
    var sizeSelect=[1];
    var crustSelect=[1];
    var pizza;

    //Functions that Assign flavours, sizes and toppings to the variables above based on User Selection

    function flavour1(){
      flavourSelect=["flavour1", 100];
    }

    function flavour2(){
      flavourSelect=["flavour2", 200];
    }

    function flavour3(){
      flavourSelect=["flavour3", 300];
    }

    function size1(){
      sizeSelect=["size1",100];
    }

    function size2(){
      sizeSelect=["size2",200];
    }

    function size3(){
      sizeSelect=["size3",300];
    }

    function crust1(){
      crustSelect=["crust1",100];
    }

    function crust2(){
      crustSelect=["crust2",200];
    }

    function crust3(){
      crustSelect=["crust3",300];
    }
   
  //pizzaObject constructor, used to pass user selection to pizzaobject
    function pizzaObject(flavour,size,crust)
      {
          this.flavour=flavour;
          this.size=size;
          this.crust=crust;
          this.price=flavour[1]+size[1]+crust[1];
          
      }

    //Compiles user selection into single pizza object  
      function comp(){
        var name=document.getElementById("nameInput").value;
        pizza = new pizzaObject(flavourSelect,sizeSelect,crustSelect);



        alert("Price Total is KES  "+ pizza.price);

        prompt(name, "Please Enter Delivery Address",)
        //pricing();

      }

    //Method that displays user Selection  


    function pizzaOptions(){

      var appendSec=document.getElementById("selection1");
      let appendor=document.createTextNode(flavourSelect[0])
      let appendor2=document.createTextNode(sizeSelect[0])
      let appendor3=document.createTextNode(crustSelect[0])

      let appendor4=document.createElement('div')
      appendor4.setAttribute("id", "appended");
      //appendor.setAttribute("See:", flavourSelect)

      appendSec.appendChild(appendor4);

      appendor4.appendChild(appendor)
      appendor4.appendChild(document.createElement("br"));
      appendor4.appendChild(appendor2)
      appendor4.appendChild(document.createElement("br"));
      appendor4.appendChild(appendor3)

      //appendSec.appendChild(appendor);
      //appendSec.appendChild(appendor2)
     // appendSec.appendChild(appendor3)

     var appendPrice=document.getElementById("selection2");
     let priceAppend=document.createTextNode(flavourSelect[1])
     let priceAppend2=document.createTextNode(sizeSelect[1])
     let priceAppend3=document.createTextNode(crustSelect[1])

     let priceAppend4=document.createElement('div')
     priceAppend4.setAttribute("id","priceAppened")
     
     appendPrice.appendChild(priceAppend4)

     priceAppend4.appendChild(priceAppend)
     priceAppend4.appendChild(document.createElement("br"));
     priceAppend4.appendChild(priceAppend2)
     priceAppend4.appendChild(document.createElement("br"));
     priceAppend4.appendChild(priceAppend3)
     priceAppend4.appendChild(document.createElement("br"));

      var delivery=document.getElementById("delivery").value;
        if (delivery==true){
          alert("TB delivered");
        }

      }
  
      


//JQuery Animations and Button function assigns

$(document).ready(function(){

    

    //Assigns values to attributes upon user selection of buttons
    $("button#menu-button-1").click(function(){

      $(".pizza-object").slideDown();
    })

    //Flavour Button Scripts
      
    $('button#flavour-button-1').click(function(){
      //YOU CANNOT CALL JQuery FUNCTIONS FROM OUTSIDE AND EXPECT A RETURN VALUE!
      flavour1();
      $("#p1image").css("border", "solid red 10px");
    })

    $('button#flavour-button-2').click(function(){
      //YOU CANNOT CALL JQuery FUNCTIONS FROM OUTSIDE AND EXPECT A RETURN VALUE!
      flavour2();
    })

    $('button#flavour-button-3').click(function(){
      //YOU CANNOT CALL JQuery FUNCTIONS FROM OUTSIDE AND EXPECT A RETURN VALUE!
      flavour3();
    })

    //Size Button Scripts

    $('button#size-button-1').click(function(){
      size1();
    })

    
    $('button#size-button-2').click(function(){
      size2();
    })

    
    $('button#size-button-3').click(function(){
      size3();
    })

    //Crust Button Scripts

    $('button#crust-button-1').click(function(){
      crust1();
    })

    $('button#crust-button-2').click(function(){
      crust2();
    })

    $('button#crust-button-3').click(function(){
      crust3();
    })

    $('button#optionsSelect').click(function(){
        pizzaOptions ()
    })

    //User Selection Compilation Script

    $('button#object-button-1').click(function comp(){})



   // var selector=document.createElement("div");

   // let appendor=document.createTextNode("TESTING!")
    
    //selector.appendChild(appendor)

    //.appendChild(selector);

})

