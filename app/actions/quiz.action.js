export const questionSelected = (data, key) => {    
    return {
        type: "SELECTED",
        payload: {
            data,
            key
        }
    }
}