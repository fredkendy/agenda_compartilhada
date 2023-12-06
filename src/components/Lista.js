import {View, Text} from 'react-native';
import React from 'react';
import {FAB, ListItem} from '@rneui/themed';

//Avisando o componente que receberá props
export default function Lista(props) {
  //Estado declarado para o uso do botão, comentada pois usamos true
  //const [visible, setVisible] = React.useState(true);
  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Listar contatos</Text>
      <View style={{marginTop: 16}}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>11 9999-8888</ListItem.Subtitle>
            <ListItem.Subtitle>johndoe@email.com</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <ListItem>
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>11 9999-8888</ListItem.Subtitle>
            <ListItem.Subtitle>johndoe@email.com</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
      <FAB visible={true} title="+" color="#1E90FF" placement="right" onPress={() => { props.click() }} />
    </View>
  );
}
