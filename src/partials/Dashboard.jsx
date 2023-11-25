import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Home = ({ user, auth, db }) => {
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
                <a onMouseEnter={() => setIsStarHovered(true)} onMouseLeave={() => setIsStarHovered(false)}>
                    <FontAwesomeIcon className="w-16 h-16 text-yellow-400 hover:scale-125 duration-100 transform cursor-pointer" icon={isStarHovered ? solidStar : faStar} />
                </a>
            </div>
        </>
    )
}

export default Home;