const arr = [-4,-1,1,3,5,6,8,11];
const num = 13;

for(var i=1 ; i<arr.length ; i++){
    for(var j=0 ; j<i ; j++){
        if(arr[i]<=arr[j]){            //sorting the array
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j]=temp;
        }
    }
}

var arr1 = arr;

console.log(arr1);

var x = 0; 
var y = arr1.length-1;

while(x<=arr1.length-1 && y>=0){
    //console.log("hello");
    if(arr[x]+arr[y]>num){
        y--;
    }
    else if(arr[x]+arr[y]<num){                   // function
        x++;
    }
    else if(arr[x]+arr[y] == num){
        console.log(arr[x],arr[y]);
        break;
    }
    else{
        console.log("not found");
        break;
    }
}

