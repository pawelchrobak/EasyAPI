class EasyAPI {
    constructor(method, url, responseType, runOnLoad) {
        this.req = new XMLHttpRequest();
        this.req.open(method, url);
        this.req.responseType = responseType;
        this.req.onload = () => {
            this.response = this.req.response;
            runOnLoad();
        };
        this.req.send();
    }
    get $response() {
        return this.response;
    }
}
export { EasyAPI };
