import { apiSlice } from "./api.slice";
import { STUDENT_URL } from "../constants";

export const studentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => STUDENT_URL,
      providesTags: ['Student'],
      keepUnusedDataFor: 5 
    }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: STUDENT_URL,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Student']
    }),
  }),
});

export const { 
  useGetStudentsQuery,
  useAddStudentMutation
} = studentApiSlice;