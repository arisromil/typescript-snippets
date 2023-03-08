
// Example 1
type HttpMethod = "Get" | "Post" | "Update" | "Delete"
function sendRequest(method: HttpMethod) {
    // code
}
sendRequest('Get');


// Example 2
function logError(msg: string | string[]) {
 if (typeof msg === "string") {
     console.error('Error happened: ${msg}');
 } else if (Array.isArray(msg)) {
     console.error('Errors happened: ${msg.join("\n")}');
 }
}
logError("Missing required field");
logError(["Missing required field", "Length cannot be less than 5"]);

