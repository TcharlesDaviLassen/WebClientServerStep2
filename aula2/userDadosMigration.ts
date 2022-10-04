import { User } from './modelUser'

async function users() {

    await User.sync({ force: true });

    let mateus: User = new User();
    mateus.firstName = 'Mateus';
    mateus.lastName = 'Rov';
    mateus.birthday = '2022/09/16';
    await mateus.save();

    let fabricio: User = new User();
    fabricio.firstName = 'Fabricio';
    fabricio.lastName = 'Prt';
    fabricio.birthday = '2022/09/16';
    await fabricio.save();

    let users = await User.findAll();

    console.log(JSON.stringify(users, null, 2))
}

users();