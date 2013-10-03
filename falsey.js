var stuff = [0, 1, null, 'hi', undefined, [], NaN, 'whatever', '', false, 999]

var sideEffects = function(){
	var lessStuff = []
	for (var i = 0; i < stuff.length; i++){
		if (!!stuff[i] == true){
			lessStuff.push(stuff[i])
		}
	}
	stuff = lessStuff
}

var RaineLovesFunctionalProgramming = function(arr){
	var lessStuff = []
	for (var i = 0; i < arr.length; i++){
		if (!!arr[i] == true){
			lessStuff.push(arr[i])
		}
	}
	return lessStuff
}