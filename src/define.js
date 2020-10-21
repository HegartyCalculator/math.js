function split(question){
    var digits = [];
    var operator = [];
    var comparitors = [];
    var algebra = [];
    var fractions = [];
    var type = "";

    var split_question = question.split(" ");
    /* This filters the question down into its required bits and add its placement */
    for (i = 0; i < split_question.length; i++){
        if (Number.isInteger(Number(split_question[i]))){
            digits.push(split_question[i] + ":" + i);
        } else{
            switch (split_question[i]){
                case "+":
                    operator.push(split_question[i] + ":" + i);
                    break;
                case "-":
                    operator.push(split_question[i] + ":" + i);
                    break;
                case "*":
                    operator.push(split_question[i] + ":" + i);
                    break;
                case "/":
                    operator.push(split_question[i] + ":" + i);
                    break;
                case "=":
                    comparitors.push(split_question[i] + ":" + i);
                    break;
                case ">":
                    comparitors.push(split_question[i] + ":" + i);
                    break;
                case "<":
                comparitors.push(split_question[i] + ":" + i);
                    break;
                case split_question[i].substring(0, split_question[i].length - 1) + "]":
                    algebra.push(split_question[i] + ":" + i);
                    break;
                case split_question[i].substring(0, split_question[i].indexOf("/")) + split_question[i][split_question[i].indexOf("/")] + split_question[i].substring(split_question[i].indexOf("/") + 1, split_question[i].length):
                    fractions.push(split_question[i] + ":" + i);
                    break;
            }
        }
    }
    console.log("Output: ");
    console.log("Question - " + question);
    console.log("Operator - " + operator);
    console.log("Comparitors - " + comparitors);
    console.log("Algebra - " + algebra);
    console.log("Fractions - " + fractions);
    console.log("Numbers - " + digits);
    console.log("Type - " + type);  
    return null;
}

function getType(){
    var operator = [];
    var comparitors = [];
    var algebra = [];
    var fractions = [];
    var type = "";

    if(comparitors == "" && operator != "" && algebra == "" && fractions == ""){
        type = "Bidmas";
    } else if (comparitors != "" && algebra == ""){
        type = "Comparison"
    } else if (comparitors != "" && algebra != ""){
        type = "Solve For"
    }  else if (comparitors == "" && algebra == "" && fractions != "" && operator != ""){
        type = "Fraction Operations"
    }
}

module.exports.split = split
module.exports.getType = getType