

// formating numbers to use units like k, M, G ...
export const formatNumber = (number: number): string => {

	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "G" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "P" },
		{ value: 1e18, symbol: "E" }
	  ];
	  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	  var item = lookup.slice().reverse().find(function(item) {
		return number >= item.value;
	  });
	  return item ? (number / item.value).toFixed(1).replace(rx, "$1") + item.symbol : "0";

	return ``
}

// check to see if search query length is great than 2
export const isValidSearchLength = (text: string): boolean => {

	if(text && text.length < 3) return false 


	return true 
}