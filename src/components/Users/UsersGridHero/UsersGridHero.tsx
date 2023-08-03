import { HeroCaption, UserCard, UsersGrid, UsersGridContainer } from "./UsersGridHero[Style]";
import { IUserData } from "../../../interfaces/User";
import { useState } from "react";
import Users from "../../../data/Users";
import Location from "../../../assets/Icons/Location";

function UsersGridHero(): JSX.Element {

    const [users] = useState<IUserData<string, number, object>[]>(Object(Users[0]).results);

    return (
        <UsersGridContainer>
            <div className="container-desktop p-sm">
                <div className="d-col gap-xxl">
                    <HeroCaption className="font-xl font-dark">Find more talent</HeroCaption>
                    <UsersGrid>
                        {
                            users.slice(0, 20).map((user: IUserData<string, number, object>) => (
                                <UserCard
                                    to={`/user/${user.login.uuid}`}
                                    className={"d-col w-100 gap-md"}
                                    key={user.login.uuid}
                                >
                                    <img
                                        className="border-round-sm"
                                        src={user.picture.large}
                                        alt={`${user.name.first} ${user.name.last}`}
                                    />
                                    <div className="d-col gap-md">
                                        <div className="d-col gap-sm">
                                            <div className="d-row align-center">
                                                <Location width={25} height={25} fill={"var(--primary-color-aux"} />
                                                <div className="d-row align-center gap-xs">
                                                    <p className="font-dark font-sm">{user.nat}</p>
                                                    <p className="font-dark font-sm">{"-"}</p>
                                                    <p className="font-dark font-sm">{user.location.city}</p>
                                                </div>
                                            </div>
                                            <p className="font-dark font-xs"></p>
                                        </div>
                                        <div className="d-row align-center gap-sm">
                                            <span className={`${user.id.name === "" ? "title-unavailable" : "title-available"}`}>
                                                <p className={`${user.id.name ? "font-light p-xs" : "p-xs"} font-xs`}>
                                                    {user.id.name ? user.id.name : "UNK"}
                                                </p>
                                            </span>
                                            <h4 className="font-dark font-sm">{user.name.first}</h4>
                                        </div>
                                    </div>
                                </UserCard>
                            ))
                        }
                    </UsersGrid>
                </div>
            </div>
        </UsersGridContainer>
    )
}

export default UsersGridHero;