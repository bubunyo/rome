# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 196`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/196/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/196/input.js"
		end: Object {
			column: 33
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/regex"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Range values reversed. Start char code is greater than end char code"}]}
			}
			location: Object {
				filename: "es2015/uncategorised/196/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 21
					line: 1
				}
				start: Object {
					column: 8
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2015/uncategorised/196/input.js"
				end: Object {
					column: 33
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSRegExpLiteral {
				global: false
				insensitive: false
				multiline: false
				noDotNewline: false
				sticky: false
				unicode: true
				loc: Object {
					filename: "es2015/uncategorised/196/input.js"
					end: Object {
						column: 33
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				expression: JSRegExpSubExpression {
					loc: Object {
						filename: "es2015/uncategorised/196/input.js"
						end: Object {
							column: 30
							line: 1
						}
						start: Object {
							column: 1
							line: 1
						}
					}
					body: Array [
						JSRegExpCharSet {
							invert: false
							loc: Object {
								filename: "es2015/uncategorised/196/input.js"
								end: Object {
									column: 30
									line: 1
								}
								start: Object {
									column: 1
									line: 1
								}
							}
							body: Array [
								JSRegExpCharacter {
									value: "\ud834"
									loc: Object {
										filename: "es2015/uncategorised/196/input.js"
										end: Object {
											column: 8
											line: 1
										}
										start: Object {
											column: 2
											line: 1
										}
									}
								}
								JSRegExpCharSetRange {
									loc: Object {
										filename: "es2015/uncategorised/196/input.js"
										end: Object {
											column: 21
											line: 1
										}
										start: Object {
											column: 8
											line: 1
										}
									}
									end: JSRegExpCharacter {
										value: "\udf06"
										loc: Object {
											filename: "es2015/uncategorised/196/input.js"
											end: Object {
												column: 14
												line: 1
											}
											start: Object {
												column: 8
												line: 1
											}
										}
									}
									start: JSRegExpCharacter {
										value: "\ud834"
										loc: Object {
											filename: "es2015/uncategorised/196/input.js"
											end: Object {
												column: 21
												line: 1
											}
											start: Object {
												column: 15
												line: 1
											}
										}
									}
								}
								JSRegExpCharacter {
									value: "\udf08"
									loc: Object {
										filename: "es2015/uncategorised/196/input.js"
										end: Object {
											column: 27
											line: 1
										}
										start: Object {
											column: 21
											line: 1
										}
									}
								}
								JSRegExpCharSetRange {
									loc: Object {
										filename: "es2015/uncategorised/196/input.js"
										end: Object {
											column: 30
											line: 1
										}
										start: Object {
											column: 27
											line: 1
										}
									}
									end: JSRegExpCharacter {
										value: "z"
										loc: Object {
											filename: "es2015/uncategorised/196/input.js"
											end: Object {
												column: 30
												line: 1
											}
											start: Object {
												column: 29
												line: 1
											}
										}
									}
									start: JSRegExpCharacter {
										value: "a"
										loc: Object {
											filename: "es2015/uncategorised/196/input.js"
											end: Object {
												column: 28
												line: 1
											}
											start: Object {
												column: 27
												line: 1
											}
										}
									}
								}
							]
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/196/input.js:1:8 parse/regex ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Range values reversed. Start char code is greater than end char code

    /[\uD834\uDF06-\uD834\uDF08a-z]/u
            ^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
