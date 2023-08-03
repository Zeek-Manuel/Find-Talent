import { ModalOverlay } from "./Modal[Style]";

type Props =  {
    children: React.ReactElement;
    toggleModal: () => void;
    className: string;
}

function Modal({
    children,
    toggleModal,
    className
}: Props): JSX.Element {
    return (
        <ModalOverlay
            className={className}
            onClick={toggleModal}
        >
            {children}
        </ModalOverlay>
    );
}

export default Modal;