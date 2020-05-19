/*********************
*USER INTERFACE LOGIC
*
**********************/



    //Creates Variables to Store pizzaObject attributes

    var flavourSelect=[1];
    var sizeSelect=[1];
    var crustSelect=[1];
    var pizza;

    function flavour1(){
      flavourSelect=["flavour1", 100];
    }

    function size1(){
      sizeSelect=["size1",100];
    }

    function crust1(){
      crustSelect=["crust1",100];
    }
   
  //pizzaObject constructor
    function pizzaObject(flavour,size,crust)
      {
          this.flavour=flavour;
          this.size=size;
          this.crust=crust;
          this.price=flavour[1];
      }

      
      function comp(){
        alert("working pizzaObj Button")
        pizza = new pizzaObject(flavourSelect,sizeSelect,crustSelect);
        pricing();

      }

      




$(document).ready(function(){

    

    //Assigns values to attributes upon user selection of buttons
    $("button#menu-button-1").click(function(){

      $(".pizza-object").slideDown();
    })
      
    $('button#flavour-button-1').click(function(){
      //YOU CANNOT CALL JQuery FUNCTIONS FROM OUTSIDE AND EXPECT A RETURN VALUE!
      //flavourSelect="flavour1";
      flavour1();
      //alert(flavourSelect);
    })

    $('button#size-button-1').click(function(){
      size1();
      //alert(sizeSelect);
    })

    $('button#crust-button-1').click(function(){
      crust1();
      //alert(crustSelect);
    })

    $('button#object-button-1').click(function comp(){})


    



})

