export const dataResponse = (data, message) => {
    return {
        success: true,
        data,
        message
    }
};

export const errorResponse = (message) => {
    return {
        success: false,
        message
    }
};