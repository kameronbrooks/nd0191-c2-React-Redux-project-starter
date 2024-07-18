import {Link} from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="page-404">
      <div>
      <h1>404</h1>
      <p>It seems you are trying to find something that does not exist in this reality.</p>
      <Link to='/'>
        Return to Home
      </Link>
      </div>
      
    </div>
  )
}

export default Page404;