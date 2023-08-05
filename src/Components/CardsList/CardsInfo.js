const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
const generateText = () => {
    let result = '';

    for (let i = 0; i < 8; i++) {
        let char = characters.charAt(Math.floor(Math.random() * charactersLength));
        result += char;
    }

    return result;
}
const cardsInfo = [
    {
        id:1,
        name: generateText(),
        email: generateText()
    },
    {
        id:2,
        name: generateText(),
        email: generateText()
    },
    {
        id:3,
        name: generateText(),
        email: generateText()
    },
    {
        id:4,
        name: generateText(),
        email: generateText()
    },
    {
        id:5,
        name: generateText(),
        email: generateText()
    },
    {
        id:6,
        name: generateText(),
        email: generateText()
    },
    {
        id:7,
        name: generateText(),
        email: generateText()
    },
    {
        id:8,
        name: generateText(),
        email: generateText()
    },
    {
        id:9,
        name: generateText(),
        email: generateText()
    },
    {
        id:10,
        name: generateText(),
        email: generateText()
    }
];

export default cardsInfo;