const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

const defaultGrid = () => {
    makeRows(16);
    makeColumns(16);
}

const makeRows = (rowNum) => {

    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

const makeColumns = (cellNum) => {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}