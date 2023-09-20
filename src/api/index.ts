import { FETCH_URL } from "../constants";
import { IResponse } from "../types";

export const fetchSelectData = async (
  page: number,
  limit: number
): Promise<IResponse> => {
  const res =
    fetch(`${FETCH_URL}users?page=${page}&limit=${limit}`)
    .then((res) =>
      res.json()
    )
    .catch((err) => {
      throw new Error(err);
    })

  return res;
};
