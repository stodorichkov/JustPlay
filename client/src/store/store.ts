import {combineReducers} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {configureStore} from '@reduxjs/toolkit';
import SliceConstants from "../constant/SliceConstants";
import {Persistor} from "redux-persist/es/types";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import {shuffleReducer} from "./slice/ShuffleSlice";
import {modeReducer} from "./slice/ModeSlice";
import {repeatReducer} from "./slice/RepeatSlice";
import {volumeReducer} from "./slice/VoumeSlice";

// combination of all reducers
const rootReducer = combineReducers({
    mode: modeReducer,
    shuffle: shuffleReducer,
    repeat: repeatReducer,
    volume: volumeReducer
});

// configuration to persist in localstorage
const persistConfig = {
    key: SliceConstants.ROOT,
    storage,
};

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        // configuration for middleware
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// persisted store
export const persistor: Persistor = persistStore(store);
// Root state as type to get all substates
export type RootState = ReturnType<typeof store.getState>