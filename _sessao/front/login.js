const api= 'http://localhost:3000/';

async function auth()
{
    console.log('auth');
    let url = api+"auth";
    const response = await fetch(url);
    const result = await response.json();
    
    console.log(result);
}