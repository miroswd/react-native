import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
  static navigationOptions = {
    title: 'Usuários',
  };

  static propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
  }

  state =  {
    newUser:'miroswd',
    users:[],
    loading:false
  }

async componentDidMount(){
  // console.tron.log(this.props) // exibindo as propriedades desse componente
  // Busca os dados
  const users = await AsyncStorage.getItem('users');

  if(users) {
    //console.tron.log("Chegou até o didMount")
    this.setState({users:JSON.parse(users)})
    //console.tron.log("Finalizou até o didMount")
  }

}

componentDidUpdate(_,prevState ){
  // Quando houver alterações na variável users
  if (prevState.users !== this.state.users ) {
    // console.tron.log("Chegou até o didUpdate")
     AsyncStorage.setItem('users', JSON.stringify(this.state.users))
    // console.tron.log("Finalizou o didUpdate")
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

  // Navegação

  handleNavigate = (user) => {
    const {navigation} = this.props
    navigation.navigate('User', {user}) // Mandando pra rota User, com o parâmetro user
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

              <ProfileButton onPress={() => this.handleNavigate(item)}>
                {/*
                  this.handleNavigate() -> estou chamando uma função
                  () => this.handleNavigate()  -> passo uma função como referência
                */}
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />


      </Container>
    );
  }
}


export default Main
