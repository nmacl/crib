const Home = ({ user, auth, db }) => {
    return (
        <div className="flex content-center justify-center gap-16 mt-8 border-b-2 border-grainy pb-6">
            <img className=" rounded-xl h-16 w-16" src={user.photoURL} alt="" />
            <button 
            className=" hover:border-red-500 hover:border-3 p-16 rounded-2xl button signout bg-transparent font-bold py-2 px-4 text-2xl text-waves"
            onClick={() => auth.signOut()}
            >
            Sign out
            </button>
        </div>
    )
}

export default Home;