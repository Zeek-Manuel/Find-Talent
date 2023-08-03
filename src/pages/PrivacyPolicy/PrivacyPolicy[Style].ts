import styled from "styled-components";
import RemCalculator from "../../hooks/useRemCalculator";

const ContentLinksMenu = styled.div`

    position: relative;
    background: var(--secondary-color);
    padding: ${RemCalculator(16)} 0;

    a:hover > .content-link-number,
    a:hover > .content-links {
        color: var(--main-theme_2);
    }

    @media screen and (max-width: 1240px) {
        a:hover > .content-links {
            color: black;
            text-decoration: none;
        }

        .mobile-content-links {
            transition: .4s ease;
            animation: fadeOut 4s;
        }
    }
`;

const PrivacyContainer = styled.div`
    .text-content.highlight {
        transition: 1s ease-in-out;
        animation: fadeOut 4s forwards;

        @keyframes fadeOut {
            0% {
                background-color: var(--light-gray);
            }
            100% {
                background-color: transparent;
            }
        }
    }

    height: 100%;

    &.custom-grid {
        grid-template-columns: 20% 80%;
    }

    h4,
    .text-content {
        max-width: 75%;
    }

    .details-caption {
        padding-top: 18px;
    }

    .table-content-header {
        align-items: flex-end;
        margin: 0;
    }

    @media screen and (max-width: 1240px) {
        .table-content-header {
            cursor: pointer;
            text-align: center;
            border: 1px solid rgba(30, 30, 30, .15);;
            padding: 6px;
        }

        .content-links {
            border-bottom: 1px solid rgba(30, 30, 30, .15);
            text-decoration: none;
            padding: 12px 15px;
        }
    }
    @media screen and (max-width: 1240px){
        h4 {
        padding-top: ${RemCalculator(16*2)};
        }
        h4,
        .text-content {
            max-width: 97%;
        }
    }

`;

export {
    ContentLinksMenu,
    PrivacyContainer
}
