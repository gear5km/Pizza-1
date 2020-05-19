/*********************
*USER INTERFACE LOGIC
*
**********************/



    //Creates Variables to Store pizzaObject attributes
    var flavourSelect;
    var sizeSelect;
    var crustSelect;
    var pizza;
    function flavour1(){
      flavourSelect="flavour1";
    }

    function size1(){
      sizeSelect="size1";
    }

    function crust1(){
      crustSelect="crust1";
    }
   
  //pizzaObject constructor
    function pizzaObject(flavour,size,crust)
      {
          this.flavour=flavour;
          this.size=size;
          this.crust=crust;
          this.price=[];
      }

      
      function comp(){
        alert("working pizzaObj Button")
        pizza = new pizzaObject("fla","siz","cru");

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
      alert(flavourSelect);
    })

    $('button#size-button-1').click(function(){
      size1();
      alert(sizeSelect);
    })

    $('button#crust-button-1').click(function(){
      crust1();
      alert(crustSelect);
    })

    $('button#object-button-1').click(function comp(){})


    



})







//var chosen=new pizzaObject(flavourSelect,sizeSelect,crustSelect);



  /****************
  *BUSINESS LOGIC
  *
  *****************/
  /*
  var pizzaPrice= function price(){
    flavour1.price=100;
    size1.price=100;
    crust1.price=100;

    var totalPrice=flavour1+size1+crust1;
    return totalPrice;
  }

  var totalPrice=pizzaPrice();
  alert(totalPrice);

*/
  
