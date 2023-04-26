
/*
Proxy Pattern Is a Middleware Whose Main Purpose Is To Decouple Service Providers and Clients.
Flow : https://github.com/arisromil/arisromil.github.io/blob/main/assets/ProxyTypescriptFlow.png
 */
class HttpServiceProxy {
    private httpService: HttpService;
    private dataCache: Map<string, any> = new Map();

    constructor() {
        this.httpService = new HttpService();
    }

    async sendRequest(method: string, url: string, body?: BodyInit) {
        const cacheKey = method + ":" + url;
        if (this.dataCache.has(cacheKey)) {
            console.log(`Use key: ${cacheKey} to get cached data`);
            return this.dataCache.get(cacheKey);
        }
        const response = await this.httpService.sendRequest(method, url, body);
        this.dataCache.set(cacheKey, response);
        return response;
    }
}
