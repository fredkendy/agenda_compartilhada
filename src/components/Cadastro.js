import { View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base';
import database from '@react-native-firebase/database';

export default function Cadastro(props) {
  //um useState para monitorar cada parametro
  const [nome, setNome] = React.useState('')
  const [telefone, setTelefone] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleCadastro = () => {
    //trecho retirado do rnfirebase.io
    database()
      .ref('/contatos')
      .push({
        nome: nome,
        telefone: telefone,
        email: email
        //props.click para voltar p/ tela inicial após o envio
      }).then(() => props.click());
  }

  return (
    <View style={{display: 'flex', flex: 1}}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Cadastro</Text>
      <View style={{marginTop: 16}}>
        {/* cada vez que for digitado algo, monitorar mudança para os useStates */}
        <Input onChangeText={text => { setNome(text) }} placeholder="Nome" />
        <Input onChangeText={text => { setTelefone(text) }} placeholder="Telefone" />
        <Input onChangeText={text => { setEmail(text) }} placeholder="E-mail" />

        <Button onPress={() => { handleCadastro() }} title={'Salvar'} />
        {/* colocamos o button dentro de outro view para dar espaço entre os botões */}
        <View style={{marginTop: 5}}>
          <Button onPress={() => { props.click() }} title={'Voltar'} />
        </View>
      </View>
    </View>
  );
}