import firebase from 'firebase';

export const initializeFirebase = () =>{
    firebase.initializeApp({
        messagingSenderId: '824658242094'
    });
}
export const askForPermissionToReceiveNotifications = async () => {
    try{
        const messaging = firebase.messaging();

        await messaging.requestPermission();
        const token = await messaging.getToken();
        alert(JSON.stringify(token,null,4));
        return token;
    }catch(error){
        console.error(error);
    }
}
export default askForPermissionToReceiveNotifications;