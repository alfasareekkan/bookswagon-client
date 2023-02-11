import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDowns({children}) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Sort By" >
     {children}
          
    </DropdownButton>
  );
}

export default DropDowns;