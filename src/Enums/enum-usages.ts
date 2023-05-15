// Enum members as types
enum E {
    A = 10* 10,       // Numeric literal
    B = "test",       // String literal
    C = Math.random() // Opaque computed enum member
}

// constant expressions
const Prefix = "/api";
enum Routes {
  Users = `${Prefix}/users`,
  Posts = `${Prefix}/posts`,
}

// Get the type of the enum key and value
enum HttpMethod {
    Get = "GET",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE"
}

type HttpKeys = keyof typeof HttpMethod;
// "Get" | "Post" | "Put" | "Delete"

type HttpValues = `${HttpMethod}`
// "GET" | "POST" | "PUT" | "DELETE"
