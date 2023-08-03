import { useState } from "react";

type Props<S extends string> = {
    header: S,
    details: S
};

function About(): JSX.Element {

    const [data] = useState<Props<string>>({
        header: "About",
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam sit ratione eius maxime delectus reprehenderit inventore explicabo distinctio possimus repudiandae culpa, voluptas ex blanditiis, quibusdam, adipisci velit error iste deleniti ipsum? Eius, perferendis magnam. Sunt mollitia quae obcaecati maiores necessitatibus amet velit iusto esse dolor commodi neque provident, dolores corporis dolore omnis magni voluptatem facilis pariatur nihil distinctio! Natus harum corporis sed repudiandae facere commodi qui distinctio rerum officia mollitia reprehenderit, quam assumenda recusandae, necessitatibus illum aperiam saepe neque velit nihil. Fuga nesciunt sit vitae fugiat, non ipsa doloremque aperiam. Qui dolor vitae eum at animi numquam. Enim, blanditiis sunt."
    });

    return (
        <div className="container-desktop w-100 p-sm">
            <div
                className={"d-col justify-center align-center"}
            >
                <div className="d-col justify-between align-start w-100 landing-caption h-100 gap-lg">
                    <h1 className="font-dark font-upper font-xxl">
                        {data.header}
                    </h1>
                    <p
                        className="font-md font-dark font-legible"
                    >
                        {data.details}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;