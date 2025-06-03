import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface FormData {
  fullName: string;
  workEmail: string;
  mobileNumber: string;
  companyName: string;
}

export interface ScheduleDemoState {
  formData: FormData;
  selectedRevenue: string | null;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

const initialState: ScheduleDemoState = {
  formData: {
    fullName: '',
    workEmail: '',
    mobileNumber: '',
    companyName: '',
  },
  selectedRevenue: null,
  isSubmitting: false,
  isSuccess: false,
  error: null,
};

// Async thunk for form submission
export const submitForm = createAsyncThunk(
  'scheduleDemo/submitForm',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { scheduleDemo: ScheduleDemoState };
      const { formData, selectedRevenue } = state.scheduleDemo;

      const payload = {
        ...formData,
        annualRevenue: selectedRevenue,
        submittedAt: new Date().toISOString(),
      };

      // Simulate API call
      const response = await fetch('/api/schedule-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  }
);

const scheduleDemoSlice = createSlice({
  name: 'scheduleDemo',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      if (field in state.formData) {
        (state.formData as any)[field] = value;
      }
    },
    selectAnnualRevenue: (state, action: PayloadAction<string>) => {
      state.selectedRevenue = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearForm: (state) => {
      state.formData = initialState.formData;
      state.selectedRevenue = null;
      state.error = null;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.isSubmitting = false;
        state.isSuccess = true;
        state.error = null;
        // Clear form on success
        state.formData = initialState.formData;
        state.selectedRevenue = null;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload as string || 'Failed to submit form';
      });
  },
});

export const {
  updateField,
  selectAnnualRevenue,
  setError,
  clearError,
  clearForm,
} = scheduleDemoSlice.actions;

export default scheduleDemoSlice.reducer;