import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import { Header as PageHeader } from './components/header.js';
import { BodyForm as PageBody } from './components/body.js';

function App() { 
  
  return (
    <main>
      <PageHeader />
      <PageBody />
    </main>
  );
}

export default App;
