/*********************
*USER INTERFACE LOGIC
*
**********************/



    //Creates Variables to Store pizzaObject attributes (flavour, Size, Crust) and their respective Prices

    var flavourSelect=[1];
    var sizeSelect=[1];
    var crustSelect=[1];
    var pizza;

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
   
  //pizzaObject constructor
    function pizzaObject(flavour,size,crust)
      {
          this.flavour=flavour;
          this.size=size;
          this.crust=crust;
          this.price=flavour[1]+size[1]+crust[1];
          
      }

      
      function comp(){
        alert("working pizzaObj Button")
        pizza = new pizzaObject(flavourSelect,sizeSelect,crustSelect);
        pricing();

      }

    //Method that displays user Selection  






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

    //User Selection Compilation Script

    $('button#object-button-1').click(function comp(){})


    var appendSec=document.getElementById("picked1");

    var selector=document.createElement("div");
    
    selector.appendChild()

    appendSec.appendChild(selector);

})

