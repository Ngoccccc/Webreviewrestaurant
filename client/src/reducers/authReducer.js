export const authReducer = (state, action) => {
    const {type, payload:{isAuthenticated,user}} = action;
    switch (type) {
        case 'SER_AUTH':
            return {
                ...state,
                authLoading: false,
                isAuthenticated,
                user
            }
        default:
            return state
    }

}