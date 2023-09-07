import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
var aws4 = require('aws4-react-native')
import FastImage from 'react-native-fast-image'


const PrivateMediaPreviewAWS = ({uri}) => {

  const splitObjectKey = (uri) =>{
    const parts = uri.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart
  }
  

const method = 'GET'; // The HTTP method for accessing the media
const service = 's3';
const region = 'eu-north-1';
const accessKeyId = 'AKIAQZQ5IED2OEMRYLOS';
const secretAccessKey = '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';
const bucketName = 'my-bucket-testing-001';
const objectKey = splitObjectKey(uri);

const url = `https://${bucketName}.s3.amazonaws.com/${splitObjectKey(uri)}`;
// const url = `https://${bucketName}.s3.amazonaws.com/*.jpg`;
console.log(url,'<==url==>')


const signedUrl = aws4.sign(
  {
    host: `${bucketName}.s3.amazonaws.com`,
    path: `/${objectKey}`,
    service,
    region,
    method,
    url,
  },
  {
    accessKeyId,
    secretAccessKey,
  }
);


  return (
    <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
<FastImage
        style={{ width: 200, height: 200 }}
        source={{
            uri,
            headers: signedUrl.headers,
            priority:FastImage.priority.high,
            cache:FastImage.cacheControl.cacheOnly
        }}
        resizeMode={FastImage.resizeMode.contain}
        onLoadStart={(e)=>console.log("onLoadStart=>")}
        onLoadEnd={(e)=>console.log("onLoadEnd=>")}
        onError={(e)=>console.log("onError=>")}
        onProgress={e => console.log(e.nativeEvent.loaded / e.nativeEvent.total)}
    />
      
  </View>
  )
}

export default PrivateMediaPreviewAWS

const styles = StyleSheet.create({})



// {loading ?
//   <View>
//     <ActivityIndicator size={"large"} color={"red"} />
//   </View>
//   :
//   <View>
//     {mediaUrl ? (
//       <Image height={100} width={100} source={{ uri: mediaUrl }} style={{ width: 100, height: 100 }} />
//     ) : (
//       <Text>No media available</Text>
//     )}
//       </View>
// }


        {/* <Image height={100} width={100} source={{ uri: "https://my-bucket-testing-001.s3.eu-north-1.amazonaws.com/317250054_2035432296647179_7941375570859246833_n.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCmFwLXNvdXRoLTEiRzBFAiApj9NY2w53fCMldYau36tcZf71hNh%2BZXlShuJRbw%2Be8QIhAOrxQwGRRMkSHp8sJZ6WfNWRSldmrEy0cbLoLaB7D%2Bm0Ku0CCIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDU0ODIyMTgzMTU2IgzoRDeJYnnxNLVoYgkqwQIIsIGwKLI2rankOGZ7fiAIvZe4Dvl1CzKX%2BYObe0eR0m6YuCr%2B9y4GJq8H%2FwwJNbicBtQ9dPs3ijCldLm%2BzxZXwQJ%2FQ8t7zpNDZiOiItxe0QvxeIhkOTFkQer1QQeeDZhFlI9MopWFuJ%2BVOQ4nf7O15rlEallGtJ56Mf0464CZ8ftoKDCMSX2stgktWUJ72b8z0MnMJnK7LerA9QxLx3fG6eRumXVhT%2FIyOKj9K8M6XHnw6qgVrcQsiBaIE9GsnfUZVL%2FyWR9F47%2Fre7nbCLtVHMau4W1e%2BKFyhYZTI9fbmKt7phV05dcW6jOkkUj0W8rfbGEUR%2FyfZhIB6QN9X8y4Wm%2FSaGs7AIfLhWem49LPjIrwxH%2FPmKO967m5G23tEeFKX60QZBuHUWYa52X%2BLUwzyntmpc9EoEQ44cNC5fVYWlEwwqbepQY6swJ4qjZtXksoVvIQIsURdO7oVCnrmpa9keR8ac%2FGlJNVplWAEvB3BBI9jiBZ4x9FSsIYiLM%2B4SfawmUGuFGpiBY5BaZVpDMy1qR9QsRirA2kf4ajr8HHMZCWrryzn0M8ruC8CK7qwhH3ffSjTD7rxTWRQAB89vg02piXmBP83N7LjTO6YCDUgRIO0VLPYyXbOBVuBy9bg836gmhkcjlPxQqZrMwaqH7m80yetwOR93vFsIJi%2FN03QNNeZdu9LubaQMCd7UtbyhAJefR5bcpoOUXoa2uTMqXyN6S6G1ex5qesrC3PRw7pAnUXqFzY47hQ%2FMmWW7vw2fT0aPuGrwRwwJboyBodKHLPG41uG5aO9gy2f3KcgtcnA03EZBPrLdMOj%2BIzh7V4DncXhWsSj7GELeXVoN%2FX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230719T080009Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAQZQ5IED2HUM3A3TG%2F20230719%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=a916bd9f0762372fdf7e7f6f97da65e59f3d2d63385a1ffe0ec32283f8c4fef7" }} /> */}
