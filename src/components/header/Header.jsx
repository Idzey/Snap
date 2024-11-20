import Menu from "../menu/Menu";

export default function Header() {
    return (
        <header className="flex">
            <div className="flex items-center cursor-pointer">
                <img src="/logo.svg" alt="snap" />
            </div>
            <Menu />
        </header>
    )
}