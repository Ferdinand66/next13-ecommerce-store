import { Home } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/homes`;

const getHomes = async (): Promise<Home[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getHomes;

