
const isProduction = process.env.NODE_ENV === 'production';
const serverUrl = isProduction? process.env.NEXT_PUBLIC_SERVER_URL || '' : 'http://localhost:3000'


export const submitComment = async (obj: any) => {
    console.log('about to send', obj);
     const headers =  {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GRAPHQL_TOKEN}`,
    }
    try {
        const result = await fetch(`${serverUrl}/api/comment/`, {
            method: 'POST',
           headers,
            body: JSON.stringify(obj),
        });

        // Log the entire response
        console.log(result);

        if (!result.ok) {
            console.error(`Request failed with status: ${result.status}`);
            // If the response is not ok, you might want to throw an error or handle it appropriately.
            throw new Error(`Request failed with status: ${result.status}`);
        }

        return result.json();
    } catch (error) {
        console.error('Error in submitComment:', error);
        throw error; // Rethrow the error to handle it at a higher level if needed.
    }
};
