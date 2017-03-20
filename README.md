# file-generator

Atom file generator package.

Create a directorys which contains a lot of files through custom templates. Templates use `case` to quickly replace keywords. Templates Include `camelCase`, `PascalCase`, `Title Case`, `snake_case`, `lowercase`, `UPPERCASE`, `CONSTANT_CASE` and more.

## Installation

```
apm install file-generator
```

## Usage

1.Create a directory for template files(Do not place or create files outside the template in this directory).
```
e.g. /Users/user1/git/atom-template
```

2.Set the directory path to Atom file generator package settings.
```
  Settings -> Packages -> file-generator -> Settings -> Custom Template Path
```

3.Enter the path to text editor.


4.Create files with case in the directory.
```
e.g. {{--base--}}.txt
content : {{--camel--}} temp {{--dot--}}
```

5.Click the `New Module` menu button in your atom treeview.

6.Enter the name for new module.

7.Some new files will be created according to the template in your project.

By the way,you can read the [step.md](https://github.com/jarden-liu/file-generator/blob/master/step.md).

**Available Cases** :

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

```
{{--camel--}}('test string')
//=> "testString"
```

### constant

Return as an upper case, underscore separated string.

```
{{--constant--}}('test string')
//=> "TEST_STRING"
```

### dot

Return as a lower case, period separated string.

```
{{--dot--}}('test string')
//=> "test.string"
```

### header

Return as a title cased, dash separated string.

```
{{--header--}}('test string')
//=> "Test-String"
```

### lower

Return the string in lower case.

```
{{--lower--}}('TEST STRING')
//=> "test string"
```



### base

Return the string without any casing (lower case, space separated).

```
{{--base--}}('test string')
//=> "test string"
```

### param

Return as a lower case, dash separated string.

```
{{--param--}}('test string')
//=> "test-string"
```

### pascal

Return as a string denoted in the same fashion as `camel`, but with the first letter also capitalized.

```
{{--pascal--}}('test string')
//=> "TestString"
```

### path

Return as a lower case, slash separated string.

```
{{--path--}}('test string')
//=> "test/string"
```

### sentence

Return as a lower case, space separated string with the first letter upper case.

```
{{--sentence--}}('testString')
//=> "Test string"
```

### snake

Return as a lower case, underscore separated string.

```
{{--snake--}}('test string')
//=> "test_string"
```

### swap

Return as a string with every character case reversed.

```
{{--swap--}}('Test String')
//=> "tEST sTRING"
```

### title

Return as a space separated string with the first character of every word upper cased.

```
{{--title--}}('a simple test')
//=> "A Simple Test"
```

### upper

Return the string in upper case.

```
{{--upper--}}('test string')
//=> "TEST STRING"
```

## License

MIT
