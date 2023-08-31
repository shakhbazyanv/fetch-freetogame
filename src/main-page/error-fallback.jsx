function ErrorFallback({ error, resetErrorBounday }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBounday}>Try again</button>
        </div>
    );
}

export default ErrorFallback;