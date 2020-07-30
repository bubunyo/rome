# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 258`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/uncategorised/258/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/258/input.js"
		end: Object {
			column: 61
			index: 61
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSLabeledStatement {
			loc: Object {
				filename: "core/uncategorised/258/input.js"
				end: Object {
					column: 61
					index: 61
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			label: JSIdentifier {
				name: "target1"
				loc: Object {
					filename: "core/uncategorised/258/input.js"
					identifierName: "target1"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
			body: JSLabeledStatement {
				loc: Object {
					filename: "core/uncategorised/258/input.js"
					end: Object {
						column: 61
						index: 61
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
				label: JSIdentifier {
					name: "target2"
					loc: Object {
						filename: "core/uncategorised/258/input.js"
						identifierName: "target2"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
				}
				body: JSLabeledStatement {
					loc: Object {
						filename: "core/uncategorised/258/input.js"
						end: Object {
							column: 61
							index: 61
							line: 1
						}
						start: Object {
							column: 18
							index: 18
							line: 1
						}
					}
					label: JSIdentifier {
						name: "target3"
						loc: Object {
							filename: "core/uncategorised/258/input.js"
							identifierName: "target3"
							end: Object {
								column: 25
								index: 25
								line: 1
							}
							start: Object {
								column: 18
								index: 18
								line: 1
							}
						}
					}
					body: JSWhileStatement {
						loc: Object {
							filename: "core/uncategorised/258/input.js"
							end: Object {
								column: 61
								index: 61
								line: 1
							}
							start: Object {
								column: 27
								index: 27
								line: 1
							}
						}
						test: JSBooleanLiteral {
							value: true
							loc: Object {
								filename: "core/uncategorised/258/input.js"
								end: Object {
									column: 38
									index: 38
									line: 1
								}
								start: Object {
									column: 34
									index: 34
									line: 1
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "core/uncategorised/258/input.js"
								end: Object {
									column: 61
									index: 61
									line: 1
								}
								start: Object {
									column: 40
									index: 40
									line: 1
								}
							}
							body: Array [
								JSContinueStatement {
									loc: Object {
										filename: "core/uncategorised/258/input.js"
										end: Object {
											column: 59
											index: 59
											line: 1
										}
										start: Object {
											column: 42
											index: 42
											line: 1
										}
									}
									label: JSIdentifier {
										name: "target1"
										loc: Object {
											filename: "core/uncategorised/258/input.js"
											identifierName: "target1"
											end: Object {
												column: 58
												index: 58
												line: 1
											}
											start: Object {
												column: 51
												index: 51
												line: 1
											}
										}
									}
								}
							]
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```