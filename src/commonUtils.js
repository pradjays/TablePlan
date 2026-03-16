export function parseCSVtoJSON(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const data = []; // Initialize an array to store parsed data
    for (let i = 1; i < rows.length; i++) {
        const rowData = rows[i].split(','); // Split the row, handling '\r' characters
        const rowObject = {
            name: rowData[0],
            table: rowData[1]
        };
        data.push(rowObject);
    }
    return data;
}

export function parseCSVtoOrderedList(csvText) {
    var rows = csvText.split(/\r?\n/);
    const data = [];
    rows = rows.slice(1);
    rows = rows.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < rows.length; i++) {
        const rowData = rows[i].split(',');
        const rowObject = {
            letterGroup: rowData[0].charAt(0),
            name: rowData[0],
            table: rowData[1]
        };
        data.push(rowObject);
    }

    const groupedResult = Map.groupBy(data, ({letterGroup}) => letterGroup);

    const groupedArray = [];

    groupedResult.entries().forEach(entry => {
        groupedArray.push(
            {
                letter: entry[0],
                nameList: entry[1]
            }
        );
    });

    return groupedArray;
}