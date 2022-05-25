
function stockmax(prices) {
    // Declare variable to store cost and sell amounts.
    var cost=0;
    var sell=0;
    var share=0;    //The shares we have at the moment.
    
    //loop everyday
    todayLoop: for(var i=0; i<prices.length; i++){
        var priceToday = prices[i];     //get the price as of today
        
        //should we buy? Check if there is any price ahead higher than the price of today.
        for(var j=i+1; j<prices.length; j++){
            if(prices[j]>=priceToday){
                //Buy it!
                cost +=priceToday;
                share++;
                
                //break current for loop and skip the rest in the today loop.
                continue todayLoop;
            }
        }
        
        //sell all as no higher price ahead found.
        sell += share*priceToday;
        share = 0;
    }
    
    //Minus the cost first before return.
    return sell-cost;
}
