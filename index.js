function sacafoto(){


navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI
});


}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = imageData;
	
	
	
function win(r) {
	
	alert("foto subida OK!");
  
}

function fail(error) {
	alert("no se pudo subir KHE");
   
}	
	
	
	
	
	var uri = encodeURI("200.26.189.133/~ucymxbze/fotos/upload.php");

var options = new FileUploadOptions();
options.fileKey="foto";
options.fileName="LARAVICTORY_"+imageData.substr(imageData.lastIndexOf('/')+1);
options.mimeType="text/plain";
	
	
	
	
	var ft = new FileTransfer();
ft.onprogress = function(progressEvent) {
    if (progressEvent.lengthComputable) {
    
	var percent = progressEvent.loaded / progressEvent.total;
	
	$("#porcentaje").html("Subido: "+ percent + "%");
	
    }
};
ft.upload(imageData, uri, win, fail, options);
	
	
	
}

function onFail(message) {
    alert('Failed because: ' + message);
}
