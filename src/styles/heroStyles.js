const headerHeight = '56px'
export const centerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  margin: '0'
}

export const gradientStyles = {
  background:
    'linear-gradient(0deg, #58EFEC 0%, #E85C90 100%)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const heroStyles = {
  ...centerStyles,
  ...gradientStyles
}

export default heroStyles
