import { create } from 'zustand';


const useFormItemStore = create((set) => ({
    validateTrigger: [],
    AntdInput: {},
    AntdInputNumber: {},
    AntdSelect: {}, 
    updateValidateTrigger: (value) => set((state) => ({
        validateTrigger: [
            ...state.validateTrigger,
            ...value
        ]
    })),
    updateAntdInput: (value) => set((state) => ({
        AntdInput: {
            ...state.AntdInput,
            ...value
        }
    })),
    updateAntdInputNumber: (value) => set((state) => ({
        AntdInputNumber: {
            ...state.AntdInputNumber,
            ...value
        }
    })),
    updateAntdSelect: (value) => set((state) => ({
        AntdSelect: {
            ...state.AntdSelect,
            ...value
        }
    }))
}));


export default useFormItemStore;