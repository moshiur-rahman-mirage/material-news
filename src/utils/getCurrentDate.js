export function getCurrentDate() {
    // Create a new Date object
    const currentDate = new Date();
  
    // Define arrays for days and months in text
    const daysInText = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsInText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    // Get day, month, date, and year
    const dayInText = daysInText[currentDate.getDay()];
    const monthInText = monthsInText[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    // Display the result
    return(`${dayInText}, ${monthInText} ${date}, ${year}`);
  }
  

  