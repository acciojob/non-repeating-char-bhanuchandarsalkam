function firstNonRepeatedChar(str) {
 // Write your code here
	var count=0;
	for(let i=0;i<=str.length;i++){
		if(str[i]==str[i+1]){
			count++;
		}
		if(count==0){
			console.log(str[i]);
			return;
		}
	}
return null;
	
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
