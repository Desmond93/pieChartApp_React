import appReducer from './appReducer';

const store = {
    _state: {
        positions: [],
        positionId: 0,
        totalQuantity: 0,
        sectorName: ''
    },
    getState() {
        return this._state;
    },
    rerenderApp() {},
    subscribe(observer) {
        this.rerenderApp = observer;
    },
    dispatch(action) {
        this._state = appReducer(this._state, action)
        this.rerenderApp(store);
    }
}

export default store;