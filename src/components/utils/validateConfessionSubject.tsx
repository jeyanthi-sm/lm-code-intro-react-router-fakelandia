export const validateSubjectValue : (input:string) => (string | boolean) = (input) => {
    const subjectValueRegexp = RegExp(/^[a-z]{3,23}$/, "i"); //find any character not between a-z
    const matchPattern = subjectValueRegexp.test(input);
    if (!matchPattern)
      return "ERROR! Length  Must be between 3 and 23 characters Numbers and Special Characters Not allowed";
    else return "OK";
  };