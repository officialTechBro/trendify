import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Jude Bellingham',
        email: 'jude@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Vini Jnr',
        email: 'vini@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
]

export default users