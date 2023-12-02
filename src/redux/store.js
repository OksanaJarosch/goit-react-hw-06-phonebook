import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["contacts"],
}

const rootReducer = combineReducers({
        contacts: contactsReducer,
        filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
}
);

export const persistor = persistStore(store);