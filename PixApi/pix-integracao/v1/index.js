// const getUsers = async () => {
//     const users = await axios.get(`http://localhost:3000/pix`);
//     const data = users.data;
//     const p = document.createElement('p');
//     p.innerHTML = JSON.stringify(data);
//     document.body.appendChild(p);
// }

const getUsers = async () => {
    const users = await axios.get(`http://localhost:3000/pix/`);
    const data = users.data;
    data.forEach(element => {
        const p = document.createElement("p");
        p.innerText = `${JSON.stringify(element)}`;
        document.body.appendChild(p);
    });
}

getUsers();