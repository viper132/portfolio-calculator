// eslint-disable-next-line no-useless-escape
const pattern =
  /^([-]?[0-9]{1,12}(.[0-9]+)?)([-+*/÷x]([-+]?[0-9]{1,12}(\.[0-9]+)?))*(?<![-+*/÷x])$/;

function calculatorRegex(expression: string) {
  expression = expression.replace(/÷/g, '/'); // Mengganti ÷ dengan /
  expression = expression.replace(/x/g, '*'); // Mengganti x dengan *

  if (pattern.test(expression)) {
    try {
      const result = eval(expression) as number;
      return result;
    } catch (error) {
      console.info('Error: Pembagian dengan nol tidak diizinkan.');
    }
  } else {
    console.info('Error: Ekspresi tidak valid.');
  }
}
export default calculatorRegex;
