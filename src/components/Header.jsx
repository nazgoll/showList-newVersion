const Header = (props) => {
    return (

        <header className=" text-5xl font-extrabold text-custom-color-5 flex justify-center pt-6 ">
            {props.headerText}
        </header>

    )
}
export default Header;