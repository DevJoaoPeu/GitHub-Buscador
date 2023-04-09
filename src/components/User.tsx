import React from "react";
import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md"
import { Link } from "react-router-dom"

export const User = ({
    login,
    avatar_url,
    followers,
    following,
    location
}: UserProps) => {
    return (
        <div className="container-user">
            <img className="img" src={avatar_url} alt={login} />
            <h2>{login}</h2>
            {location && (<p className="location">
                <MdLocationPin color="rgb(0, 136, 136)" />
                <span>{location}</span>
            </p>)}

            <div  className="container-followers">
                <div className="followers">
                    <h4>Seguidores:</h4>
                    <p>{followers}</p>
                </div>
                <div className="followers">
                    <h4>Seguindo:</h4>
                    <p>{following}</p>
                </div>
            </div>
            <Link className="link-button" to={`https://github.com/${login}?tab=repositories`}>Ver melhores projetos</Link>
        </div>
    )
}