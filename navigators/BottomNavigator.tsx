import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navegador1 from '../screen/Navegador1'
import Navegador2 from '../screen/Navegador2'
import Navegador3 from '../screen/Navegador3'
import { Navegador4 } from "../screen/Navegador4";
import ventana from "../screen/ventana"



const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Navegador1" component={Navegador1} />
            <Tab.Screen name="Navegador2" component={Navegador2} />
            <Tab.Screen name="Navegador3" component={Navegador3} />
            <Tab.Screen name="Navegador4" component={Navegador4} />
        </Tab.Navigator>
    );
}


const Stack = createStackNavigator();

function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="ventana" component={ventana} />
            <Stack.Screen name="Botton" component={MyTabs}/>
        </Stack.Navigator>
    );
}


export default function BottomTabNavigator(){
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );

}