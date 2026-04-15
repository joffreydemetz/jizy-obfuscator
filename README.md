# jizy-obfuscator

Un-obfuscate email addresses (and other sensitive strings) in the DOM at runtime, keeping them hidden from most scrapers.

Content is stored ROT13-encoded inside placeholder elements and decoded client-side on page load.

## Install

```bash
npm install jizy-obfuscator
```

## How it works

1. Server-side, encode each email with ROT13 and emit a placeholder with a matching id:

    ```html
    Contact: <span id="obfuscated-0"></span>
    Support: <span id="obfuscated-1"></span>
    ```

2. Client-side, pass the ROT13-encoded strings (in the same order as the ids) to `Obfuscator.decode`:

    ```js
    import { Obfuscator } from 'jizy-obfuscator';

    Obfuscator.decode([
        '<n uers="znvygb:wbr@rknzcyr.pbz">wbr@rknzcyr.pbz</n>', // -> <a href="mailto:joe@example.com">joe@example.com</a>
        '<n uers="znvygb:fhccbeg@rknzcyr.pbz">fhccbeg@rknzcyr.pbz</n>'
    ]);
    ```

   Each entry replaces `#obfuscated-<index>` via `outerHTML`, so the decoded HTML can include links or any markup.

## API

### `Obfuscator.decode(obfuscated)`

- `obfuscated` — `string[]` of ROT13-encoded HTML fragments. Index `i` replaces the element `#obfuscated-i`.

ROT13 is its own inverse: encode and decode use the same transform. Non-letter characters (digits, `@`, `.`, tags, attributes) pass through unchanged.

## Browser build

A prebuilt bundle is available at `dist/js/jizy-obfuscator.min.js` for direct `<script>` inclusion.

## License

MIT © Joffrey Demetz
