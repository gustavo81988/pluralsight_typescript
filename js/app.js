var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello typescript!');
console.log(hello.message);
console.log("Hello world");
//# sourceMappingURL=app.js.map