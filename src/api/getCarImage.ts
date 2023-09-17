import {carsXEapi} from "./base";

type getCarActionType = {
    model: string;
    make: string
}
// @ts-ignore
export  const getCarImageAction = async ({model, make}: getCarActionType): Promise<string> => {
    try {
        await carsXEapi.get(`search`, {
            params: {
                q: make + ' ' + model,
                engine: "google_images"
            }
        }).then((data) => {
            if (data.status === 200) {
                if (data.data.length < 0) {
                    return data.data[0].link
                }
            }

            console.log(data.data)
            return ""
        })
    } catch (e) {
        console.log(e);
        return ""
    }

}