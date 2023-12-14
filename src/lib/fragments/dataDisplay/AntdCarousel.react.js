import React from 'react';
import { Carousel } from 'antd';
import useCss from '../../hooks/useCss';
import { isString } from 'lodash';
import { propTypes, defaultProps } from '../../components/dataDisplay/AntdCarousel.react';

// 定义走马灯组件AntdCarousel，api参数参考https://ant.design/components/carousel-cn/
const AntdCarousel = (props) => {
    // 取得必要属性或参数
    let {
        id,
        children,
        className,
        style,
        key,
        autoplay,
        dotPosition,
        easing,
        effect,
        autoplaySpeed,
        speed,
        pauseOnHover,
        infinite,
        lazyLoad,
        loading_state,
        setProps
    } = props;

    return (
        <Carousel
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            autoplay={autoplay}
            dotPosition={dotPosition}
            easing={easing}
            effect={effect}
            autoplaySpeed={autoplaySpeed}
            speed={speed}
            pauseOnHover={pauseOnHover}
            infinite={infinite}
            lazyLoad={lazyLoad}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }
        >{children}</Carousel>
    );
}

export default AntdCarousel;

AntdCarousel.defaultProps = defaultProps;
AntdCarousel.propTypes = propTypes;