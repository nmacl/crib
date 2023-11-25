import Background from './partials/Background';
import Search from './partials/Search';
import Title from './partials/Title';
import Lookup from './partials/Lookup';
import './App.css'
import 'animate.css';
import './ToggleBar.css'; // Assuming you have a separate CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';

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

const Dashboard = ({ user, auth, db }) => {
  return (
      <>
          <div className="flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6">
              <img className="rounded-xl h-16 w-16" src={user.photoURL} alt="" />
              <button 
                  className="hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves"
                  onClick={() => auth.signOut()}
              >
              Sign out
              </button>
              <FontAwesomeIcon onClick={() => history()}className="w-16 h-16 text-yellow-400 hover:scale-125 duration-100 transform cursor-pointer" icon={faStar} />
          </div>
      </>
  )
}


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
    <div>
      <button className="login-with-google-btn w-64 h-16 font-medium text-md duration-200 transition-shadow shadow-xl hover:outline outline-2 outline-emerald-600" onClick={() => stuff(auth, provider)} >
        Sign in with Google
      </button>
    </div>
    
  );
  
}

function Home() {
  const [user, setUser] = useState(null);
  const [toggleVal, setToggleVal] = useState(false); // Moved toggle state here
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  return (
    <div>
      <div className="mt-8 ">
        <Background/>
        <Title/>
        <section>
          {user ? <Dashboard auth={auth} user={user} db={database}/> : <SignIn/>}
        </section>
        <div className="mt-4 text-xl text-center max-w-l">
          {user ? <Toggle toggleVal={toggleVal} /> : null }
        </div>

        {user && (toggleVal ? <Lookup/> : <Search user={user} login={true}/>)}

        {user ? null : <About/>}
      </div>
    </div>
  )

  
  function Toggle({ toggleVal }) {
    return (
      <div className="p-12 toggle-bar justify-center mx-auto">
        <button
          className={`bg-indigo-500 text-white px-4 py-2 rounded-l shadow-xl font-bold ${
            !toggleVal ? 'opacity-100' : 'opacity-50'
          }`}
          onClick={() => setToggleVal(false)}
        >
          Area Search
        </button>
        <button
          className={`bg-indigo-500 text-white px-4 py-2 rounded-r shadow-xl font-bold ${
            toggleVal ? 'opacity-100' : 'opacity-50'
          }`}
          onClick={() => setToggleVal(true)}
        >
          House Lookup
        </button>
      </div>
    );
  }
}



function About() {
  return (
    <>
      <h1 className="text-3.5xl p-8 font-sans opacity-90">Real Estate Market Analysis</h1>
      <div className="mt-8 mx-auto max-w-md text-left border-grainy border-2 p-8 font-sans">
        <ul className="list-none list-inside space-y-4">
          <li className="text-2xl leading-snug font-sans font-medium">Identify the top property values in any zip code or city.</li>
        </ul>
      </div>
    </>
  );
}

export default Home