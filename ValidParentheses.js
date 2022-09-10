function validParentheses(parens) {
   // let queue = []
   // let start = '('
   // let end = ')'
   //
   // const map = {
   //    ')': '('
   // }
   //
   // for (let i = 0; i < parens.length; i++) {
   //    let char = parens[i]
   //
   //    if (start.includes(char)) queue.push(char)
   //    else if (end.includes(char)) {
   //       let previous  = queue.pop()
   //       if (map[char] !== previous  ) return false
   //    }
   // }
   // return !queue.length


   let n = 0;
   for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') n++;
      if (parens[i] === ')') n--;
      if (n < 0) return false;
   }
   return n === 0;
}

console.log(validParentheses(")(())"));
console.log(validParentheses("(())((()())())"));
