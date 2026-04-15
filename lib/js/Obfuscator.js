import Rot13 from './Rot13.js';

const Obfuscator = {
    decode: function (obfuscated) {
        if (!obfuscated || !obfuscated.length) {
            return;
        }

        for (let i = 0, n = obfuscated.length; i < n; i++) {
            document.querySelector("#obfuscated-" + i).outerHTML = Rot13.convert(obfuscated[i]);
        }
    }
};

export default Obfuscator;