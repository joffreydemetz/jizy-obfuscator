/*! Obfuscator v@VERSION | MIT | @DATE | [@BUNDLE] */
(function (global) {
    "use strict";

    if (typeof global !== "object" || !global || !global.document) {
        throw new Error("Obfuscator requires a window with a document");
    }

    if (typeof global.Obfuscator !== "undefined") {
        throw new Error("Obfuscator is already defined");
    }

    // @CODE 

    global.Obfuscator = Obfuscator;
})(typeof window !== "undefined" ? window : this);