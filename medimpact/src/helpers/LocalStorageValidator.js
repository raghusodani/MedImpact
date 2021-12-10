export const setSessionStorage = (token,type) => {
    localStorage.setItem( "token",token);
    localStorage.setItem( "type",type);
};
export const getType = () => {
    return localStorage.getItem("type");
};
export const removeType = () => {   
    localStorage.removeItem("type");
};
export const getToken = () => {
    return localStorage.getItem("token");
}
export const removeToken = () => {
    localStorage.removeItem("token");
}
