import { create } from 'zustand';


const useFormItemStore = create((set) => ({
    validateTrigger: [],
    AntdCheckCard: {},
    AntdCheckCardGroup: {},
    AntdCalendar: {},
    AntdCascader: {},
    AntdCheckbox: {},
    AntdCheckboxGroup: {},
    AntdColorPicker: {},
    AntdDatePicker: {},
    AntdDateRangePicker: {},
    AntdInput: {},
    AntdInputNumber: {},
    AntdMentions: {},
    AntdRadioGroup: {},
    AntdRate: {},
    AntdSelect: {},
    AntdSlider: {},
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
    updateAntdColorPicker: (value) => set((state) => ({
        AntdColorPicker: {
            ...state.AntdColorPicker,
            ...value
        }
    })),
    updateAntdDatePicker: (value) => set((state) => ({
        AntdDatePicker: {
            ...state.AntdDatePicker,
            ...value
        }
    })),
    updateAntdDateRangePicker: (value) => set((state) => ({
        AntdDateRangePicker: {
            ...state.AntdDateRangePicker,
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
    updateAntdMentions: (value) => set((state) => ({
        AntdMentions: {
            ...state.AntdMentions,
            ...value
        }
    })),
    updateAntdRadioGroup: (value) => set((state) => ({
        AntdRadioGroup: {
            ...state.AntdRadioGroup,
            ...value
        }
    })),
    updateAntdRate: (value) => set((state) => ({
        AntdRate: {
            ...state.AntdRate,
            ...value
        }
    })),
    updateAntdSelect: (value) => set((state) => ({
        AntdSelect: {
            ...state.AntdSelect,
            ...value
        }
    })),
    updateAntdSlider: (value) => set((state) => ({
        AntdSlider: {
            ...state.AntdSlider,
            ...value
        }
    })),
}));


export default useFormItemStore;