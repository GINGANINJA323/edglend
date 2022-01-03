const colours = (theme) => {
  if (theme === 'dark') {
    return {
      theme: 'dark',
      backgroundCol: '#1A1A1A',
      color: '#FFFFFF',
      inverseBgCol: '#FFFFFF',
      inverseCol: '#000000',
      hoverCol: '#696969'
    }
  } else {
    return {
      theme: 'light',
      backgroundCol: '#FFFFFF',
      color: '#000000',
      inverseBgCol: '#FFFFFF',
      inverseCol: '#000000',
      hoverCol: '#454545'
    }
  }
}

export default colours;