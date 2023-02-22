
export const validateContactReasonDetails : (input:string) => string | boolean = (input) => {
  const contactReasonDetailsRegexp = RegExp(/^(.|\n){17,153}$/, "i"); //find any character not between a-z
    const matchPattern = contactReasonDetailsRegexp.test(input);
     if (!matchPattern)
      return "ERROR! Length  Must be between 17 and 153 characters. Numbers and Special Characters are allowed";
    else return "OK";
   };
