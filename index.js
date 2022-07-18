import prompt from "prompt-sync";
import chalk from "chalk";

const pCss = prompt()
const proCss = []
const list = () => {
    for (let i = 0; i === proCss.length; i++) {
      const inputCSS = pCss("Visual saindo");
  
      if (inputCSS.toLowerCase() === "funcionando") {
        console.log(proCss.sort().join("funcionou"));
        break;
      }
    }
  };
  list();