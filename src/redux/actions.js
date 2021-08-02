import { GET_EMP_BY_ID } from "./types";

export const getEmployeeById = (payload) => {
    console.log(`getEmployeeById`);
    return { type: GET_EMP_BY_ID, payload };
}
