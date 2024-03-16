import { create } from 'zustand';


const useFormStore = create((set) => ({
    values: {},
    formValidateStatus: {},
    validateStatuses: {},
    helps: {},
    form: null,
    updateValues: (value) => set((state) => ({
        values: {
            ...state.values, 
            ...value
        }
    })),
    updateFormValidateStatus: (value) => set((state) => ({
        formValidateStatus: {
            ...state.formValidateStatus, 
            ...value
        }
    })),
    updateValidateStatuses: (value) => set((state) => ({
        validateStatuses: {
            ...state.validateStatuses, 
            ...value
        }
    })),
    updateHelps: (value) => set((state) => ({
        helps: {
            ...state.helps, 
            ...value
        }
    })),
    updateForm: (value) => set(() => ({form: value}))
}));


export default useFormStore;