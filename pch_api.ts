class EasyAPI {
    private response: object;
    private req: XMLHttpRequest;

    constructor (method: string, url: string, responseType: XMLHttpRequestResponseType, runOnLoad: Function ) {

        this.req = new XMLHttpRequest();

        this.req.open(method,url);
        this.req.responseType = responseType;
        this.req.onload = () => {
            this.response = this.req.response;
            runOnLoad();
        };
        this.req.send();
    }

	public get $response(): object {
		return this.response;
	}

}

export {EasyAPI};