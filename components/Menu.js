import  React,{useState,useEffect} from "react";
import {View,Text,StyleSheet, FlatList} from "react-native";
import Menuitems from "../constants/menuItems.json"
const Menu = ()=>{    
    


    const [data,setData] = useState([])

    const getMenu =  () => {
        try { 
            setData(Menuitems.menu);
        } 
        catch (error) 
            {console.error(error); 
        } 
    }
    
    useEffect(() => {
        getMenu();
        }, []);

        const Item = ({ name, price }) => (
            <View style={menuStyles.innerContainer}>
                <Text style={menuStyles.itemText}>{name}</Text>
                <Text style={menuStyles.itemText}>{'$' + price}</Text>
            </View>
     );
        const renderItem = ({ item }) => (
            <Item name={item.title} price={item.price} />
            );
    return(
        <View>
            <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={renderItem}
            />
            
        </View>
    )
}

const menuStyles = StyleSheet.create({
    container: {
     flex: 1,
    },
    innerContainer: {
     paddingHorizontal: 40,
     paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
     },
     itemText: {
      color: '#F4CE14',
     fontSize: 22,
    },
     headerText: {
      color: '#495E57',
        fontSize: 30,
     textAlign: 'center',
     },
    });


export default Menu;