class CustomError extends Error {
    constructor(error: Error) {
        super(error.message);
        this.name = error.name;
        this.stack = error.stack;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
export default CustomError;
