import { create } from 'zustand';
import { omit } from 'ramda';

const useFormStore = create((set) => ({
    values: {},
    updateValues: (formId, newValueName, newValue) => set((state) => ({
        values: {
            ...state.values,
            [formId]: {
                ...state.values[formId],
                [newValueName]: newValue
            }
        }
    })),
    deleteItemValue: (formId, newValueName) => set((state) => ({
        values: {
            ...state.values,
            // 清除对应表单项的值
            [formId]: omit([newValueName], state.values[formId])
        }
    })),
}));

export default useFormStore;