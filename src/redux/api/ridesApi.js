import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants/constants.js";

export const getRides = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/v3/`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    listRides: builder.query({
      query: ({
        page = 1,
        pageSize = 25,
        names = "",
        email = "",
        orderStatus = [],
      }) => {
        const filter = [];
        if (names && names.length > 0) {
          filter.push(`names=${names}`);
        }
        if (email && email.length > 0) {
          filter.push(`email=${email}`);
        }
        if (orderStatus && orderStatus.length > 0) {
          filter.push(`order_status=${orderStatus}`);
        }
        let filterString = "";
        if (filter.length > 0) {
          filterString += `&${filter.join("&")}`;
        }
        return `orders/trips?page=${page}&limit=${pageSize}${filterString}`;
      },
    }),
  }),
});

export const { useListRidesQuery } = getRides;
