import React, {useEffect, useState} from "react";
import style from "./Home.module.css";
import {useDispatch, useSelector} from "react-redux";
import {listModelsSelector, listSelector} from "../../store/selectors";
import Load from "../shared/Load";
import {useHistory, useParams} from "react-router-dom";
import {getCarAction} from "../../api/getCarAction";
import ItemGrid from "../shared/ItemGrid";
import {itemCarType} from "../../configs/types";
import {clearList} from "../../store/reducer";

type HomeType = {

}
const Home: React.FC<HomeType> = () => {

    const [page, setPage] = useState<number>(1);
    const models: string[] = useSelector(listModelsSelector);
    const listCar: itemCarType[] = useSelector(listSelector);

    const dispatch = useDispatch();
    const history = useHistory();
    const { car }: {car: string} = useParams();

    //Получение данных если машина меняется
    useEffect(() => {
        dispatch(clearList());
        getCarAction({model: car,limit: 10, dispatch});
        setPage(1)
    }, [car]);

    //Получение данных если страница меняется
    useEffect(() => {
        if (page !== 1) {
            dispatch(clearList());
            getCarAction({model: car,limit: page * 10, dispatch});
        }
    }, [page]);

    //Переход в раздел машины
    const handleCar = (id: string) => {
        history.push(`/${car}/${id}`);
    }

    //Если модели нету , то показываю загрузку
    if (!models.length) {
        return <Load />
    }

    //При моделях , показываю основную страницу
    return (
        <div className={style.body}>
            <div className={style.label}><h2>{car}</h2> {!!listCar.length && <div className={style.len}>{listCar.length}+</div>}</div>
            {!listCar.length && <div className={style.load}><Load /></div> }
            {!!listCar.length && <div className={style.grid}>
                {listCar
                    .map(({model, image, id,year }: itemCarType) => (
                    <ItemGrid
                        name={model}
                        image={image}
                        key={id}
                        model={model}
                        make={car}
                        year={year}
                        onClick={() => handleCar(id)}
                    />
                ))}
            </div>}
            {(page < 5 && !!listCar.length) && <div className={style["load-more"]} onClick={() => setPage(prevState => prevState + 1)}>Load more</div>}
        </div>
    )
};

export default Home;