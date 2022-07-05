import { Button, Text, View } from "@tarojs/components";
import { useContext } from "react";
import {
  networkTypeContext,
  useNetworkTypeController,
} from "../../hooks/useNetworkType";
import { showToast } from "../../common/util";

const ByButton = (props) => {
  const { networkType, setNetworkType } = useContext(networkTypeContext);
  const showMessage = () => {
    showToast("用户是" + props.user);
    setNetworkType(props.user);
  };
  return (
    <networkTypeContext.Provider value={useNetworkTypeController()}>
      <View>
        <Text style={{ color: "#333333" }}>{networkType}</Text>
        <Button onClick={showMessage}>登录</Button>
      </View>
    </networkTypeContext.Provider>
  );
};

export default ByButton;
