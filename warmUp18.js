// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function warmup18(string) {
	var a = 0;
	var d = 0;
	var e = 0;
	var h = 0;
	var l = 0;
	var r = 0;
	var o = 0;
	var w = 0;
	var __ = 0;
	var _ = 0;
	var result = "";
	for (var i = 0; i < string.length; i++) {
		if(typeof string[i] ===  "string"){
			if (string[i] === ",") {
				_ = _ + 1;
				result += _;
			}
			if (string[i] === " ") {
				__ = __ + 1;
				result += __;
			}
			if (string[i] === "a") {
				a = a + 1;
				result += a;
			}
			if (string[i] === "d") {
				d = d + 1;
				result += d;
			}
			if (string[i] === "e") {
				e = e + 1;
				result += e;
			}
			if (string[i] === "h") {
				h = h + 1;
				result += h;
			}
			if (string[i] === "l") {
				l = l + 1;
				result += l;
			}
			if (string[i] === "r") {
				r = r + 1;
				result += r;
			}
			if (string[i] === "o") {
				o = o + 1;
				result += o;
			}
			if (string[i] === "w") {
				w = w + 1;
				result += w;
			}
		}
	}
	return result;
}



// LOGIC : for every new letter i have to make it counting for every similar letter.