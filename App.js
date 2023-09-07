import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import PrivateMediaPreviewAWS from './src/Components/ModuleComponents/privateMediaPreviewAWS';
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Button } from 'react-native';
import { NativeModules } from 'react-native';

const VideoPiPModule = NativeModules.VideoPiPModule;


// const clientParams = {
//   region:"eu-north-1"
// }


// const getObjectParams = {
  
// }

// const client = new S3Client(clientParams);
// const command = new GetObjectCommand(getObjectParams);
// const url = await getSignedUrl(client, command, { expiresIn: 3600 });


const App = () => {


  const playInPiPMode = () => {
    const videoURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    VideoPiPModule.enablePiPMode(videoURL);
};

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>


<Button title="Play in PiP Mode" onPress={playInPiPMode} />
    {/* <PrivateMediaPreviewAWS uri={"https://my-bucket-testing-001.s3.eu-north-1.amazonaws.com/317250054_2035432296647179_7941375570859246833_n.jpg"} /> */}

    </View>
  
  );
};

export default App;

const styles = StyleSheet.create({});






// const AWS = require('aws-sdk');
// AWS.config.update({ region: 'eu-north-1' });
// AWS.config.credentials = new AWS.Credentials('AKIAQZQ5IED2OEMRYLOS', 'wLj5BjpObItPmB1zlqua8EgnlWiPMBSNKz/gIuov');


// const s3 = new AWS.S3();
// const bucketName = 'my-bucket-testing-001';

// const params = {
//   Bucket: bucketName,
//   Expires: 3600, // The URL will expire in 1 hour (adjust this as needed)
//   Key:"*"
// };

// const presignedUrl = s3.getSignedUrl('getObject', params);
// console.log('Presigned URL:', presignedUrl);
