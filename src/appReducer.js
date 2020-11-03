const POSITION_NAME_CHANGE = "POSITION-NAME-CHANGE";
const POSITION_QUANTITY_CHANGE = "POSITION-QUANTITY-CHANGE";
const ADD_NEW_POSITION = "ADD-NEW-POSITION";
const SET_TOTAL_QUANTITY = "SET-TOTAL-QUANTITY";
const SET_SECTOR_NAME = "SET-SECTOR-NAME";

const appReducer = (state, action) => {

    switch (action.type) {
        case POSITION_NAME_CHANGE:
            return {
                ...state,
                positions: state.positions.map(p => {
                    if (p.id === action.positionId) {
                        p.positionName = action.positionNameText;
                    }
                    return p;
                }
                )
            };
        case POSITION_QUANTITY_CHANGE:
            return {
                ...state,
                positions: state.positions.map(p => {
                    if (p.id === action.positionId) {
                        p.positionQuantity = action.positionQuantityValue;
                    }
                    return p;
                }),
                totalQuantity: 0
            };
        case ADD_NEW_POSITION:
            {
                let newState = { ...state };
                newState.positions = 
                    [...state.positions, { 
                        id: newState.positionId++, 
                        positionName: '', 
                        positionQuantity: '',
                        positionColor: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase() 
                        }
                    ]
                return newState;
            };
        case SET_TOTAL_QUANTITY:
            {
                let newState = { ...state };
                state.positions.forEach(p => {
                    newState.totalQuantity += +p.positionQuantity;
                })
                return newState;
            };
            case SET_SECTOR_NAME:
            return {
                ...state,
                sectorName: action.sectorName
            };
        default:
            return state;
    }
}

export const positionNameChangeAC = (positionNameText, positionId) => {
    return { type: POSITION_NAME_CHANGE, positionNameText, positionId }
}

export const positionQuantityChangeAC = (positionQuantityValue, positionId) => {
    return { type: POSITION_QUANTITY_CHANGE, positionQuantityValue, positionId }
}

export const addNewPositionAC = () => {
    return { type: ADD_NEW_POSITION }
}

export const setTotalQuantityAC = (totalQuantity) => {
    return { type: SET_TOTAL_QUANTITY, totalQuantity }
}

export const setSectorNameAC = (sectorName) => {
    return { type: SET_SECTOR_NAME, sectorName }
}

export default appReducer;