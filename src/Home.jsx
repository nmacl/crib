import Header from './partials/Header';
import Background from './partials/Background';
import Search from './partials/Search';
import Title from './partials/Title';
import Table from './partials/Table';
import Card from './partials/Card';
import Menu from './partials/Menu';
import Dashboard from './partials/Dashboard'
import './App.css'
import 'animate.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState, useEffect} from "react";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: "https://criblytics-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",
  authDomain: "criblytics.firebaseapp.com",
  projectId: "criblytics",
  storageBucket: "criblytics.appspot.com",
  messagingSenderId: "109707951445",
  appId: "1:109707951445:web:120d9a55b9851e13bd03dc",
  measurementId: "G-VH1N6MR0RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);



const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const auth = getAuth();


function SignIn() {

  async function stuff(auth, provider) {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email || '';
      const credential = GoogleAuthProvider.credentialFromError(error);
    }
  }
  
  return (
    <button id="signIn" onClick={() => stuff(auth, provider)} className="px-8 py-4  bg-bland text-3xl font-bold bg-transparent hover:border-green-500 text-wavesfont-semibold hover:text-white rounded-xl">
      Sign in 
    </button>
  );
  
}


function Home() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])


  function writeUserData(name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + user.uid + "/"), {
      username: name,
      email: email,
      profile_picture : imageUrl,
      0: "address"
    });
  }
  
  function writeProperty(id, address, bd, ba, year) {
    const db = getDatabase();
    set(ref(db, 'properties/' + user.uid + "/" + id), {
      address: address,
      bd: bd,
      ba: ba,
      year: year
    });
  }

  function write() {
    const address = "123 Birch St, Jupiter, FL, 33469";
    const bd = 3;
    const ba = 2;
    const year  = 2003;
    const id = 0;
    console.log(user);
    //writeUserData(user.displayName, user.email, user.photoURL);
    writeProperty(id, address, bd, ba, year);
  }
//property section within dashboard
  return (
    
    <div>
      <div className="mt-8 ">
        <Header/>
        <Background/>
        <Title/>
        <section>
        
          {user ? <Dashboard auth={auth} user={user} db={database}/> : <SignIn/>}
        </section>
        <div className="mt-4 text-xl text-center max-w-l">
          {user ? <Search user={user} login={true}/> : <Search user={user} login={false}/>}
        </div>

      </div>
    </div>
  )
}

export default Home
