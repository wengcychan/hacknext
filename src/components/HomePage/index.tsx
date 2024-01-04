import About from './About'
import Post from './Post'
import Contact from './Contact'

const HomePage = () => (
	<div className="container">
    <div className="profile-page tx-13">
      <div className="row profile-body">
        <About />
        <Post />
        <Contact />
      </div>
    </div>
  </div>
)

export default HomePage;