import {apiBaseModels} from "./base";
import {setModels} from "../store/reducer";
import {AppDispatch} from "../store/store";


export const getModelsAction = ({dispatch}: {dispatch: AppDispatch}) => {
    apiBaseModels.get(`models`).then((response) => {
        //Если результат не пишел, то отмена
        if (response.status !== 200) {
            console.log("Error get list")
            return;
        }
        //Если результат нашелся то в массив добавляем
        const set: string[] = Array.from(new Set(response.data));
        set.push("Tesla")
        //далее сохраняем в стате-сторадже
        dispatch(setModels({list: set}));
    }).catch((err) => {
        console.log(err)
    });
}