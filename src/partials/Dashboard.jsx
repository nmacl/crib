const Home = ({ user, auth, db }) => {
    return (
        <div className="home flex bg-grainy rounded-2xl">
            <h1 className="my-20 text-2xl">Hello, <span></span>{user.displayName}</h1>
            <img className="rounded-3xl h-32 w-32 my-auto" src={user.photoURL} alt="" />
            <button 
className="shadow-3xl my-auto h-24 w-48 button signout bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded-full text-2xl text-waves"
            onClick={() => auth.signOut()}
            >
  Sign out
</button>
        </div>
    )
}

export default Home;