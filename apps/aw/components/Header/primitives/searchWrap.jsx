import styled from "styled-components";

export default styled.div({
  width: 'calc(100% - 120px)',
  position: 'absolute',
  left: '0',
  height: '40px',
  'input': {
    paddingTop: '17px',
    border:'none',
    'borderBottom': '1px solid #000',
    backgroundImage:'none',
    backgroundColor:'transparent',
    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
    boxShadow: 'none',
    borderRadius: '0',
    outline: 'none',
    
    '&:focus': {

      backgroundColor: 'whiteSmoke',
      borderColor: 'none'
    }
  }
});