import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs"

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
};

export const Search = ({ loadUser }: SearchProps) => {

    const [userName, setUserName] = useState("")

    const handleKeyBoard = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            loadUser(userName)
        }
    }

    return (
        <div className="header-container">
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositóros</p>
            <div>
                <input type="text"
                    placeholder="Digite o nome do usuário"
                    onKeyDown={handleKeyBoard}
                    onChange={(e) => setUserName(e.target.value)}
                  className="input-class"
                />
                <button
                    onClick={() => loadUser(userName)}
                    className="button-class"
                ><BsSearch /></button>
            </div>
        </div>
    )
}