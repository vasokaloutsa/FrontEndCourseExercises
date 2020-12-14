const fibonacci = function(a) {
let farray=[1,1];
let length=a;
let result=0;
    a=parseInt(a);
    if (a>=0){
        for ( let i = 0; i <= length-1; i++){
            result =(farray[i]+farray[i+1]);
            farray.push(result);
        }
        return farray[a-1];
    }else{
        return "OOPS";
    }

}

module.exports = fibonacci
