export class PromiseUtils {
    /**
     * Creates a promise that resolves after a specified delay.
     * 
     * @param {number} time - The time in milliseconds to delay the promise.
     * 
     * @returns {Promise<void>} - A promise that resolves after the specified time.
     */
    static delay(time: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, time));
    }
}
