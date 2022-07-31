import ENDPOINTS from "../constant/endpoint";

export const buildEndpointURL = (endpoint) => {
    return `${ENDPOINTS.BASE}${endpoint}`
}