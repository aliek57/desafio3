import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();

const images = {
    banner: ref(storage, 'images/bg.jpg')
}

export const uploadFile = async (): Promise<Record<string, string>> => {
    const urls: Record<string, string> = {};

    const promises = Object.entries(images).map(async ([key, images]) => {
        try {
            const file = await getDownloadURL(images);
            urls[key] = file;
        } catch (error) {
            console.error(`Error uploading ${key}:`, error);
        }
    })

    await Promise.all(promises);
    return urls;
}