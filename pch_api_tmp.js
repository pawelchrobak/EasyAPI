// clasa EasyAPI do prostych zapytań asynchronicznych. Po uzyskaniu odpowiedzi wykonuje funkcję przekazaną w runOnLoad oraz przypisuje property 'response' z zapytania do obiektu. Ponadto cały czas użytkownik ma dostęp do requesta przez property 'req'

function EasyAPI(method, url, responseType, runOnLoad) {
    // this.method = method;
    // this.url = url;
    // this.runOnLoad = runOnLoad;

    this.req = new XMLHttpRequest();

    this.req.open(method,url);
    this.req.responseType = responseType;
    this.req.onload = () => {
        this.response = this.req.response;
        runOnLoad();
    };
    this.req.send();
}

// testowa funkcja do wywołania po uzyskaniu odpowiedzi
function hello() {
    console.log("hello world!");
}

// test - powinien zwrócić cały json
var test = new EasyAPI('GET','https://swapi.co/api/people/1/','json', () => {console.log(test.response)});