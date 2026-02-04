// react核心
import React from 'react';
// antd核心
import { Carousel } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
import { useLoading } from '../../components/utils';
// 自定义hooks
import useCss from '../../hooks/useCss';
// 参数类型
import {
    propTypes,
    defaultProps,
} from '../../components/dataDisplay/AntdCarousel.react';

/**
 * 走马灯组件AntdCarousel
 */
const AntdCarousel = (props) => {
    const {
        id,
        children,
        className,
        style,
        key,
        arrows,
        autoplay,
        dotPosition,
        easing,
        effect,
        autoplaySpeed,
        speed,
        pauseOnHover,
        infinite,
        lazyLoad,
        slidesToShow,
        slidesToScroll,
        setProps,
        ...others
    } = props;

    return (
        <Carousel
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy(
                (_, k) => k.startsWith('data-') || k.startsWith('aria-'),
                others
            )}
            id={id}
            className={
                isString(className)
                    ? className
                    : className
                      ? useCss(className)
                      : undefined
            }
            style={style}
            key={key}
            arrows={arrows}
            autoplay={autoplay}
            dotPosition={dotPosition}
            easing={easing}
            effect={effect}
            autoplaySpeed={autoplaySpeed}
            speed={speed}
            pauseOnHover={pauseOnHover}
            infinite={infinite}
            lazyLoad={lazyLoad}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            data-dash-is-loading={useLoading()}
        >
            {(Array.isArray(children) ? children : [children]).map(
                (child, i) => (
                    <div className="ant-carousel-item-wrapper" key={i}>
                        {child}
                    </div>
                )
            )}
        </Carousel>
    );
};

export default AntdCarousel;

AntdCarousel.defaultProps = defaultProps;
AntdCarousel.propTypes = propTypes;
