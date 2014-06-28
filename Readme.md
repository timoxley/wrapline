# indent-stream

Indent each line of a stream.

## Example

```js
var Indent = require('indent-stream')
var stream = Indent()
fs.createReadStream('before.txt')
.pipe(Indent('  ')) // indent entire stream with 2 spaces
.pipe(fs.createWriteStream('after.txt'))
```

### before.txt
```
Lorem ipsum dolor sit amet, quo ad quis latine.
Erant scribentur ne ius.
Nostrud vocibus luptatum eam ex, mel novum delenit scaevola no.
No iriure mentitum platonem usu, te nec ocurreret instructior.
Vim quem quis at.
```

### after.txt
```
  Lorem ipsum dolor sit amet, quo ad quis latine.
  Erant scribentur ne ius.
  Nostrud vocibus luptatum eam ex, mel novum delenit scaevola no.
  No iriure mentitum platonem usu, te nec ocurreret instructior.
  Vim quem quis at.
```

## License

MIT
