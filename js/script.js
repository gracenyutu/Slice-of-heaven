/* size prices */
let smallPizza = 500;
let mediumPizza = 600;
let largePizza = 700;
let xlargePizza = 800;
/* crusts prices */
let crispyCrust = document.getElementById("crispyCrust").value;
let stuffedCrust = document.getElementById("stuffedCrust").value;
let gfreeCrust = document.getElementById("gFreeCrust").value;
/* toppings prices */
let cheddar = document.getElementById("cheddar").value;
let mushroom = document.getElementById("mushroom").value;
let pineapple = document.getElementById("pineapple").value;
let veggies = document.getElementById("veggies").value;
let rainbow = document.getElementById("rainbow").value;


$(document).ready(function(){
    $("#crusts button").on("change", function(){
        alert($("button[name=radioName]:checked", "#crusts").val());
    });
});