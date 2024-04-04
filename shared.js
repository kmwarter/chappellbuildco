(async () => {
  const hamburger = getElementsByClassName('hamburger');
  
  if (hamburger[0]) {
    console.log("Hello", hamburger[0])
  } else {
    console.log("None")
  }
})()