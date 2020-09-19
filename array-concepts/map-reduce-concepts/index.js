// original object
let actors = [
    {
        _id: 12345,
        firstname: 'John',
        lastname: 'Abraham',
        movies: [['force', 200], ['Dishoom', 100], ['parmanu', 300]],
        role: {
            type: 'lead'
        }
    },
    {
        _id: 12346,
        firstname: 'Akshay',
        lastname: 'Kumar',
        movies: [['Khiladi', 100], ['Holiday', 200], ['Bachhan pandey', 300]],
        role: {
            type: 'lead'
        }
    }
];

// complex object modified according to our needs
let modified_array = actors.map(actor => {
    return {
        id: actor._id,
        name: `${actor.firstname} ${actor.lastname}`,
        movies: actor.movies.map(elem => elem[0]),
        roleType: actor.role.type,
        totalRevenue: actor.movies.map(elem => elem[1]).reduce((prev, curr) => prev + curr, 0)
    }
});

console.log(modified_array);