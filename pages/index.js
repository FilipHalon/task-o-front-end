import "../style.css";
import Header from './components/Header';
import LoginArea from './components/LoginArea';
import Footer from './components/Footer';

const Index = props => (
    <div className="index">
        <Header />
        <div className="page-content-center">
            <h1>Rejestracja do systemu Task-O!</h1>
            <span className="login-areas">
                <LoginArea accountType="developer"/>
                <LoginArea accountType="company"/>
            </span>
        </div>
        <Footer />
    </div>
  );
  
  export default Index;
