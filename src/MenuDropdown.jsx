import React from "react"

export default function MenuDropdown({ children, open }) {
    return (
        <div className="menu-dropdown">
           {open && children}
        </div>
    )
}