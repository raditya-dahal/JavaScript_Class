
const USER_URL = 'https://reqres.in/api/users/1';

const fetchUserData = async () => {
    console.log('--- Assignment 1: Fetching User 1 Data (GET) ---');
    try {
        
        const response = await fetch(USER_URL);

        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        
        const data = await response.json();

       
        console.log('Successfully fetched data:');
        console.log(data);

    } catch (error) {
        
        console.error('Failed to fetch user data:', error);
    }
};


fetchUserData();