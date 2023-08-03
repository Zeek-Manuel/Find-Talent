import { useState, useEffect} from "react";
import { ContentLinksMenu, PrivacyContainer } from "./PrivacyPolicy[Style]";
import useDetectDevice from "../../hooks/useDetectDevice";
import Modal from "../../components/Utility/Modal/Modal";
import { useLocation } from "react-router-dom";
import { GetCurrentDate } from "../../Utility/InternalDate/GetDate";

type Props<S extends string, AO = object[]> = {
    caption: S;
    detailsCaption: {
        header: string;
        subHeader: string;
    };
    details: AO;
    tableContent: AO;
};

function PrivacyPolicy(): JSX.Element {

    const { isDesktop } = useDetectDevice();
    const [openContentLinks, setOpenContentLinks] = useState<boolean>(false);

    function HandleLinksMenu(): void {
        setOpenContentLinks(!openContentLinks ? true : false);
    }

    const { hash: pageId, pathname } = useLocation();

    const [currentPageID, setCurrentPageID] = useState<string | null>(null);

    useEffect(() => {
        setCurrentPageID(pageId.split("%20").join(" ").split("#")[1]);
    }, [currentPageID, pageId, pathname]);


    const [data] = useState<Props<string>>({
        caption: "Privacy Policy",
        detailsCaption: {
            header: "This Privacy Policy outlines the types of information we collect, how we use and protect it, and the choices individuals have regarding their personal data",
            subHeader: ""
        },
        details: [
            {
                parentText: "Introduction",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {
                parentText: "How We Use Your Information",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Information Sharing and Disclosure",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Your Rights and Choices",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Deliveries and Purchases",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Support and Assistance",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
            {   parentText: "Barring and Disclosure",
                childText: ["Personal Information: The Firm may collect personal information, including but not limited to, names, email addresses, phone numbers, postal addresses, and other identifiable information, when voluntarily provided by individuals through our website or other means of communication."]
            },
        ],

        tableContent: [
            {
                parentLink: "Introduction",
            },
            {
                parentLink: "How We Use Your Information",
            },
            {
                parentLink: "Information Sharing and Disclosure",
            },
            {
                parentLink: "Your Rights and Choices",
            },
            {
                parentLink: "Deliveries and Purchases",
            },
            {
                parentLink: "Support and Assistance",
            },
            {
                parentLink: "Barring and Disclosure",
            }
        ]
    });

    return (
        <section
            className="container-desktop w-100 p-sm"
        >
            <div className="d-col h-100 gap-xl justify-center align-start">
                <header className="d-col">
                    <h1 className="font-dark font-xxl">{data.caption}</h1>
                    <p className="font-dark font-md">{GetCurrentDate()}</p>
                </header>
                <PrivacyContainer
                    className={`d-grid ${!isDesktop ? "" : "custom-grid gap-xxl" }`}
                >
                    <div className="d-col">
                        {
                            (!isDesktop) ?
                            <>
                                <div
                                    className="table-content-header font-dark font-md font-w-lg"
                                    onClick={HandleLinksMenu}
                                >
                                    {"Table Of Contents"}
                                </div>
                                {
                                    openContentLinks &&
                                    <Modal
                                        toggleModal={HandleLinksMenu}
                                        className={"d-col align-center justify-center h-100 w-100 gap-md"}
                                    >
                                        <ContentLinksMenu
                                            className= {`mobile-content-links border-round-md d-col gap-md ${openContentLinks ? 'active' : 'inactive'}`}
                                        >
                                            {
                                                openContentLinks &&
                                                data.tableContent.map((link: object, index: number) => {
                                                    return (
                                                        <a
                                                            key={index}
                                                            href={`#${Object(link).parentLink}`}
                                                            onClick={HandleLinksMenu}
                                                            id={"active"}
                                                        >
                                                            <p className="content-links font-sm font-dark">
                                                                {Object(link).parentLink}
                                                            </p>
                                                        </a>
                                                    )
                                                })
                                            }
                                        </ContentLinksMenu>
                                    </Modal>
                                }
                            </>
                            :
                            <ContentLinksMenu
                                className="d-col gap-md"
                            >
                                <div
                                    className="table-content-header font-dark font-md font-w-lg"
                                >
                                    {"Table of contents"}
                                </div>
                                {
                                    data.tableContent.map((link: object, index: number) => {
                                        return (
                                            <a
                                                key={index}
                                                href={`#${Object(link).parentLink}`}
                                                className={"d-col gap-xs"}
                                            >
                                                <p className="content-links font-sm font-dark">
                                                    {`${index + 1}.`}
                                                    {Object(link).parentLink}
                                                </p>
                                            </a>
                                        )
                                    })
                                }
                            </ContentLinksMenu>
                        }
                    </div>
                    <div className="d-col gap-md">
                        <div className="d-col gap-sm">
                            <h4 className="details-caption font-dark font-md font-w-sm">
                                {data.detailsCaption.header}
                            </h4>
                        </div>
                        <div className="d-col font-dark gap-lg w-100">
                        {
                            data.details.map((newData: object, key: number) => (
                                <div
                                    key={key}
                                    className={`text-content ${currentPageID === Object(newData).parentText ? 'highlight' : ''}`}
                                    id={Object(newData).parentText}
                                >
                                    <p className="d-col gap-md font-md font-w-lg">
                                        {Object(newData).parentText}
                                    </p>
                                    <p className="d-col gap-md font-md">
                                        {Object(newData).childText}
                                    </p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </PrivacyContainer>
            </div>
        </section>
    )
}

export default PrivacyPolicy;