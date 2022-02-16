function shortcut (string) {
    // return string
    // .split('')
    // .filter(n => {return n !=='e'&& n !=='o' && n !=='a' && n !=='i' && n !=='u'})
    // .join('')
    
    
    return string.replace(/[aeiou]/g,'')

    return string.replace(/[aeiou]/gi, '');

    return str.split('').filter(function(e) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
      }).join('')

  }
  console.log(shortcut('hello'));