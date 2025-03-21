import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
// import PageHeader from './components/header.js';
// import PageBreadcrumb from './components/breadcrumb.js';
// import PageBody from './components/body.js';

import { header as PageHeader } from './components/header.js';
import { breadcrumb as PageBreadcrumb } from './components/breadcrumb.js';
import { filterform as PageFilterForm } from './components/filterform.js';
import { body as PageBody } from './components/body.js';

function App() {
  return (
    <main>
      <PageHeader />
      <PageFilterForm />
      <PageBody />
    </main>
  );
}

export default App;
