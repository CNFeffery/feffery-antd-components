import { create } from 'zustand';


const useFormItemStore = create((set) => ({
    validateTrigger: [],
    AntdCheckCard: {},
    AntdCheckCardGroup: {},
    AntdCalendar: {},
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
    updateAntdCheckCardGroup: (value) => set((state) => ({
        AntdCheckCardGroup: {
            ...state.AntdCheckCardGroup,
            ...value
        }
    })),
    updateAntdCalendar: (value) => set((state) => ({
        AntdCalendar: {
            ...state.AntdCalendar,
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