
// Javascript jest fajny, niby nie ma typów, 
// ale możemy sobie go używać jak języka funkcyjnego

function map(items, f) {
	var result = [];
	for(var i in items){
		result[i] = f(items[i]);
	}
	return result;
}

function filter(items, f) {
	var j = 0;
	var result = [];
	for(var i in items){
		if (f(items[i]) == true){
			result[j++] = items[i];
		};
	}
	return result;	
}

function reduce(items, initial, f) {
	var result = initial;
	for (var i = 0; i < items.length; i++) {
		result = f(result, items[i]);
	}
	return result;
}


var timelog = [
	{
		"project" : 'idea',
		"time"  : 128
	},
	{
		"project" : "efigence",
		"time"  : 283
	},
	{
		"project" : "idea",
		"time"  : 338
	},
	{
		"project" : "idea",
		"time"  : 290
	},
	{
		"project" : "efigence",
		"time"  : 130
	}	
]


// wypisać elementy
//
function printtimelog(item) {
	console.log('log: ' + item.time + 'm @ ' + item.project);
}

console.log('Print: ');
map(timelog, printtimelog);
console.log('');


// wyfiltrować
//
var efi = filter(timelog, function(item){
	return item.project === "efigence";
});

console.log('Filter: ');
map(efi, printtimelog);
console.log('');


// lub nawet przekształcić w coś innego
//
var sum = reduce(timelog, {}, function(sum, item){
	if (sum[item.project] == undefined) {
		sum[item.project] = 0;
	}
	sum[item.project]+=item.time;
	return sum;
});

for(var i in sum){
	console.log(i + ' = ' + sum[i]+'m');
}

