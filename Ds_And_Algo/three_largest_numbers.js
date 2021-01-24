var arr = [141,1,17,-7,-17,-27,18,541,8,7,7];
var lar_arr = [];

for(var i = 1 ; i <= arr.length-1 ; i++){
    for(j = 0 ; j < i ; j++){
        if(arr[i] <= arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log(arr);

for(i = arr.length-3 ; i <= arr.length-1 ; i++){
    lar_arr.push(arr[i]);
}

console.log(lar_arr);