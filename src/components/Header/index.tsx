import React from "react";
import style from "./Header.module.css";
import {useHistory} from "react-router-dom";

type HeaderType = {
    name?: string
}
const Header: React.FC<HeaderType> = ({name}) => {

    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div className={style.body}>
            <span className={style.back} onClick={handleBack}>{`<`}</span>
            <span className={style.name}>{name}</span>
        </div>
    )
};

export default Header;