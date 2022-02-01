import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

type Props = {
  title: string;
  btnTitle: string;
};
const DisableButton: React.FC<Props> = ({ title, btnTitle }) => {
  const [disabled, setDisabled] = useState(false);

  const disableComponent = () => {
    setDisabled(true);
  };

  return (
    <View>
      <Text>{title}</Text>
      <Button title={btnTitle} disabled={disabled} onPress={disableComponent} />
    </View>
  );
};

export default DisableButton;
