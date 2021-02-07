export default class ValidateCPF {
  [x: string]: any;

  constructor(cpf: string) {
    Object.defineProperty(this, 'clearCpf', {
      writable: false,
      configurable: false,
      value: cpf.replace(/\D+/g, ''),
    });
  }

  private isSequence() {
    return this.clearCpf[0].repeat(11) === this.clearCpf;
  }

  private generateNewCpf() {
    const cpfWithoutDigits = this.clearCpf.slice(0, -2);
    const digitOne = ValidateCPF.generateDigit(cpfWithoutDigits);
    const digitTwo = ValidateCPF.generateDigit(cpfWithoutDigits + digitOne);
    this.newCpf = cpfWithoutDigits + digitOne + digitTwo;
  }

  static generateDigit(cpfWithoutDigit: string): string {
    let total = 0;
    let reverse = cpfWithoutDigit.length + 1;

    for (const strNum of cpfWithoutDigit) {
      total += reverse * Number(strNum);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validate(): boolean {
    if (!this.clearCpf) return false;
    if (typeof this.clearCpf !== 'string') return false;
    if (this.clearCpf.length !== 11) return false;
    if (this.isSequence()) return false;
    this.generateNewCpf();

    return this.newCpf === this.clearCpf;
  }
}
