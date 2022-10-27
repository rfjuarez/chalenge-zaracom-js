class ErrorApiService{
    status;
    message;
    exception;

    constructor(status, message, exception) {
        this.status = status;
        this.message = message;
        this.exception = exception;
    }
}

export default ErrorApiService;