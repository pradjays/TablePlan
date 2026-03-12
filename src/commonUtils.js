export function parseCSV(csvText) {
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