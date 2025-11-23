
/**
 * Generic async function to handle Fetch API requests.
 * Throws an error if the HTTP response status is not successful (2xx).
 *
 * @param {string} url The API endpoint URL.
 * @param {object} [options={}] The Fetch request options (method, headers, body, etc.).
 * @returns {Promise<object>} The JSON response data.
 * @throws {Error} If the response is not successful.
 */
const fetchData = async (url, options = {}) => {
    
    const response = await fetch(url, options);

    
    if (!response.ok) {
        
        const errorText = await response.text();
        throw new Error(`HTTP Request Failed: Status ${response.status} (${response.statusText}). Details: ${errorText.substring(0, 100)}...`);
    }

    
    return response.json();
};

const testFetchFunction = async () => {
    console.log('--- Assignment 4: Testing Generic Fetch Function ---');

    
    try {
        console.log('\nTesting 1: Successful POST request...');
        const user = {
            name: "John Doe",
            job: "Developer",
        };
        const url = "https://reqres.in/api/users";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        };

        const userData = await fetchData(url, options);
        console.log("✅ POST Successful. Created User Data:", userData);

    } catch (error) {
        
        console.error("❌ POST Test Failed Unexpectedly:", error);
    }

    
    try {
        console.log('\nTesting 2: Failed GET request (404 expected)...');
        const failUrl = "https://reqres.in/api/unknown/500"; 
        const failData = await fetchData(failUrl); 

        
        console.log("Unexpected success:", failData);

    } catch (error) {
        
        console.error("✅ 404 Test Passed. An error occurred (as expected):", error.message);
    }
};


testFetchFunction();