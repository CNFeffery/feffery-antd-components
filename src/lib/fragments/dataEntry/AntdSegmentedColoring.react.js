// react核心
import React, { useContext, useEffect } from 'react';
// antd核心
import { InputNumber, Space, message, Typography } from 'antd';
// 辅助库
import { isString, isUndefined } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 上下文
import PropsContext from '../../contexts/PropsContext';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataEntry/AntdSegmentedColoring.react';

const { Text } = Typography;

const size2size = new Map([
    ['small', '24px'],
    ['middle', '32px'],
    ['large', '40px'],
]);

/**
 * 分段着色组件AntdSegmentedColoring
 */
const AntdSegmentedColoring = (props) => {
    let {
        id,
        key,
        className,
        style,
        size,
        bordered,
        variant,
        controls,
        disabled,
        keyboard,
        placeholder,
        min,
        max,
        step,
        precision,
        readOnly,
        pureLegend,
        breakpoints,
        colors,
        inputNumberStyle,
        colorBlockPosition,
        colorBlockStyle,
        pureLegendLabelStyle,
        setProps,
        batchPropsNames,
        ...others
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            const _batchPropsValues = {};
            for (const propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues,
            });
        }
    });

    const context = useContext(PropsContext);

    disabled =
        context && !isUndefined(context.componentDisabled)
            ? context.componentDisabled
            : disabled;

    size =
        context && !isUndefined(context.componentSize)
            ? context.componentSize
            : size;

    return (
        <Space
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            key={key}
            style={{
                borderRadius: '2px',
                padding: '12px 20px',
                ...style,
            }}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            direction={'vertical'}
            data-dash-is-loading={useLoading()}
        >
            {breakpoints.slice(0, breakpoints.length - 1).map((v, i) => {
                return (
                    <Space style={{ display: 'flex' }} size={'small'}>
                        {colorBlockPosition === 'left' ? (
                            <div
                                onClick={() =>
                                    setProps({
                                        colorBlockClickEvent: {
                                            color: colors[i],
                                            range: [
                                                breakpoints[i],
                                                breakpoints[i + 1],
                                            ],
                                            timestamp: Date.now(),
                                        },
                                    })
                                }
                                style={{
                                    height: size2size.get(size),
                                    backgroundColor: colors[i],
                                    width: size2size.get(size),
                                    ...colorBlockStyle,
                                }}
                            />
                        ) : null}
                        {pureLegend ? (
                            <>
                                <Text style={pureLegendLabelStyle}>
                                    {breakpoints[i].toFixed(precision)}
                                </Text>
                                <Text style={pureLegendLabelStyle}>~</Text>
                                <Text style={pureLegendLabelStyle}>
                                    {breakpoints[i + 1].toFixed(precision)}
                                </Text>
                            </>
                        ) : (
                            <>
                                <InputNumber
                                    style={inputNumberStyle}
                                    size={size}
                                    variant={
                                        !variant
                                            ? bordered
                                                ? 'outlined'
                                                : 'borderless'
                                            : variant
                                    }
                                    controls={controls}
                                    disabled={disabled}
                                    keyboard={keyboard}
                                    placeholder={placeholder}
                                    min={min}
                                    max={max}
                                    step={step}
                                    precision={precision}
                                    readOnly={readOnly}
                                    value={breakpoints[i]}
                                    onChange={(e) => {
                                        if (
                                            e !== null &&
                                            i === 0 &&
                                            e < breakpoints[i + 1]
                                        ) {
                                            const _breakpoints = [
                                                ...breakpoints,
                                            ];
                                            _breakpoints[i] = e;
                                            setProps({
                                                breakpoints: _breakpoints,
                                            });
                                        } else if (
                                            e !== null &&
                                            i > 0 &&
                                            e > breakpoints[i - 1] &&
                                            e < breakpoints[i + 1]
                                        ) {
                                            const _breakpoints = [
                                                ...breakpoints,
                                            ];
                                            _breakpoints[i] = e;
                                            setProps({
                                                breakpoints: _breakpoints,
                                            });
                                        } else if (e !== null) {
                                            message.warning({
                                                content:
                                                    '数值超出相邻断点，请调整后再输入！',
                                                duration: 1.5,
                                            });
                                        }
                                    }}
                                />
                                <span>~</span>
                                <InputNumber
                                    style={inputNumberStyle}
                                    size={size}
                                    variant={
                                        !variant
                                            ? bordered
                                                ? 'outlined'
                                                : 'borderless'
                                            : variant
                                    }
                                    controls={controls}
                                    disabled={disabled}
                                    keyboard={keyboard}
                                    placeholder={placeholder}
                                    min={min}
                                    max={max}
                                    step={step}
                                    precision={precision}
                                    readOnly={readOnly}
                                    value={breakpoints[i + 1]}
                                    onChange={(e) => {
                                        if (
                                            e !== null &&
                                            i === breakpoints.length - 2 &&
                                            e > breakpoints[i]
                                        ) {
                                            const _breakpoints = [
                                                ...breakpoints,
                                            ];
                                            _breakpoints[i + 1] = e;
                                            setProps({
                                                breakpoints: _breakpoints,
                                            });
                                        } else if (
                                            e !== null &&
                                            e > breakpoints[i] &&
                                            e < breakpoints[i + 2]
                                        ) {
                                            const _breakpoints = [
                                                ...breakpoints,
                                            ];
                                            _breakpoints[i + 1] = e;
                                            setProps({
                                                breakpoints: _breakpoints,
                                            });
                                        } else if (e !== null) {
                                            message.warning({
                                                content:
                                                    '数值超出相邻断点，请调整后再输入！',
                                                duration: 1.5,
                                            });
                                        }
                                    }}
                                />
                            </>
                        )}
                        {colorBlockPosition === 'right' ? (
                            <div
                                onClick={() =>
                                    setProps({
                                        colorBlockClickEvent: {
                                            color: colors[i],
                                            range: [
                                                breakpoints[i],
                                                breakpoints[i + 1],
                                            ],
                                            timestamp: Date.now(),
                                        },
                                    })
                                }
                                style={{
                                    height: size2size.get(size),
                                    backgroundColor: colors[i],
                                    width: size2size.get(size),
                                    ...colorBlockStyle,
                                }}
                            />
                        ) : null}
                    </Space>
                );
            })}
        </Space>
    );
};

export default AntdSegmentedColoring;

AntdSegmentedColoring.defaultProps = defaultProps;
AntdSegmentedColoring.propTypes = propTypes;
