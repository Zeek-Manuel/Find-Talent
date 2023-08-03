import styled from "styled-components";
import RemCalculator from "../../../hooks/useRemCalculator";

const ModalOverlay = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background: rgba(5, 5, 5, .25);
    padding: ${RemCalculator(16)};

    .mobile-content-links {
            transition: .3s ease;
            animation: fade-down .4s;
        };

    @keyframes fade-down {
        0% {
            opacity:0;
            transform: translateY(-30px) scale(.9);
        }
        100% {
            opacity: 1;
            transform:translateY(0) scale(1);
        }
        };

`;

export {
    ModalOverlay
}