import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"

function App() {
  return (
    <Router>
      <>
        {/* <Route path="/" exact> */}
          {/* <Redirect to={`/documents/${uuidV4()}`} /> */}
        {/* </Route> */}
        {/* <Route path="/documents/:id"> */}
          <TextEditor />
        {/* </Route> */}
      </>
    </Router>
  )
}

export default App