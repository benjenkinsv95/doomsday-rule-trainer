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
    'linear-gradient(45deg, #e85c90, #dd72c1, #c08eea, #95a8ff, #5dbfff, #17d2ff, #14e2ff, #58efec)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const heroStyles = {
  ...centerStyles,
  ...gradientStyles
}

export default heroStyles
