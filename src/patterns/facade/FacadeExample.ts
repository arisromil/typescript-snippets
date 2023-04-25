
interface ApiClient {
    upload(url: string, blob: Blob): Promise<boolean>;
}

class DocumentService {
    create(name: string): Promise<string> {
        return Promise.resolve(`Location: /documents/${name}`);
    }
}

class UploadService {
    constructor(private client: ApiClient) { }
    upload(url: string, blob: Blob): Promise<boolean> {
        return this.client.upload(url, blob);
    }
}