import styled from "styled-components";
import RemCalculator from "../../../hooks/useRemCalculator";
import { Link } from "react-router-dom";

const UsersGridContainer = styled.div`
    padding: ${RemCalculator(16 * 10)} 0;
    background: var(--light-gray);

    @media screen and (max-width: 1024px) {
        padding: ${RemCalculator(16 * 2)} 0;
    }
`;

const HeroCaption = styled.h2`
    text-decoration: underline;
`;

const UsersGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 3rem;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 1rem;
        row-gap: 3rem;
    }
`;

const UserCard = styled(Link)`

    .title-available { background: var(--primary-color); }
    .title-unavailable { background: var(--main-theme_2); }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
`;

export {
    UsersGridContainer,
    UserCard,
    UsersGrid,
    HeroCaption
}