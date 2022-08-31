# AUTO GENERATED FILE - DO NOT EDIT

export 'feffery'_antdsegmentedcoloring

"""
    'feffery'_antdsegmentedcoloring(;kwargs...)

An AntdSegmentedColoring component.

Keyword arguments:
- `id` (String; optional)
- `bordered` (Bool; optional)
- `breakpoints` (Array of Reals; required)
- `className` (String; optional)
- `colorBlockPosition` (a value equal to: 'left', 'right'; optional)
- `colorBlockStyle` (Dict; optional)
- `colors` (Array of Strings; required)
- `controls` (Bool; optional)
- `disabled` (Bool; optional)
- `inputNumberStyle` (Dict; optional)
- `key` (String; optional)
- `keyboard` (Bool; optional)
- `loading_state` (optional): . loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
- `max` (Real; optional)
- `min` (Real; optional)
- `placeholder` (String; optional)
- `precision` (Real; optional)
- `pureLegend` (Bool; optional)
- `pureLegendLabelStyle` (Dict; optional)
- `readOnly` (Bool; optional)
- `size` (a value equal to: 'large', 'small', 'default'; optional)
- `step` (Real; optional)
- `style` (Dict; optional)
"""
function 'feffery'_antdsegmentedcoloring(; kwargs...)
        available_props = Symbol[:id, :bordered, :breakpoints, :className, :colorBlockPosition, :colorBlockStyle, :colors, :controls, :disabled, :inputNumberStyle, :key, :keyboard, :loading_state, :max, :min, :placeholder, :precision, :pureLegend, :pureLegendLabelStyle, :readOnly, :size, :step, :style]
        wild_props = Symbol[]
        return Component("'feffery'_antdsegmentedcoloring", "AntdSegmentedColoring", "feffery_antd_components", available_props, wild_props; kwargs...)
end

