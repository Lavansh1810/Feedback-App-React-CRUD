import { Link } from "react-router-dom"
import Card from "../shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="container">
            <h2>About this project</h2>
            <p>
                This project is created to provide feedback for a product or a service.
            </p>
            <Link
                to={{
                    pathname: '/'
                }}
            >
                Back to home page.
            </Link>
        </div>
    </Card>
  )
}

export default AboutPage
