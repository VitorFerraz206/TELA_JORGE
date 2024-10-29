import { auth } from './firebaseConfig';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

const handleSignIn = async (email, password) => {
  
  auth
    try {
    
    // Criação de usuário no Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Usuário registrado com sucesso:", user);
    navigation.navigate('TelaPrincipal')
  } catch (error) {
    console.error("Erro no login de usuário:", error.message);
  }
};

return(
<View style={styles.container}>
<View><Text style={styles.message}>Bem-vindo</Text>
               
                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite um email..."
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Crie uma senha..."
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true} 
                />
</View> <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Logar</Text>
        <TouchableOpacity  onPress={ () => navigation.navigate('cadastro')} style={styles.buttonRegister} >
                    <Text style={styles.registerText}>Não possui um login?Faça o seu cadastro!</Text>
                </TouchableOpacity>
        </TouchableOpacity>
 </View>
);
}