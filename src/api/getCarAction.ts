import {apiBase} from "./base";
import {AppDispatch} from "../store/store";
import {appendList, clearList, setList} from "../store/reducer";
import {itemCarType} from "../configs/types";

type getCarActionType = {
    model?: string;
    limit?: number;
    dispatch: AppDispatch;
}

export const getCarAction = ({model, limit = 10, dispatch}: getCarActionType) => {
    apiBase.get(`cars/`, {params: {
        limit: limit,
        make: model
        }}).then((response) => {
        //Если результат не пишел, то отмена
        if (response.status !== 200) {
            console.log("Error get list")
            return;
        }

        //Если результат нашелся то в массив добавляем
        const carsTemp:itemCarType[] = response.data?.map((data: any, index: number) => ({
            "year": data?.year,
            "class": data?.class,
            "model": data?.model,
            "make": data?.make,
            //Не нашел api которые предоставляют картинки под машины
            "image": "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg",
            "title": `${data?.make} ${data.model}`,
            "id": index,
            fuel_type: data.fuel_type,
            transmission: data?.transmission,
            max_comb_mpg: data?.max_comb_mpg
        }));

        //далее сохраняем в стате-сторадже
        dispatch(setList({list: carsTemp, maxPage: 0}));
    });

}