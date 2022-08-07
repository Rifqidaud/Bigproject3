const ENDPOINTS = {
    BASE : "http://localhost:5000",
    AUTH : {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register'
    },
    PRODUCT: {
        ALL: '/product/all',
        DETAIL: '/product/detail/',
        UPDATE: '/product/update',
        ADD: '/product/add',
        DELETE: '/product/delete'
    },
    CART: {
        ALL: '/cart/all',
        ADD: '/cart/add',
        UPDATE: '/cart/update',
        DELETE: '/cart/delete'
    },
    ORDER: {
        ALL: '/order/getorder',
        UPDATE: '/order/update',
        ADD: '/order/add',
        SAVE: '/order/save',
        DETAIL: '/order/detail/',
        CHECKOUT: '/order/checkout',
        DELETE: '/order/delete'
    }

    
};
export default ENDPOINTS;