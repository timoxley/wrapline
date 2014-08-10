# wrapline

Add a prefix and/or suffix each line of a text stream.

This package used to be named `indent-stream` until 2.0.0 when the
ability to add suffixes was added. Still proves good for indenting
streams.

## Examples

### Indent a stream

```js
var WrapLine = require('wrapline')
var stream = WrapLine()
fs.createReadStream('before.txt')
.pipe(WrapLine('  ')) // indent entire stream with 2 spaces
.pipe(fs.createWriteStream('after.txt'))
```

#### before.txt
```
Lorem ipsum dolor sit amet, quo ad quis latine.
Erant scribentur ne ius.
Nostrud vocibus luptatum eam ex, mel novum delenit scaevola no.
No iriure mentitum platonem usu, te nec ocurreret instructior.
Vim quem quis at.
```

#### after.txt
```
  Lorem ipsum dolor sit amet, quo ad quis latine.
  Erant scribentur ne ius.
  Nostrud vocibus luptatum eam ex, mel novum delenit scaevola no.
  No iriure mentitum platonem usu, te nec ocurreret instructior.
  Vim quem quis at.
```

### Add prefix and suffix to each line

```js
var WrapLine = require('wrapline')
var stream = WrapLine()
fs.createReadStream('before.txt')
.pipe(WrapLine('<', '>')) // indent entire stream with 2 spaces
.pipe(fs.createWriteStream('after.txt'))
```
#### after.txt
```
<Lorem ipsum dolor sit amet, quo ad quis latine.>
<Erant scribentur ne ius.>
```

### Dynamically add prefix/suffix to line

```js
var WrapLine = require('wrapline')
var stream = WrapLine()
fs.createReadStream('before.txt')
.pipe(WrapLine(' '))
.pipe(WrapLine(function(pre, line) {
  pre = pre || -1
  return pre + 1
}))
.pipe(fs.createWriteStream('after.txt'))
```
#### after.txt
```
1 Lorem ipsum dolor sit amet, quo ad quis latine.
2 Erant scribentur ne ius.
3 Nostrud vocibus luptatum eam ex, mel novum delenit scaevola no.
4 No iriure mentitum platonem usu, te nec ocurreret instructior.
5 Vim quem quis at.
```

## See Also

* [neoziro/stream-line-wrapper](https://github.com/neoziro/stream-line-wrapper)
* [hughsk/wrapstream](https://github.com/hughsk/wrap-stream)

## License

MIT
