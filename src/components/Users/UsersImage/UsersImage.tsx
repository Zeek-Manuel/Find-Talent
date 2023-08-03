import Users from "../../../data/Users";
import { useState } from "react";
import { ImageContainer } from "./UsersImage[Style]";
import { IUserData } from "../../../interfaces/User";

type UsersProp = {
    users: [
        {
            results: IUserData<string, number, object>[],
            info: object
        }
    ]
};

function UsersImage(): JSX.Element{

    const [usersData] = useState<UsersProp>({
        users: [
            {
                results: Object(Users[0]).results,
                info: {}
            }
        ]
    });

    const users: [] = usersData.users[0].results as [];

    function GetRandomUsers(minNumber: number, maxNumber: number): IUserData<string, number, object>[] {
        const newRandomUsers: IUserData<string, number, object>[] = [];

        Array.from(Array(3).keys()).map(() => {
            const randomNumber: number = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber) as number;
            newRandomUsers.push(users[randomNumber]);
        })

        return newRandomUsers as IUserData<string, number, object>[];
    }

    const [randomUsers] = useState<IUserData<string, number, object>[]>(GetRandomUsers(0, 49))

    return (
        <ImageContainer
            className={"w-100 d-row align-center"}
        >
            {
                randomUsers.map((user: IUserData<string, number, object>, index: number) =>(
                    <img
                        key={user.login.uuid}
                        src={user.picture.medium}
                        alt={`${user.name.first?.at(0)?.toUpperCase()} ${user.name.last?.at(0)?.toUpperCase()}`}
                        className={`border-round-full ${index !== 0 ? "over-lap-image" : ""} ${index === 2 ? "over-lap-image-2" : ""}`}
                    />
                ))
            }
        </ImageContainer>
    )
}

export default UsersImage;