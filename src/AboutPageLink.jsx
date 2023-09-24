import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutPageLink() {
  return (
    <Link to={{
        pathname: '/about',
        // hash:'#about',
        // search:'sort'
    }}>
        <div className="about-link">
            <FaQuestion size={30}></FaQuestion>
        </div>
    </Link>
  )
}

export default AboutPageLink
