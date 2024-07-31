export class ColorUtils {
    /**
     * Generates a random RGB color string.
     * 
     * @returns {string} A string representing an RGB color in the format 'r, g, b'.
     */
    static generateRandomRGBColor(): string {
        const getRandomValue = () => Math.floor(Math.random() * 256);

        const red = getRandomValue();
        const green = getRandomValue();
        const blue = getRandomValue();

        return [red, green, blue].join(',');
    }
}