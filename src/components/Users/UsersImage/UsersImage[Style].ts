import styled from "styled-components";
import RemCalculator from "../../../hooks/useRemCalculator";

export const ImageContainer = styled.div`
    img {
        width: ${RemCalculator(100)};
        height: ${RemCalculator(100)};
        position: relative;
        object-fit: cover;
        border: 5px solid var(--secondary-color);

        &.over-lap-image { left: -2.5%; }
        &.over-lap-image-2 { left: -5%; }

        @media screen and (max-width: 768px) {
            width: 75px;
            height: 75px;
            &.over-lap-image { left: -3.5%; }
            &.over-lap-image-2 { left: -7%; }
        }
    }
`;
