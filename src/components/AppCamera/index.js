import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function AppCamera() {
    const [cameraRef, setCameraRef] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);


    const handleCapture = async () => {
        if (cameraRef) {
            const photo = await cameraRef.takePictureAsync();
            setCapturedImage(photo.uri);
        }
    };

    const handleRetake = () => {
        setCapturedImage(null);
    };

    const handleSave = () => {
        // Adicione aqui a lógica para salvar a imagem
    };

    return (
        <View style={{ flex: 1 }}>
            <Camera
                ref={ref => setCameraRef(ref)}
                style={{ flex: 1 }}
                type={Camera.Constants.Type.back}
            />
            <TouchableOpacity onPress={handleCapture} style={styles.captureButton}>
                <Text style={styles.captureButtonText}>Capturar</Text>
            </TouchableOpacity>
            {capturedImage && (
                <View style={styles.previewContainer}>
                    <Image source={{ uri: capturedImage }} style={styles.previewImage} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleRetake} style={styles.button}>
                            <Text style={styles.buttonText}>Tirar outra foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSave} style={styles.button}>
                            <Text style={styles.buttonText}>Salvar foto</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    captureButton: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    captureButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    previewContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    previewImage: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
    },
});