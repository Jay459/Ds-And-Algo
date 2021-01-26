const productSum = (array, multiplier = 1) =>{
    sum = 0;
    for(var i=0 ; i<array.length ; i++){
        if(Array.isArray(array[i])){
            sum = sum + productSum(array[i],multiplier + 1);
        }
        else
        {
            sum = sum + array[i]
        }
    }
    return sum * multiplier;
}

var arr = [5,2,[7,-1],3,[6,[-13,8],4]];
console.log(productSum(arr));