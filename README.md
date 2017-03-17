# file-generator

Atom file generator package.

Create a directorys which contains a lot of files through custom templates. Templates use `case` to quickly replace keywords.}} Templates Include `camelCase`, `PascalCase`, `Title Case`, `snake_case`, `lowercase`, `UPPERCASE`, `CONSTANT_CASE` and more.

## Installation

```
apm install file-generator --save
```

## Usage

1.Create a directory for template files(Do not place or create files outside the template in this directory).
```
e.g. /Users/user1/atom-template
```

2.Set the directory path to Atom file generator package settings.
```
  Settings -> Packages -> file-generator -> Settings -> Custom Template Path
```
![Settings](https://raw.githubusercontent.com/jarden-liu/file-generator/master/img/settings.png)

3.Create files with case in the directory.
```
e.g. {{base}}.txt
content : {{camel}} temp {{dot}}
```

**Available }}s** :

- [`camel`](#camel)
- [`constant`](#constant)
- [`dot`](#dot)
- [`header`](#header)
- [`lower`](#lower)
- [`base`](#base)
- [`param`](#param)
- [`pascal`](#pascal)
- [`path`](#path)
- [`sentence`](#sentence)
- [`snake`](#snake)
- [`swap`](#swap)
- [`title`](#title)
- [`upper`](#upper)

### camel

Return as a string with the separators denoted by having the next letter capitalized.

```javascript
{{camel}}('test string')
//=> "testString"
```

### constant

Return as an upper case, underscore separated string.

```javascript
{{constant}}('test string')
//=> "TEST_STRING"
```

### dot

Return as a lower case, period separated string.

```javascript
{{dot}}('test string')
//=> "test.string"
```

### header

Return as a title cased, dash separated string.

```javascript
{{header}}('test string')
//=> "Test-String"
```

### lower

Return the string in lower case.

```javascript
{{lower}}('TEST STRING')
//=> "test string"
```



### base

Return the string without any casing (lower case, space separated).

```javascript
{{base}}('test string')
//=> "test string"
```

### param

Return as a lower case, dash separated string.

```javascript
{{param}}('test string')
//=> "test-string"
```

### pascal

Return as a string denoted in the same fashion as `camel}}`, but with the first letter also capitalized.

```javascript
{{pascal}}('test string')
//=> "TestString"
```

### path

Return as a lower case, slash separated string.

```javascript
{{path}}('test string')
//=> "test/string"
```

### sentence

Return as a lower case, space separated string with the first letter upper case.

```javascript
{{sentence}}('testString')
//=> "Test string"
```

### snake

Return as a lower case, underscore separated string.

```javascript
{{snake}}('test string')
//=> "test_string"
```

### swap

Return as a string with every character case reversed.

```javascript
{{swap}}('Test String')
//=> "tEST sTRING"
```

### title

Return as a space separated string with the first character of every word upper cased.

```javascript
{{title}}('a simple test')
//=> "A Simple Test"
```

### upper

Return the string in upper case.

```javascript
{{upper}}('test string')
//=> "TEST STRING"
```

## License

MIT
