var arr = [2,2,2,1,3,4,5,6,7,8,2,3];
var num = 2;

const moveToEnd = (arr,num) => {
    var i=0;
    var j=arr.length-1;
    while(i<j){
       while(i<j && arr[j] === num){
           j--;
       }
       if(arr[i] == num){
           var temp = arr[i];
           arr[i] = arr[j];
           arr[j] = temp;
       }
       i++;
    }
    return arr;
}

console.log(moveToEnd(arr,num))