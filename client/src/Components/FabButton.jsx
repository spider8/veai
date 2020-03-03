import React, { useState } from "react"
import "./FabButton.css"
import { MdLibraryAdd } from "react-icons/md";


export default function FabButton({ chindren }) {
    const [visible, setVisible] = useState(false);
    return (
        <div className="container-fab">
            {visible &&
                <div className="container-fab-children">
                    {chindren}
                </div>
            }
            <button className="fab-button" onClick={_ => setVisible(!visible)}><MdLibraryAdd color="white" size="3rem" /></button>
        </div>
    )
}