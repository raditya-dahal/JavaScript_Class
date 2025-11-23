
const CREATE_USER_URL = 'https://reqres.in/api/users';

const createNewUser = async () => {
    console.log('--- Assignment 2: Creating New User (POST) ---');

    const newUser = {
        name: "Elon Musk",
        job: "Tech Entrepreneur"
    };

    try {
        
        const options = {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(newUser)
        };

        
        const response = await fetch(CREATE_USER_URL, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        
        const data = await response.json();

        
        console.log('Successfully created user:');
        console.log(data);

    } catch (error) {
        console.error('Failed to create new user:', error);
    }
};


createNewUser();