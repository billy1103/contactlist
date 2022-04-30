import React from "react";
import { Link } from "react-router-dom";

export const People = () => {
    const contacts = [
        { name: "ivan", email: "i@i.com" }, { name: "billy", email: "b@b.com" }, { name: "ricardo", email: "r@r.com" }
    ]
    return (
        <>
            {contacts.map((contact, i)=>{
                return(<div key={i}>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>)
            })}
        </>
    )}