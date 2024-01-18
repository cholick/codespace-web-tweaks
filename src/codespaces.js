console.log("Hello");


window.addEventListener("beforeunload", function (e) {
    e.preventDefault();

    //Codespace has its own handler here that we need to prevent firing
    e.stopImmediatePropagation();

    e.returnValue = '';
});
