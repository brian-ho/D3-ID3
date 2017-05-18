[
	"<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset=\"utf-8\">\n  <title>Pie Chart D3 v4</title>\n  <script src=\"https://d3js.org/d3.v4.min.js\"></script>\n</head>\n\n<body>\n  <div id=\"graphContainer\" style=\"background: white; height: 40vh;\"></div>\n  <script>\n    var data = [10, 20, 30, 20];\n    var width = 576;\n    var height = 320;\n    var color = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".scaleOrdinal",
		"name": "",
		"type": "text",
		"value": "d3.schemeCategory10",
		"args": [
			"d3.schemeCategory10"
		]
	},
	{
		"methodObject": "d3",
		"methodEnd": true
	},
	"\n    var graphContainer = document.getElementById('graphContainer');\n    var svgContainer = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".select",
		"name": "",
		"type": "text",
		"value": "\"#graphContainer\"",
		"args": [
			"\"#graphContainer\""
		]
	},
	"\n      ",
	{
		"methodObject": "d3.select(\"#graphContainer\")",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"svg\"",
		"args": [
			"\"svg\""
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(\"#graphContainer\").append(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"width\"",
		"type": "text",
		"value": " width",
		"args": [
			"\"width\"",
			" width"
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(\"#graphContainer\").append(\"svg\")",
		"d3MethodName": ".attr",
		"name": "\"height\"",
		"type": "text",
		"value": " height",
		"args": [
			"\"height\"",
			" height"
		]
	},
	"\n        ",
	{
		"methodObject": "d3.select(\"#graphContainer\").append(\"svg\")",
		"d3MethodName": ".style",
		"name": "\"border\"",
		"type": "text",
		"value": " \"3px solid #736084\"",
		"args": [
			"\"border\"",
			" \"3px solid #736084\""
		]
	},
	{
		"methodObject": "d3.select(\"#graphContainer\").append(\"svg\")",
		"methodEnd": true
	},
	"\n    var arc = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".arc",
		"name": "",
		"type": "hidden",
		"value": "",
		"args": [
			""
		]
	},
	"\n      ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".outerRadius",
		"name": "",
		"type": "text",
		"value": "100",
		"args": [
			"100"
		]
	},
	"\n      ",
	{
		"methodObject": "d3.arc()",
		"d3MethodName": ".innerRadius",
		"name": "",
		"type": "text",
		"value": "50",
		"args": [
			"50"
		]
	},
	{
		"methodObject": "d3.arc()",
		"methodEnd": true
	},
	"\n    var group = svgContainer",
	{
		"methodObject": "svgContainer",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"g\"",
		"args": [
			"\"g\""
		]
	},
	"\n      ",
	{
		"methodObject": "svgContainer.append(\"g\")",
		"d3MethodName": ".attr",
		"name": "\"transform\"",
		"type": "text",
		"value": " \"translate(\" + 576 / 2 + \",\" + 320 / 2 + \")\"",
		"args": [
			"\"transform\"",
			" \"translate(\" + 576 / 2 + \",\" + 320 / 2 + \")\""
		]
	},
	{
		"methodObject": "svgContainer.append(\"g\")",
		"methodEnd": true
	},
	"\n    var arcs = d3",
	{
		"methodObject": "d3",
		"d3MethodName": ".pie",
		"name": ")",
		"type": "text",
		"value": "data",
		"args": [
			"",
			"data"
		]
	},
	{
		"methodObject": "d3.pie()",
		"methodEnd": true
	},
	"\n\n    arcs.forEach(function (d, i) {\n      group",
	{
		"methodObject": "group",
		"d3MethodName": ".append",
		"name": "",
		"type": "text",
		"value": "\"path\"",
		"args": [
			"\"path\""
		]
	},
	"\n        ",
	{
		"methodObject": "group.append(\"path\")",
		"d3MethodName": ".attr",
		"name": "\"d\"",
		"type": "text",
		"value": " arc(d)",
		"args": [
			"\"d\"",
			" arc(d)"
		]
	},
	"\n        ",
	{
		"methodObject": "group.append(\"path\")",
		"d3MethodName": ".attr",
		"name": "\"fill\"",
		"type": "text",
		"value": " color(i)",
		"args": [
			"\"fill\"",
			" color(i)"
		]
	},
	{
		"methodObject": "group.append(\"path\")",
		"methodEnd": true
	},
	"\n    })\n  </script>\n  <script src=\"d3parser.js\"></script>\n</body>\n\n</html>\n"
]