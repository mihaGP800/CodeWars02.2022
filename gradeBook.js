function getGrade (s1, s2, s3) {
    let x = (s1+s2+s3)/3
    return x < 60 && x>=0 ? 'F': x < 70 ? 'D' : x < 80 ? 'C' : x < 90 ? 'B' : x <= 100 ? 'A' : 0
    // Code here
  }