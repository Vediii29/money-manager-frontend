// Read configuration from your Vercel environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const API_ENDPOINTS = {
    // --- AUTH & USER ENDPOINTS (Commented out as they don't exist in the mock API) ---
    // LOGIN: `${API_BASE_URL}/login`,
    // REGISTER: `${API_BASE_URL}/register`,
    // GET_USER_INFO: `${API_BASE_URL}/profile`,

    // --- CATEGORIES ENDPOINTS (Commented out as they don't exist in the mock API) ---
    // GET_ALL_CATEGORIES: `${API_BASE_URL}/categories`,
    // ADD_CATEGORY: `${API_BASE_URL}/categories`,
    // UPDATE_CATEGORY: (categoryId) => `${API_BASE_URL}/categories/${categoryId}`,
    // CATEGORY_BY_TYPE: (type) => `${API_BASE_URL}/categories/${type}`,

    // --- Incomes (These will work) ---
    GET_ALL_INCOMES: `${API_BASE_URL}/incomes`,
    ADD_INCOME: `${API_BASE_URL}/incomes`,
    DELETE_INCOME: (incomeId) => `${API_BASE_URL}/incomes/${incomeId}`,

    // --- Expenses (These will work) ---
    GET_ALL_EXPENSES: `${API_BASE_URL}/expenses`,
    ADD_EXPENSE: `${API_BASE_URL}/expenses`,
    DELETE_EXPENSE: (expenseId) => `${API_BASE_URL}/expenses/${expenseId}`,

    // --- DASHBOARD & FILTERS (Commented out, likely won't work without other data) ---
    // APPLY_FILTERS: `${API_BASE_URL}/filter`,
    // DASHBOARD_DATA: `${API_BASE_URL}/dashboard`,

    // --- Cloudinary Image Upload (This is separate and will work) ---
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
};