const firstName = React.createElement('h1',null,"Shahid");
const midName = React.createElement('h1',null,"Aktar");
const lastName = React.createElement('h1',null,"Mir");
const fullName = React.createElement('div',null,[firstName,midName,lastName]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(fullName);