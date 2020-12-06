import styled from "styled-components";

export default styled.div({
  fontSize: '16px',
  '& blockquote' :{
    display: 'block',
    borderWidth: '2px 0',
    borderStyle: 'solid',
    borderColor: '#ccc',
    padding: '1.5em 0 0.5em',
    margin: '1.5em 0',
    position: 'relative',
  },

  '& blockquote:before': {
    content: '\\201C',
    position: 'absolute',
    top: '0em',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    width: '3rem',
    height: '2rem',
    font: "6em/1.08em 'PT Sans', sans-serif",
    color: '#666',
    textAlign: 'center'
  },

  /*'& blockquote:after': {
    content: '"\\2013 \\2003" attr(cite)',
    display: 'block',
    textAlign: 'right',
    fontSize: '0.875em',
    color: '#e74c3c',
  } */
});