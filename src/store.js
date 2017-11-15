import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const store = createStore(
    combineReducers({
        form: formReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            // createLogger(),
            promise(),
            thunk
        )
    )
)

export default store
