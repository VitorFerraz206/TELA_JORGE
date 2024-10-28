import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from './firebaseConfig';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function cadastrar(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [fullName, setFullName] = useState(''); 
    const [birthDate, setBirthDate] = useState('');

const registerUser = async (email, password, fullName, birthDate) => {
  try {
    // Criação de usuário no Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Salvar dados adicionais no Firestore com uid como chave primária
    await setDoc(doc(db, "users", user.uid), {
      fullName: fullName,
      birthDate: birthDate,
      email: email,
    });

    console.log("Usuário registrado com sucesso:", user);
  } catch (error) {
    console.error("Erro no cadastro de usuário:", error.message);
  }
};

return(
<View style={styles.container}>
<View><Text style={styles.message}>Bem-vindo</Text>
<Text style={styles.title}>Nome Completo</Text>
                <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                />
                <Text style={styles.title}>Data de Nascimento</Text>
                <TextInput
                    placeholder="Digite sua data de nascimento..."
                    style={styles.input}
                    value={birthDate}
                    onChangeText={setBirthDate}
                />
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

                <Text style={styles.title}>Confirmar Senha</Text>
                <TextInput
                    placeholder="Confirmar senha..."
                    style={styles.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={true}
                />
</View> <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
 </View>
);
}