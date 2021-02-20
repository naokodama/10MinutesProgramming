$(function () {
    /* Implement here */
    $("#generate-button").click(function(event) {
        const widthSize = 5;
        const centerLine = 3;
        const value = $("#user").val();
        const hash = md5(value);
        console.log(hash);

        const hashArray = [...hash];

        let identiconBox = [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ];

        const cvs = $("#identicon").get(0);
        const ctx = cvs.getContext("2d");
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        const rectSize = 100;

        let lastSevenChar = hash.substr(-7);

        ctx.fillStyle = decideColorFromHash(lastSevenChar);

        for (i = 0; i < widthSize; i++) {
            for (j = 0; j < centerLine; j++) {
                identiconBox[i][j] = parseInt(hashArray[i + j * widthSize], 16) % 2 === 0;
                identiconBox[i][identiconBox[i].length - j - 1] = identiconBox[i][j];
            };
        };
        for (i = 0; i < widthSize; i++) {
            for (j = 0; j < widthSize; j++) {
                if (identiconBox[i][j]) {
                    ctx.fillRect( rectSize * j, rectSize * i, rectSize, rectSize);
                };
            };
        };

    })

    function convertToNewRangeValue(oldVal, oldMin, oldMax, newMin, newMax) {
        let newVal;
        const oldRange = oldMax - oldMin;
        const newRange = newMax - newMin;

        newVal = Math.round(((oldVal - oldMin) / oldRange * newRange) + newMin);

        return newVal;
    }

    function decideColorFromHash(lastSevenChar) {
        const orgHue = parseInt(lastSevenChar.substr(0, 3), 16);
        const orgSatulation = parseInt(lastSevenChar.substr(3, 2), 16);
        const orgLightness = parseInt(lastSevenChar.substr(5, 2), 16);

        const hue = convertToNewRangeValue(orgHue, 0, parseInt("FFF", 16), 0, 360);
        const satulation = 65 - convertToNewRangeValue(orgSatulation, 0, parseInt("FF", 16), 0, 20);
        const lightness = 75- convertToNewRangeValue(orgLightness, 0, parseInt("FF", 16), 0, 20);

        return "hsl(" + hue.toString() + "," + satulation.toString() + "%," + lightness.toString() + "%)";
    }
});
