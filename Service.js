function include(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
  }