import { create } from 'zustand';

const useFromStore = create((set) => ({
    values: {},
    updateValues: (formId, newValueName, newValue) => set((state) => ({
        values: {
            ...state.values,
            [formId]: {
                ...state.values[formId],
                [newValueName]: newValue
            }
        }
    }))
}));

export default useFromStore;