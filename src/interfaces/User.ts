export interface IUserData<S extends string, N extends number, O extends object> {
    cell: S;
    dob: { date: S, age: N };
    email: S;
    gender: S;
    id: { name: S; value: S; };
    location : { street: O; city: S; state: S; country: S; postcode: S; };
    login: {
        uuid: S;
        username: S;
        password: S;
        salt: S;
        md5: S;
    }
    name: { title: S; first: S; last: S; }
    nat: S;
    phone: S;
    picture: {
        large: S;
        medium: S;
        thumbnail: S;
    }
    registered: { date: S; age: N}
}