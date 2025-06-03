import { configureStore } from '@reduxjs/toolkit';
import scheduleDemoReducer from './slices/scheduleDemoSlice';

export const store = configureStore({
  reducer: {
    scheduleDemo: scheduleDemoReducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;