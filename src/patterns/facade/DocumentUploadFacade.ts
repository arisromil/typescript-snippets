
class DocumentUploadFacade {
    constructor(
        private documentService: DocumentService,
        private uploadService: UploadService
    ) { }
    async createAndUploadDocument(name: string, blob: Blob):
        Promise<boolean> {
        let path: string | null = null;
        let status = false;
        try {
            path = await this.documentService.create(name);
        } catch (e) {
            console.error(e);
        }
        if (path) {
            try {
                status = await this.uploadService.upload(path,
                    blob);
            } catch (e) {
                console.error(e);
            }
        }
        return status;
    }
}