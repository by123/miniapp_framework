import { View } from "@tarojs/components";
import { Component, CSSProperties } from "react";
import "./index.scss";


export interface ByFlexViewProps {
  className?: string;
  styles?: CSSProperties;
  row?: boolean;
  alignCenter?: boolean
  alignFlexStart?: boolean
  alignFlexEnd?: boolean
  alignBaseline?: boolean
  justifyCenter?: boolean
  justifySpaceBetween?: boolean
  justifySpaceAround?: boolean
  justifyFlexStart?: boolean
  justifyFlexEnd?: boolean
}


class ByFlexView extends Component<ByFlexViewProps> {

  alignItemsValue = (props: ByFlexViewProps) => {
    const { alignBaseline, alignCenter, alignFlexEnd, alignFlexStart } = props;
    if(alignCenter){
      return 'center'
    }
    if(alignFlexStart){
      return 'flex-start'
    }
    if(alignFlexEnd){
      return 'flex-end'
    }
    if(alignBaseline){
      return 'baseline'
    }
    return ''
  }

  justifyContentValue = (props: ByFlexViewProps) => {
    const { justifySpaceBetween, justifySpaceAround, justifyFlexStart, justifyFlexEnd, justifyCenter } = props;
    if(justifySpaceBetween){
      return 'space-between'
    }
    if(justifySpaceAround){
      return 'space-around'
    }
    if(justifyFlexStart){
      return 'flex-start'
    }
    if(justifyFlexEnd){
      return 'flex-end'
    }
    if(justifyCenter){
      return 'center'
    }
    return ''
  }


  render() {
    const { row, className, styles, children } = this.props;
    return (
      <View
        className={className}
        style={{
          alignItems: this.alignItemsValue(this.props),
          justifyContent: this.justifyContentValue(this.props),
          display: "flex",
          flexDirection: row ? "row" : 'column',
          ...styles,
        }}
      >
        {children}
      </View>
    );
  }
}

export default ByFlexView;
