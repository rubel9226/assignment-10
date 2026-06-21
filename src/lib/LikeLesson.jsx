import { api } from "./baseAPI";

export const likeLesson = async (id, token) => {
    try {
        console.log({id, token});
        const res = await api.put(
            `/lessons/like-lesson/${id}`,
            {},
            {
                headers: {
                Authorization: token,
                },
            }
        );

        return res.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}; 