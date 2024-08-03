/**
 * Fetches data from a NUI endpoint by sending a POST request.
 *
 * @template ResponseData The type of the data expected in the response. 
 * 
 * @param event - The endpoint eventname to target
 * @param data - Data you wish to send in the NUI Callback
 *
 * @return {Promise<ResponseData | { error: string }>} - A promise that resolves to the data returned from the endpoint, formatted as `ResponseData`, or an error object.
 */
export const fetchNui = async <ResponseData>(
    event: string,
    data?: object
): Promise<ResponseData | { error: string }> => {
    // Define an interface for the window object extension
    interface CustomWindow extends Window {
        GetParentResourceName?: () => string;
    }

    // Typecast window to CustomWindow
    const customWindow = window as CustomWindow;

    const resourceName = customWindow.GetParentResourceName
        ? customWindow.GetParentResourceName()
        : "metropole-garage";

    try {
        const response = await fetch(`https://${resourceName}/${event}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    } catch (error) {
        return {
            error: (error instanceof Error ? error.message : 'An unknown error occurred')
        };
    }
}