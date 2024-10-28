import { createNativeStackNavigator} from '@react-navigation/native-stack';

import cadastro from '../telas/cadastro';
import login from '../telas/login';


const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="cadastro"
                component={cadastro}
                options={{  headerShown: false}}
            />
               <Stack.Screen
                 name="login"
                 component={login}
                 options={{  headerShown: false}}
            />

        </Stack.Navigator>
    )
}