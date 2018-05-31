const style =
{
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.8)',
    zIndex            : 9
    
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '3px',
    outline                    : 'none',
    padding                    : '15px',
    width: '70%',
    maxWidth: '500px',
    height: '50%',
    maxHeight: '400px', 
    margin: 'auto'
  }
};

export default style;
