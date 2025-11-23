
const NON_EXISTENT_URL = 'https://reqres.in/api/unknown/23';
const API_URL = 'https://reqres.in/api/users/2'; // A valid user URL for method testing

/**
 * Handles a request and logs errors if the fetch fails or the HTTP status is not successful.
 * @param {string} url The URL to fetch.
 * @param {object} options Fetch options (method, headers, body, etc.).
 * @param {string} method The HTTP method being tested.
 */
const handleRequest = async (url, options, method) => {
    console.log(`\n--- Attempting ${method} Request to ${url} ---`);
    try {
        
        const response = await fetch(url, options);

        
        if (!response.ok) {
            
            const errorBody = await response.text();
            throw new Error(`HTTP Error Status: ${response.status} (${response.statusText})`);
        }

        
        const data = await response.json();
        console.log(`✅ ${method} Successful. Response data:`, data);

    } catch (error) {
        
        console.error(`❌ Error during ${method} request:`, error.message);
    }
};


handleRequest(NON_EXISTENT_URL, { method: 'GET' }, 'GET (Non-existent)');


handleRequest(NON_EXISTENT_URL, { 
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: 'test' })
}, 'POST (Non-existent)');


handleRequest(API_URL, { 
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'updated user', job: 'Senior Developer' })
}, 'PUT (Valid)');


handleRequest(API_URL, { method: 'DELETE' }, 'DELETE (Valid)');