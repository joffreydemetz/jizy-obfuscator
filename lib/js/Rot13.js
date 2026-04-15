const Rot13 = {
    map: null,

    convert: function (a) {
        this.init();

        let s = "";
        for (let i = 0; i < a.length; i++) {
            const b = a.charAt(i);
            s += ((b >= 'A' && b <= 'Z') || (b >= 'a' && b <= 'z') ? this.map[b] : b);
        }
        return s;
    },

    init: function () {
        if (this.map != null) {
            return;
        }

        const map = [];
        const s = "abcdefghijklmnopqrstuvwxyz";

        for (let i = 0; i < s.length; i++) {
            map[s.charAt(i)] = s.charAt((i + 13) % 26);
        }

        for (let i = 0; i < s.length; i++) {
            map[s.charAt(i).toUpperCase()] = s.charAt((i + 13) % 26).toUpperCase();
        }

        this.map = map;
    }
};

export default Rot13;