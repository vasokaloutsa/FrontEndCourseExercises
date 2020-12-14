function add (a,b) {
	return a+b;
	
}

function subtract (a,b) {
	return a-b;
}

function sum (array) {
	let length=array.length;
	let result=0;
    if (length==0){
	  return result;
	}else{
	  for (let i=0; i<=array.length-1;i++){
			result +=array[i];
		}
	  return result;
	}
		

}

function multiply (array) {
	let length=array.length;
	let result=1;
	for (let i=0; i<=length-1;i++){
		result =result*array[i];
	}
	return result;
}

function power(a,b) {
	return a**b;
}

function factorial(a) {
	let factor=1;
	for (let i=1;i<=a;i++){
		factor=i*factor;
	}
	return factor;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}