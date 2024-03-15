import { create } from 'zustand';


const useFormItemStore = create((set) => ({
    validateTrigger: [],
    AntdCheckCard: {},
    AntdInput: {},
    AntdInputNumber: {},
    AntdSelect: {}, 
    updateValidateTrigger: (value) => set((state) => ({
        validateTrigger: [
            ...state.validateTrigger,
            ...value
        ]
    })),
    updateAntdCheckCard: (value) => set((state) => ({
        AntdCheckCard: {
            ...state.AntdCheckCard,
            ...value
        }
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