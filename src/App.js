import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Lista from './components/Lista'
import Cadastro from './components/Cadastro'


export default function App() {
  //true renderiza lista e false renderiza cadastro
  //React. na frente para ñ precisar importar o useState
  const [listagem, setListagem] = React.useState(true)

  const handleClick = () => {
    //funciona como um toggle (se for true, vai transformar em false)
    setListagem(!listagem)
  }

  return (
    //flex controla as views, e como são distribuídas. 1 para expandir a view principal
    <View style={{ padding: 16, backgroundColor: '#cdcdcd', display: 'flex', flex: 1, }}>
      
      {/* 
        click é uma props que veio de Lista.js, que ao clicar, aciona o handleClick 
        para usar JS dentro do return, precisa abrir chaves. Se listagem for true renderiza Lista
      */}

      {
        listagem ?
          <Lista click={handleClick} />
          :
          <Cadastro click={handleClick} />
      }
      
    </View>
  );
}