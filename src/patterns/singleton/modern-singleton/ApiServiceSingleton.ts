class ApiServiceSingleton {}

// This leverages the Node.js module system to export a default variable pointing to an instance of ApiServiceSingleton.
export default new ApiServiceSingleton();