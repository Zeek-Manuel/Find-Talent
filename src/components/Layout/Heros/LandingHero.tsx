import LandingImageBanner from "/images/LandingBanner.jpg";
import useDetectDevice from "../../../hooks/useDetectDevice";
import UsersImage from "../../Users/UsersImage/UsersImage";
import { useState } from "react";
import "../../../styles/pages/LandingPageHero.css";


function LandingHero(): JSX.Element {

    const [heroCaption] = useState<string>("Unlimited talent at your disposal");
    const { isDesktop } = useDetectDevice();

    return (
        <div className="container-desktop w-100 landing-hero-container">
            <div
                className={`d-grid ${!isDesktop ? "gap-xl" : "grid-2 gap-sm"} w-100`}
            >
                <div className="d-col justify-between align-start w-100 landing-caption gap-lg h-100">
                    <h1 className="font-dark font-upper font-xxxl">
                        {heroCaption}
                    </h1>
                <UsersImage/>
                </div>
                <div className="landing-image-container d-col align-center">
                    <img
                        src={LandingImageBanner}
                        className={"landing-banner"}
                        alt="Landing Hero Banner | Credit Unsplash"
                    />
                </div>
            </div>
        </div>
    )
}

export default LandingHero;