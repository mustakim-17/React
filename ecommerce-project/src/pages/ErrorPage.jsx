import { Header } from '../components/Header';
import './ErrorPage.css'

export function ErrorPage ({cart}) {
  return(
    <>
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />
    
      <div className ="error-div" >
        <p className = "error-p">Page not found</p>
      </div>
    </>
  );
}