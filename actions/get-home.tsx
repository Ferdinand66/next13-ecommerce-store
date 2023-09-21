import { Home } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homes`

const getHome = async (id: string): Promise<Home> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getHome;