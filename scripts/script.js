var module=(function(){
    var brands = [{brand : "extra",
                   price : 1.50},
               {brand : "trident",
               price : 1.00},
               {brand : "doubleMint",
               price : 1.50},
               {brand : "bubbleGum",
               price : 1.00}
              ];
    var cartTotal=0;
    var itemTotal=0;
    function addPrice(gum){
        for (var i=0; i<brands.length; i++) {
            if (gum==brands[i].brand){
                itemTotal+=brands[i].price;
                cartTotal++;
            }
        }
        document.getElementById("total").innerHTML=itemTotal;
        document.getElementById("items").innerHTML=cartTotal;
    }
    function clear(){
        cartTotal=0;
        itemTotal=0;
        document.getElementById("total").innerHTML=itemTotal;
        document.getElementById("items").innerHTML=cartTotal;
    }
    return {addPrice:addPrice, clear:clear};
    
})();

document.getElementById("extra").addEventListener("click", function() {
    module.addPrice("extra");
});
document.getElementById("doubleMint").addEventListener("click", function() {
    module.addPrice("doubleMint");
});
document.getElementById("trident").addEventListener("click", function() {
    module.addPrice("trident");
});
document.getElementById("bubbleGum").addEventListener("click", function() {
    module.addPrice("bubbleGum");
});
document.getElementById("clear").addEventListener("click", function() {
    module.clear()
});