import {BrowserRouter,Routes,Route} from "react-router-dom";
import 'bulma/css/bulma.css';
import './style.scss';
import Win from './Win';

function App() {

  const user = "";

  return (
      <BrowserRouter>
      <Routes>
	      <Route path="/" element={
		      <div>
		      	<Win 
				user={user}
				name="React App"
				title="Welcome"
				iconurl="./logo512.png"
		      		winDisp="block"
		      		appDisp="block"
		      		statusBarCls="active"
		      		width="100%"
		      		height="80vh"
		      	>
		      		<h4 className="title is-4">How do you do?</h4>
		      	</Win>
		      </div>
	       }  
	      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
