import React, { Component } from 'react';
import {Keyboard, ActivityIndicator} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api'
import {
  Container,
   Form,
   Input,
   SubmitButton,
   List,
   User,
   Avatar,
   Name,
   Bio,
   ProfileButton,
   ProfileButtonText

  } from './styles';

class Main extends Component {
  state =  {
    newUser:'miroswd',
    users:[],
    loading:false
  }

async componentDidMount(){
  // Busca os dados
  const users = await AsyncStorage.getItem('users');

  if(users) {
    console.tron.log("Chegou até o didMount")
    this.setState({users:JSON.parse(users)})
    console.tron.log("Finalizou até o didMount")
  }

}

componentDidUpdate(_,prevState ){
  // Quando houver alterações na variável users
  if (prevState.users !== this.state.users ) {
    console.tron.log("Chegou até o didUpdate")
     AsyncStorage.setItem('users', JSON.stringify(this.state.users))
     console.tron.log("Finalizou o didUpdate")
  }
}


  handleAddUser = async () => {
    const {users,newUser} = this.state

    this.setState({loading:true})
    const response = await api.get(`/users/${newUser}`)

    const data = {
      name:response.data.name,
      login:response.data.login,
      bio:response.data.bio,
      avatar:response.data.avatar_url
    };

    this.setState({
      users:[...users,data],
      newUser:'',
      loading:false
    })

    Keyboard.dismiss();

    // console.tron.log(this.state.users)

  }

  render() {
    const {users,newUser, loading} = this.state

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Usuário"
            value={newUser}
            onChangeText={text => this.setState({newUser:text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser} // Método que será executado ao clicar no send
          />
          <SubmitButton loading={loading} onPress={this.handleAddUser}>
            {loading ?
              <ActivityIndicator color="#FFF" />
            :
            <Icon name="add" size={20} color="#FFF" /> }
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({item}) => (
            <User>
              <Avatar source={{uri:item.avatar}}/>
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />


      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};

export default Main
