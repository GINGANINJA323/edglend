const colours = (theme) => {
  if (theme === 'dark') {
    return {
      backgroundCol: '#1A1A1A',
      color: '#FFFFFF',
      inverseBgCol: '#FFFFFF',
      inverseCol: '#000000'
    }
  } else {
    return {
      backgroundCol: '#FFFFFF',
      color: '#000000',
      inverseBgCol: '#FFFFFF',
      inverseCol: '#000000'
    }
  }
}

export default colours;