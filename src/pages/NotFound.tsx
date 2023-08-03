import { useState } from "react";
import { Link } from "react-router-dom";

function NotFound(): JSX.Element {

    const [caption] = useState<string>("Oops! You're lost");

    return (
        <div className="container-desktop w-100 p-sm">
            <div
                className={"d-col justify-center align-center"}
            >
                <div className="d-col justify-between align-center w-100 landing-caption h-100 gap-lg">
                    <p className="font-dark font-upper font-rl font-center">
                        {caption}
                    </p>
                    <Link
                        to={"/"}
                        className="btn-utility font-light font-md"
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;