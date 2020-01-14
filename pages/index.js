import LoginArea from './components/LoginArea';

const Index = () => (        
        <div className="page-content-center">
            <h1>Rejestracja do systemu Task-O!</h1>
            <span className="login-areas">
                <LoginArea accountType="developer"/>
                <LoginArea accountType="company"/>
            </span>
        </div>
  );
  
  export default Index;
