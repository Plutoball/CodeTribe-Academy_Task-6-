//To keep API responses consistent and predictable.
export function sendError(res, status, message) {
    res.status(status).json({ error: message });
}
//# sourceMappingURL=errorHandler.js.map