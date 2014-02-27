test("clean.is.string('abc') test", function() {
	var target = "abc";
	ok(clean.is.string(target), "clean.is.string('abc') passed");
});

test("clean.is.string(String('abc'))", function() {
	var target = String('abc');
	ok(clean.is.string(target), "clean.is.string(String('abc')) passed");
});

test("clean.is.string(new String('abc'))", function() {
	var target = new String('abc');
	ok(clean.is.string(target), "clean.is.string(new String('abc')) passed");
});

