var bitDocs = require("bit-docs");
var path = require("path");

bitDocs(
	path.join(__dirname, "package.json"),
	{
		debug: true,
		readme: {
			apis: [
				"can-view-parser",
				{"can-view-parser.ParseHandler": [
					"can-view-parser.ParseHandler.start",
					"can-view-parser.ParseHandler.end",
					"can-view-parser.ParseHandler.close",
					"can-view-parser.ParserHandler.attrStart",
					"can-view-parser.ParserHandler.attrEnd",
					"can-view-parser.ParserHandler.attrValue",
					"can-view-parser.ParserHandler.chars",
					"can-view-parser.ParserHandler.comment",
					"can-view-parser.ParserHandler.done"
				]}
			]
		}
	}
).catch(function(e){
	setTimeout(function(){
		throw e;
	}, 1);
});
