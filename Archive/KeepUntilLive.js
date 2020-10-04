function getAssets(driveDir) {
    var folders = DriveApp.getFoldersByName(driveDir);
    var folder = (folders.hasNext())? folders.next() : false ;
    var assets = {};
    if(folder){
        var files = folder.getFiles();
        while (files.hasNext()) {
            var file = files.next();
            var fileName = file.getName();
            assets.url = 'https://drive.google.com/uc?export=view&id=' + file.getId();
        }
    }
    return assets;
}
