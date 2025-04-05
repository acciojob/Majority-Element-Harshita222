//your code here
function findval(arr){
	let elem  = arr[0];
	let count = 1
	for (let i = 1; i <arr.length;i++){

		if(arr[i] == elem){
			count++;
		}else{
			count--;
			if(count == 0){
				elem = arr[i];
				count = 1;
			}
		}
	}
	return elem;
}