import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * CardHeader组件.
 */
export default class CardHeader extends PureComponent{
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
    }
    //渲染
    render(){
        let { className, children, ...others } = this.props;

        return(
           <div {...others} className={classnames('card-header', className)}>
                {children}
           </div>
        );
    }
}