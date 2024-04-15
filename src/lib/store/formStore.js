import { create } from 'zustand';
import { omit } from 'ramda';

const useFormStore = create((set) => ({
    values: {},
    validateStatuses: {},
    helps: {},
    updateValues: (formId, newValueName, newValue) => set((state) => ({
        values: {
            ...state.values,
            [formId]: {
                ...state.values[formId],
                [newValueName]: newValue
            }
        }
    })),
    updateFormValues: (formId, newValues) => set((state) => ({
        values: {
            ...state.values,
            [formId]: newValues
        }
    })),
    deleteItemValue: (formId, newValueName) => set((state) => ({
        values: {
            ...state.values,
            // 清除对应表单项的值
            [formId]: omit([newValueName], state.values[formId])
        }
    })),
    updateValidateStatuses: (formId, newStatues) => set((state) => ({
        validateStatuses: {
            ...state.validateStatuses,
            [formId]: newStatues
        }
    })),
    updateHelps: (formId, newHelps) => set((state) => ({
        helps: {
            ...state.helps,
            [formId]: newHelps
        }
    }))
}));

export default useFormStore;