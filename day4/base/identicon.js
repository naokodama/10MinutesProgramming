$(function () {
    /* Implement here */
    $("#generate-button").on("click", function(event) {
        const value = $("#user").val();
        const hash = md5(value);
        alert(hash);
    })
});
