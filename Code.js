function doGet() {
    let page = HtmlService.createTemplateFromFile('Images');
    page.assets = getArtwork();

    return page.evaluate();
}

function getArtwork() {
    const ss = SpreadsheetApp.openById(spreadSheetId);
    const ws = ss.getSheetByName(sheetName);
    const data = ws.getDataRange();
    const v = data.getValues();

    let exhibition = [];

    var row = {};
    for (let r = 1; r < v.length; r++) { // each row in the sheet, set start to 1 to skip header line.
        row = getSubmissionObj(
            v[r][0], // first name
            v[r][1], // last name
            v[r][4], // work title
            v[r][7], // medium
            v[r][5], // width
            v[r][6], // height
            v[r][8], // price
            v[r][10] // image id
        );
        exhibition.push(row);
    }

    return exhibition;
}

function getSubmissionObj(fname, lname, title, medium, w, h, price, id) {
    let sub = {};

    //sub.url = `https://drive.google.com/uc?export=view&id=${id}`;
    //sub.url = `https://drive.google.com/file/d/${id}/view?usp=sharing`
    sub.url = `https://drive.google.com/thumbnail?id=${id}`
    sub.artistName = `${fname} ${lname}`;
    sub.workTitle = title;
    sub.medium = medium;
    sub.workDimensions = `${w}\" x ${h}\"`;
    sub.price = `\$${price}`;

    return sub
}
