/* size prices 
/*let smallPizza = 500;
let mediumPizza = 600;
let largePizza = 700;
let xlargePizza = 800;
crusts prices 
let crispyCrust = document.getElementById("crispyCrust").value;
let stuffedCrust = document.getElementById("stuffedCrust").value;
let gfreeCrust = document.getElementById("gFreeCrust").value;
/* toppings prices 
let cheddar = document.getElementById("cheddar").value;
let mushroom = document.getElementById("mushroom").value;
let pineapple = document.getElementById("pineapple").value;
let veggies = document.getElementById("veggies").value;
let rainbow = document.getElementById("rainbow").value; */

var price, crustprice, toppingprice ;
let total = 0;
function pizza(flavour,size,crust,topping,total){
    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total
}



$(document).ready(function(){
    $("button.submit").click(function(event){
        let pflavour = $("#flavour option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name='toppings']:checked"), function(){            
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));
     
        switch(psize){
         case "0":
           price =0;
         break;
         case "small":
            price = 500;
            console.log(price);
          break;
          case "medium":
            price = 600;
            console.log(price);
          break;
          case "large":
            price = 700;
            console.log(price);
         break;
         case "extra large":
            price = 800;
            console.log(price)
          default:
            console.log("error"); 
        }
        switch(pcrust){
           case "0":
             crust_price = 0;
           break;
           case "Crispy":
             crust_price = 200;
           break;
           case "Stuffed":
             crust_price = 250;
           break;
           case "Gluten-free":
             crust_price = 180;
           break;
           default:
             console.log("No price"); 
         }
         let topping_value = ptopping.length*100;
         console.log("topping value" + topping_value);
     
         if((psize == "0") && (pcrust == "0")){
           console.log("nothing selected");
           $("button.submit").show();
           $("div.selection").hide();
           alert("Please select pizza size and crust"); 
         }
         else{
           $("button.submit").hide();
           $("div.selection").slideDown(1000);
         }
     
         total = price + crust_price + topping_value;
         console.log(total);
         let checkoutTotal =0;
         checkoutTotal = checkoutTotal + total;
     
         $("#pizzaFlavour").html($("#flavour option:selected").val());
         $("#pizzaSize").html( $("#size option:selected").val());
         $("#pizzaCrust").html($("#crust option:selected").val());
         $("#pizzaTopping").html(ptopping.join(", "));
         $("#totals").html(total);
         
     // Add pizza button
         $("button.addPizza").click(function(){
           let pflavour = $("#flavour option:selected").val();
           let psize = $("#size option:selected").val();
           let pcrust = $("#crust option:selected").val();
           let ptopping = [];
           $.each($("input[name='toppings']:checked"), function(){            
               ptopping.push($(this).val());
           });
           console.log(ptopping.join(", "));
           switch(psize){
             case "0":
               price =0;
             break;
             case "small":
                price = 500;
                console.log(price);
              break;
              case "medium":
                price = 600;
                console.log(price);
              break;
              case "large":
                price = 700;
                console.log(price);
              break;
              case "extra large":
                price = 800;
                console.log(price)  
              default:
                console.log("error"); 
            }
            switch(pcrust){
               case "0":
                 crust_price = 0;
               break;
               case "Crispy":
                 crust_price = 200;
               break;
               case "Stuffed":
                 crust_price = 150;
               break;
               case "Gluten-free":
                 crust_price = 180;
               break;
               default:
                 console.log("No price"); 
             }
             let topping_value = ptopping.length*100;
             console.log("topping value" + topping_value);
             total = price + crust_price + topping_value;
             console.log(total);
     
             checkoutTotal = checkoutTotal + total;
             console.log(checkoutTotal);
           // constractor function
           var newOrder = new Getpizza(pflavour, psize, pcrust,ptopping,total);
     
           $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.flavour +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
           console.log(newOrder);
           
           
     
         });
         // Checkout button
         $("button#checkout").click(function(){ 
           $("button#checkout").hide();
           $("button.addPizza").hide();
           $("button.deliver").slideDown(1000);
           $("#addedprice").slideDown(1000);
           console.log("Your total bills is sh. "+checkoutTotal);
           $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
         });
     
         // home delivery button
         $("button.deliver").click(function(){
           $(".pizzatable").hide();
           $(".choise h2").hide();
           $(".delivery").slideDown(1000);
           $("#addedprice").hide();
           $("button.deliver").hide();
           $("#pizzatotal").hide();
           let deliceryamount= checkoutTotal+150;
           console.log("You will pay sh. "+deliceryamount+" on delivery");
           $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
         });
     
         // when one clicks place order button
         $("button#final-order").click(function(event){
           event.preventDefault();
     
           $("#pizzatotal").hide();
           $(".delivery").hide();
           $("button#final-order").hide();
           let deliveryamount= checkoutTotal+150;
           console.log("Final Bill is: "+deliveryamount);
           let person = $("input#name").val();
           let phone = $("input#phone").val();
           let location = $("input#location").val();
     
           if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
       
             $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
             $("#totalbill").hide();
             $("#finallmessage").slideDown(1200);
           }
           else {
             alert("Please fill in the details for delivery!");
             $(".delivery").show();
             $("button#final-order").show();
           }
        });
        event.preventDefault();
    });
});