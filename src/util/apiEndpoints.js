


export const BASE_URL = "http://localhost:8080/api/v2.0";

const CLOUDINARY_CLOUD_NAME = "duhdd0aiz";

export const API_ENDPOINTS = {
    LOGIN: "/login",
    REGISTER: "/register",
    GET_USER_INFO: "/profile",
    GET_ALL_CATEGORIES: "/categories",
    ADD_CATEGORY: "/categories", 
    UPDATE_CATEGORY:(categoryId) =>  `/categories/${categoryId}`,
    GET_ALL_INCOMES:"/incomes",
    CATEGORY_BY_TYPE:(type) => `/categories/${type}`,
    ADD_INCOME:"/incomes",
    DELETE_INCOME:(incomeId)=>`/incomes/${incomeId}`,
    GET_ALL_EXPENSES: "/expenses",
    ADD_EXPENSE: "/expenses",
    DELETE_EXPENSE: (expenseId) => `/expenses/${expenseId}`,
    APPLY_FILTERS: "/filter",
    DASHBOARD_DATA:"/dashboard",
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};

