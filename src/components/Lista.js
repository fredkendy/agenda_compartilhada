import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import {FAB, ListItem} from '@rneui/themed';
import database from '@react-native-firebase/database';

//Avisando o componente que receberá props
export default function Lista(props) {

  const [listaContatos, setListaContatos] = React.useState([])

  //executado smp que inicializa o componente (eg. construtor)
  React.useEffect(() => {
    {/* Exemplo retirado do Firebase */}
    database()
      .ref('/contatos')
      .once('value')
      .then(snapshot => {
        const contatos = Object.values(snapshot.val())
        console.log('User data: ', snapshot.val());
        setListaContatos(contatos);
      });
  }, [])

  //Estado declarado para o uso do botão, comentada pois usamos true
  //const [visible, setVisible] = React.useState(true);
  return (
    <View style={{display: 'flex', flex: 1}}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Listar contatos</Text>
      <View style={{marginTop: 16}}>
        {/* Map vai pegar tudo dentro de listaContatos e vai renderizar */}
        {
          listaContatos.map(data =>
          <ListItem style={{ marginTop: 10 }}>
            <ListItem.Content>
              <ListItem.Title>{data.nome}</ListItem.Title>
              <ListItem.Subtitle>{data.email}</ListItem.Subtitle>
              <ListItem.Subtitle>{data.telefone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          ) 
        }
      </View>
      <FAB
        visible={true}
        title="+"
        color="#1E90FF"
        placement="right"
        onPress={() => {
          props.click();
        }}
      />
    </View>
  );
}
