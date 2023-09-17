import {BodyCar, InfoCar} from "./styled";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {listModelsSelector, listSelector} from "../../store/selectors";
import {itemCarType} from "../../configs/types";
import Load from "../shared/Load";
import Header from "../Header";
import React, {useEffect, useState} from "react";
import {getCarAction} from "../../api/getCarAction";
import {getText} from "../../help/localizeRU";

const Car: React.FC = () => {
    const [carData, setCarData] = useState<null | itemCarType>(null);

    const { car, id }: {car: string, id: string} = useParams();
    const dispatch = useDispatch();
    const models: string[] = useSelector(listModelsSelector);
    const listCar: itemCarType[] = useSelector(listSelector);

    useEffect(() => {

        //Запрос если открыли страницу сразу
        if (!listCar.length && !!models.length) {
            getCarAction({model: car, limit: 50, dispatch});
        }
    }, [models]);

    useEffect(() => {
        //Данные добавляются в carData
        if (!!listCar.length) {
            //Ищем данные из всех
            const carDataTemp = listCar.find((car) => car.id.toString() === id);
            carDataTemp && setCarData(carDataTemp);
        }
    }, [id, listCar]);

    if (!carData) {
        return <Load />
    }

    return (
        <BodyCar>
            <Header name={`${car} ${carData.model}`} />
            <img className={"banner"} src={carData.image} />
            <InfoCar>
                <div>
                    <div className={"item"}><h4>Бренд</h4><span>{carData.make}</span></div>
                    <div className={"item"}><h4>Год выпуска</h4><span>{carData.year}</span></div>
                    <div className={"item"}>
                        <h4>{carData.fuel_type === "electricity"
                        ? "Запас хода" : "Трансмиссия"}</h4>
                        <span>{carData.fuel_type === "electricity"
                            ? carData.max_comb_mpg
                            : getText(carData.transmission)}</span></div>
                </div>
                <div>
                    <div className={"item"}><h4>Модель</h4><span>{carData.model}</span></div>
                    <div className={"item"}><h4>Тип двигателя</h4><span>{getText(carData.fuel_type)}</span></div>
                </div>
            </InfoCar>
        </BodyCar>
    )
}

export default Car;