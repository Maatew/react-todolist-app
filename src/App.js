import './App.css';
import Feedback from './components/feedback.js';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1>My Feedback</h1>
        <Feedback
          name='Juan Carlos Alvarez'
          country='Ecuador'
          picture='1'
          task='Developer'
          company='Mercado Libre'
          text='Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem' />
          <Feedback
          name='Jhon Smith'
          country='England'
          picture='2'
          task='QA Engenier'
          company='TQS'
          text='Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem' />
          <Feedback
          name='Frida Wanhause'
          country='GMC'
          picture='3'
          task='IT Source'
          company='IBM'
          text='Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem' />
      </div>      
    </div>
  );
}

export default App;
