import "../style.css";
import Header from './components/Header';
import LoginArea from './components/LoginArea';
import Footer from './components/Footer';

const Index = props => (
    <div className="index">
        <Header/>
        <div className="index-content">
            <h2>Rejestracja do systemu Task-O!</h2>
            <span className="login-areas">
                <LoginArea accountType="developer"/>
                <LoginArea accountType="company"/>
            </span>
        </div>
        <Footer />
    </div>
  );
  
  export default Index;
