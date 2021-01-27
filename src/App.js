
//import LayoutMasterPage from './components/LayoutMasterPage'
import Layout from './components/Layout'
import LayoutC from './components/Layout/template'

import PanelCenter from './components/PanelCenter'

import './App.css';
import { NumericSpinner } from 'components/Spinner';
import NumericSpinnerC from './components/NumericSpinner/template'


function App() {
  return (
    <LayoutC>
       
       <PanelCenter>
          <NumericSpinner></NumericSpinner>
          <NumericSpinnerC></NumericSpinnerC>
       </PanelCenter>

    </LayoutC>
  );
}

export default App;
