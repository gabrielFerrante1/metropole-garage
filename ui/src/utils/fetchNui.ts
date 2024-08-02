/**
 * Fetches data from a NUI endpoint by sending a POST request.
 *
 * @template ResponseData The type of the data expected in the response. 
 * 
 * @param event - The endpoint eventname to target
 * @param data - Data you wish to send in the NUI Callback
 *
 * @return {Promise<ResponseData>} - A promise that resolves to the data returned from the endpoint, formatted as `ResponseData`.
 */
export const fetchNui = async <ResponseData>(
    event: string,
    data?: object
): Promise<ResponseData | { error: string }> => {
    const resourceName = (window as any).GetParentResourceName
        ? (window as any).GetParentResourceName()
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
            error: 'An error occurred while fetching data from the NUI endpoint.'
        }
    }
}