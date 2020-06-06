export default ( num ) => {
  if ( num > 999 ) {
    return num = num.toString().slice(0, -3) + ' ' + num.toString().slice(-3)
  } 

  return num
}