import { View, Text } from 'react-native'
import React from 'react'
import { Button, Input } from '@rneui/base';

export default function Cadastro(props) {
  return (
    <View style={{display: 'flex', flex: 1}}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Cadastro</Text>
      <View style={{marginTop: 16}}>
        <Input placeholder="Nome" />
        <Input placeholder="Telefone" />
        <Input placeholder="E-mail" />

        <Button title={'Salvar'} />
        {/* colocamos o button dentro de outro view para dar espaço entre os botões */}
        <View style={{marginTop: 5}}>
          <Button onPress={() => { props.click() }} title={'Voltar'} />
        </View>
      </View>
    </View>
  );
}