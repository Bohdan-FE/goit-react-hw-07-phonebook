import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { contactsReducer} from "./contactsSlice";
import { filterReduser } from "./filterSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReduser
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: false,
  // }),
});
