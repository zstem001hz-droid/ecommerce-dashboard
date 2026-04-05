// Network error
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

// Data error
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}