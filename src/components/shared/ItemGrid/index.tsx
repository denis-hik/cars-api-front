import React, {useEffect, useState} from "react";
import style from "./ItemGrid.module.css";
import {getCarImageAction} from "../../../api/getCarImage";

type ItemGridType = {
    name: string;
    image?: string;
    des?: string;
    make: string;
    model: string;
    onClick?: () => void;
    year?: string;
}
const ItemGrid: React.FC<ItemGridType> = ({
    name,
    model,
    make,
    image,
    des,
    onClick,
    year,
}) => (
    <div className={style.body} onClick={onClick}>
        {!!image && <img className={style.image} src={image} alt={name}/>}
        <span className={style.name}>{name}</span>
        <span className={style.year}>{year}</span>
    </div>
);

export default ItemGrid;