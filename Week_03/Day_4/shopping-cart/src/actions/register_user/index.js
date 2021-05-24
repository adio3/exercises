import { baseUrl } from '../../constants';

export const UserLogin = async (email, password) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const body = JSON.stringify({
        email: email,
        password: password,
    });

    const config = {
        headers,
        body,
        method: 'POST',
    };

    const response = await fetch(`${baseUrl}/backend/api/auth/token/`, config);
    const data = await response.json();
    console.log(response);

    if (response.status !== 200) {
        function thisThrows() {
            window.alert('Login wrong. Please try again.');
            throw new Error('Login wrong. Please try again.');
        }

        try {
            thisThrows();
        } catch (e) {
            console.error(e);
        } finally {
            console.log('We do cleanup here');
        }
    }
    return data;
};
