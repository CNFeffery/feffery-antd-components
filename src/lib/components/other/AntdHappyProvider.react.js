// react核心
import React from "react";
import PropTypes from "prop-types";
// antd核心
import { HappyProvider } from "@ant-design/happy-work-theme";
// 辅助库
import { useLoading } from "../utils";

/**
 * 快乐工作特效组件AntdHappyProvider
 */
const AntdHappyProvider = ({ id, children, disabled = false, setProps }) => {
  return (
    <HappyProvider disabled={disabled} data-dash-is-loading={useLoading()}>
      {children}
    </HappyProvider>
  );
};

AntdHappyProvider.propTypes = {
  /**
   * 组件唯一id
   */
  id: PropTypes.string,

  /**
   * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
   */
  key: PropTypes.string,

  /**
   * 组件型，内嵌元素
   */
  children: PropTypes.node,

  /**
   * 是否禁用当前组件
   * 默认值：`false`
   */
  disabled: PropTypes.bool,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func,
};

export default AntdHappyProvider;
