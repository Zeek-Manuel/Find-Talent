import FooterStyles from "../../styles/Footer.module.css";

function Footer(): JSX.Element{

    const currentYear = new Date().getFullYear();

    return(
        <footer className={`${FooterStyles.footer}`}>
            <div className={"container-desktop w-100 p-sm h-100"}>
                <p className="font-dark font-sm">Copyright &copy; {currentYear} Playground. All rights reserved. </p>
            </div>
        </footer>
    )
}

export default Footer;