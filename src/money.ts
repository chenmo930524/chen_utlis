export default class Money {
    desc: string
    static amountYuan: () => Money
    static amountCent: () => Money
    constructor(desc: string) {
        this.desc = desc
    }
    getNumber = () => console.log('获取的数字', this.desc + Math.random() * 10)
    getUnit = () => console.log('获取的单位', this.desc)
}

Money.amountYuan = () => {
    console.log('myTest1')
    return new Money('元')
}

Money.amountCent = () => {
    return new Money('分')
}
