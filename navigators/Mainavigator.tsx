import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ventana from "../screen/ventana"
import Navegador1 from '../screen/Navegador1'
import Navegador2 from '../screen/Navegador2'
import Navegador3 from '../screen/Navegador3'
import { Navegador4 } from "../screen/Navegador4";
import { NavigationContainer } from "@react-navigation/native";
import Navegador5 from "../screen/Navegador5";
import Navegador6 from "../screen/Navegador6";
import Navegador7 from "../screen/Navegador7";
import Navegador8 from "../screen/Navegador8";

const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={ventana} />
            <Stack.Screen name="Drawer" component={Mydrawer} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}



const Drawer = createDrawerNavigator();

function Mydrawer() {
    return(
        <Drawer.Navigator>
                        <Drawer.Screen name="Navegador1" component={Navegador1} />
                        <Drawer.Screen name="Navegador2" component={Navegador2} />
                        <Drawer.Screen name="Navegador3" component={Navegador3} />
                        <Drawer.Screen name="Navegador4" component={Navegador4} />
                        <Drawer.Screen name="Navegador5" component={Navegador5} />
                        <Drawer.Screen name="Navegador6" component={Navegador6} />
                        <Drawer.Screen name="Navegador7" component={Navegador7} />
                        <Drawer.Screen name="Navegador8" component={Navegador8} />
        </Drawer.Navigator>
    )
}

export default function MainNavigator2(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}