import { createAppContainer } from 'react-navigation'; // Cria um container onde ficará toda a navegação
import { createStackNavigator } from 'react-navigation-stack'; // Navegação em pilha (Instagram)

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  // Qualquer tipo de navegação tem que ser dentro do container
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false, // Esse comando é voltado para o ios
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#267d8d',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
