var data;

var app = new Vue({
    el: '#app',
    data: {
        "data": [], //array vacía para poner los members
    }
});

fetch("https://api.myjson.com/bins/1h3vb3", {

    method: "GET",

}).then(function (response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
}).then(function (json) {

    data = json.books;
    app.data = data;

    console.log(data);

}).catch(function (error) {
    // called when an error occurs anywhere in the chain
    console.log("Request failed: " + error.message);
});



//function createDiv(data) {
//    var container = document.getElementById('booksContainer');
//    for (var i = 0; i < data.length; i++) {
//
//        console.log(data[i].titulo);
//
//        var book = document.createElement('div');
//
//        book.textContent = data[i].titulo;
//        container.appendChild(book);
//
//    }
//
//
//}
