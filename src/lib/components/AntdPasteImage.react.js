import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Image, ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { Gluejar } from '@charliewilco/gluejar'
import { DeleteOutlined } from '@ant-design/icons';
import './styles.css'
import 'antd/dist/antd.css';

const urlToBase64 = (url) => {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function () {
            let canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            // 将图片插入画布并开始绘制
            canvas.getContext('2d').drawImage(image, 0, 0);
            // result
            let result = canvas.toDataURL('image/png')
            resolve(result);
        };
        // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
        image.setAttribute("crossOrigin", 'Anonymous');
        image.src = url;
        // 图片加载失败的错误处理
        image.onerror = () => {
            reject(new Error('urlToBase64 error'));
        };
    }
    )
}

// 定义图片粘贴组件AntdPasteImage，api参数参考https://github.com/charliewilco/react-gluejar
const AntdPasteImage = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        currentPastedImages,
        deletedIdx,
        imageHeight,
        setProps,
        loading_state
    } = props;

    const handlePaste = useCallback(async (files) => {
        let results = []
        for (let i = 0; i < files.images.length; i++) {
            if (deletedIdx.indexOf(i) === -1) {
                let result = await urlToBase64(files.images[i])
                results.push(result)
            }
        }
        setProps({
            currentPastedImages: results
        })
    }, []);

    const handleDelete = useCallback((idx) => {
        if (!deletedIdx) {
            deletedIdx = [idx]
        } else if (deletedIdx.indexOf(idx) === -1) {
            deletedIdx.push(idx)
        }
        setProps({
            currentPastedImages: currentPastedImages.filter((value, idx) => deletedIdx.indexOf(idx) === -1),
            deletedIdx: deletedIdx
        })
    }, []);

    return (
        <div id={id}
            className={className}
            style={style}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
            <Gluejar
                key={0}
                onPaste={handlePaste}>
                {({ images }) => {
                    if (images.length > 0) {
                        return (
                            <ConfigProvider locale={zhCN}>
                                <Card style={{ height: '100%', border: 'none' }}>
                                    {
                                        images.map((image, idx) => {
                                            return deletedIdx.indexOf(idx) === -1 ? (
                                                <Card.Grid
                                                    style={{ width: '25%', height: imageHeight, padding: 5, cursor: 'pointer', position: 'relative' }}
                                                >
                                                    <Button shape="circle" size={"small"} icon={<DeleteOutlined />}
                                                        style={{ position: 'absolute', 'right': 10, top: 10 }}
                                                        onClick={() => handleDelete(idx)} />
                                                    <Image src={image} key={image} alt={`Pasted: ${image}`}
                                                        style={{ borderTop: '1px solid #f0f0f0', height: '100%', width: '100%', objectFit: 'contain' }} />
                                                </Card.Grid>
                                            ) : null
                                        }
                                        )
                                    }
                                </Card>
                            </ConfigProvider>
                        );
                    }
                    return null;
                }
                }
            </Gluejar>
        </div >
    );
}

// 定义参数或属性
AntdPasteImage.propTypes = {
    // 部件id
    id: PropTypes.string.isRequired,

    /**
     * The content of the tab - will only be displayed if this tab is selected
     */
    children: PropTypes.node,

    // css类名
    className: PropTypes.string,

    // 自定义css字典
    style: PropTypes.object,

    // 存储当前保存的所有图片的base64字符串
    currentPastedImages: PropTypes.arrayOf(PropTypes.any),

    // 记录生命周期内第几次接受新图片粘贴，进而辅助删除图片操作
    deletedIdx: PropTypes.arrayOf(PropTypes.number),

    // 设置每张图片块的像素高度，默认为200
    imageHeight: PropTypes.number,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

// 设置默认参数
AntdPasteImage.defaultProps = {
    className: 'feffery-paste-image-container',
    imageHeight: 200,
    currentPastedImages: [],
    deletedIdx: []
}

export default AntdPasteImage;