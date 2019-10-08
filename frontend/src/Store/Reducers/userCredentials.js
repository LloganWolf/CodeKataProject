// State initial
const initialState = { userDatas: [] }

function userCredentials(state=initialState, action) {
    let nextState

    switch(action.type) {
        // LORS D'UNE CONNEXION
        case "ADD_USER_CREDENTIALS":
            // L'utilisateur se logge, on rajoute ses données
            nextState = {
                ...state,
                userDatas: [ ...state.userDatas, action.value ]
            }

            return nextState
        
        // LORS D'UNE DECONNEXION
        case "REMOVE_USER_CREDENTIALS":
            const userDatas = state.userDatas.findIndex(data => data.id) 
            // On verifie si il y a quelque chose de renseigné
            if(userDatas !== -1) {
                // L'utilisateur est déja loggé, on le supprime
                nextState ={
                    ...state,
                    userDatas: []
                }
            }

            return nextState || state

        default:
            return state
    }
}

export default userCredentials