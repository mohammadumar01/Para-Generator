const input = document.getElementById("numofwords");
const Container = document.querySelector(".Container");

const generateword = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";

    for (let i = 0; i < n; ++i) {

        const random = (Math.random() * 25).toFixed(0);
        text += letters[random];
    }
    return text;

    // return (Math.random() * 10).toFixed(0);
};

// console.log(generateword(10));


let numofwords;
const generatepara = () => {
    numofwords = Number(input.value);

    const para = document.createElement("p");

    let data = "";

    for (let i = 0; i < numofwords; ++i) {
        const randomNumber = (Math.random() *15).toFixed(0);
        data += generateword(randomNumber);
        data += " ";
       

    }
    // console.log(data);

    para.innerText= data;

    para.setAttribute("class", "paras");

    Container.append(para);
};

// const getData = () =>  {
//     numofword = Number(input.value);
//     console.log(numofword);
//     // console.log(input.value);
// };
// // getData();