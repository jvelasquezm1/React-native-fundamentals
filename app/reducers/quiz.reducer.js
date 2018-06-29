export const quizReducer = (state = '', action) => {
    switch (action.type) {
        case "SELECTED":
            return [ action.payload, ...state ];
        default:
            return state;
    }
}