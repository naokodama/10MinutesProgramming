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
        const rectSize = 100;

        ctx.fillStyle = "orange";

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


        let lastSevenChar = hash.substr(-7);
        console.log(lastSevenChar);
    })
});
