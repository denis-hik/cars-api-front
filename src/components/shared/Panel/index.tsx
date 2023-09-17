import React, {useCallback, useEffect, useState} from "react";
import style from "./Panel.module.css";
import {getModelsAction} from "../../../api/getModelsAction";
import {useDispatch, useSelector} from "react-redux";
import {listModelsSelector} from "../../../store/selectors";
import {useHistory, useParams} from "react-router-dom";

const Panel: React.FC = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const models = useSelector(listModelsSelector);
    const [visibilityMobile, setVisibilityMobile] = useState(false);
    const [notVisibility, setNotVisibility] = useState(false);


    useEffect(() => {
        //Отправляем единожды запрос на модели машин
        if (!models.length) {
            getModelsAction({dispatch});

        }
    }, []);

    //Если модели нету , то показываю загрузку
    if (!models.length) {
        return <></>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onClick = (name: string) => {
        setVisibilityMobile(false);
        history.push("/" + name);
    }

    return (
        <>
            {/*Для адаптива, при нажатии показывает на весь экран производители*/}
            {!notVisibility && <div className={style.mobileButton} onClick={() => setVisibilityMobile(prevState => !prevState)}/>}
            <div className={style.body + (visibilityMobile ? " " + style.visibleMobile : "")}>
                <h2>Models</h2>
                <div className={style.list}>
                    {models.map((name) => (
                        <div
                            className={style["list-item"]}
                            onClick={() => onClick( name)}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Panel;