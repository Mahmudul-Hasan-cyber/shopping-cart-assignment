function getQuantity(id){
    var qty= document.getElementById(id).value;
    var quantity= parseFloat(qty);
    return quantity;
    };
   
    function priceCalculation(price,quantity, id){
    var totalPrice= quantity*price;
    document.getElementById(id).innerText=totalPrice;
    } 
   
    function getValue(id){
    var valueText= document.getElementById(id).innerText;
    var value= parseFloat(valueText);
    return value; 
    }
   
    function subTotalCalculation(){
    var phonePrice= getValue("iphone-price");
    var coverPrice= getValue("cover-price");
    var subtotal=coverPrice+phonePrice;
    var tax= document.getElementById("tax").innerText;
    var taxAmount= parseFloat(tax); 
   
    document.getElementById("subtotal").innerText=subtotal;
    document.getElementById("grand-total").innerText=subtotal+taxAmount; 
    }
   
    // Plus Button
    var plusBtn= document.getElementById("plus-button");
    plusBtn.addEventListener("click",function(){ 
    var quantity= getQuantity("iphone-qty");
    document.getElementById("iphone-qty").value=quantity+1; //Input field increment by 1
    quantity++; 
    priceCalculation(1219, quantity,"iphone-price") ;
   
    subTotalCalculation(); 
    });
    
   
    //Minus button
    var minusBtn= document.getElementById("minus-button");
    minusBtn.addEventListener("click",function(){
    var quantity= getQuantity("iphone-qty");
    document.getElementById("iphone-qty").value=quantity-1; 
    quantity--;
    priceCalculation(1219,quantity,"iphone-price"); 
   
    subTotalCalculation();
    });
   
   
   
    //iPhone 11 Silicone Case Cover Plus button
    var plusBtnCover= document.getElementById("plus-btn-cover");
    plusBtnCover.addEventListener("click", function(){
    var quantity= getQuantity("cover-quantity");
    document.getElementById("cover-quantity").value=quantity+1;
    quantity++;
    priceCalculation(59,quantity,"cover-price");
    
    subTotalCalculation();
    });
   
   
    //iPhone 11 Silicone Case Cover Minus button
    var minusBtnCover= document.getElementById("minus-btn-cover");
    minusBtnCover.addEventListener("click", function(){
    var quantity= getQuantity("cover-quantity");
    document.getElementById("cover-quantity").value=quantity-1;
    quantity--;
    priceCalculation(59,quantity,"cover-price");
    
    subTotalCalculation();
    });
   
   
   // Remove Item
   //var removeBtn= document.getElementsByClassName("remove-item");
   //console.log(removeBtn);
   var removeBtn1= document.getElementById("remove-btn-1");
   var cart1= document.getElementById("cart-1");
   removeBtn1.addEventListener("click", function(){
    cart1.style.display='none';
   })
   
   var removeBtn2= document.getElementById("remove-btn-2");
   var cart2= document.getElementById("cart-2");
   removeBtn2.addEventListener("click", function(){
    cart2.style.display='none';
   }) 
   
   const checkOutBtn = document.getElementById("check-out");
   checkOutBtn.addEventListener("click", function(){
    const mainPage = document.getElementById("main-page");
    mainPage.style.display = "none"

    const customerDetails = document.getElementById("customer-details")
    customerDetails.style.display = "block"
   })
      const submitBtn = document.getElementById("submit");
   submitBtn.addEventListener("click", function(){
    const customerDetailsPage =  document.getElementById("customer-details")
        customerDetailsPage.style.display = "none"

        const thankYou= document.getElementById("thank-you")
    thankYou.style.display = "block"
  })


