export const UPDATE_NEWS='UPDATE_ARTICLES';
export const newsUpdate= articles => dispatch=>{
    dispatch({
        type:UPDATE_NEWS,
        payload:articles
    })
};
