# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-for-of > for-of-with-var`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: true
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 21
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    ForOfStatement {
      await: false
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 20
          index: 20
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      body: EmptyStatement {
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 20
            index: 20
            line: 1
          }
          start: Object {
            column: 19
            index: 19
            line: 1
          }
        }
      }
      right: ReferenceIdentifier {
        name: 'list'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 18
            index: 18
            line: 1
          }
          start: Object {
            column: 14
            index: 14
            line: 1
          }
        }
      }
      left: VariableDeclaration {
        kind: 'var'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 10
            index: 10
            line: 1
          }
          start: Object {
            column: 5
            index: 5
            line: 1
          }
        }
        declarations: Array [
          VariableDeclarator {
            id: BindingIdentifier {
              name: 'x'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 10
                  index: 10
                  line: 1
                }
                start: Object {
                  column: 9
                  index: 9
                  line: 1
                }
              }
            }
            init: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 10
                index: 10
                line: 1
              }
              start: Object {
                column: 9
                index: 9
                line: 1
              }
            }
          }
        ]
      }
    }
  ]
}
```