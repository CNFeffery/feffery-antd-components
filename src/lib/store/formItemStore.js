import { create } from 'zustand';


const useFormItemStore = create((set) => ({
    validateTrigger: [],
    AntdCheckCard: {},
    AntdCheckCardGroup: {},
    AntdCalendar: {},
    AntdCascader: {},
    AntdCheckbox: {},
    AntdCheckboxGroup: {},
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
    updateAntdCascader: (value) => set((state) => ({
        AntdCascader: {
            ...state.AntdCascader,
            ...value
        }
    })),
    updateAntdCheckbox: (value) => set((state) => ({
        AntdCheckbox: {
            ...state.AntdCheckbox,
            ...value
        }
    })),
    updateAntdCheckboxGroup: (value) => set((state) => ({
        AntdCheckboxGroup: {
            ...state.AntdCheckboxGroup,
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