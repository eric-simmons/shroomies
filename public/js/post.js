const postBtn = document.getElementById('post')

const myWidget = cloudinary.createUploadWidget({
    cloudName: 'dwdxzlxen', 
    uploadPreset: 'shroomies'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        // const result.info.url
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault()
      myWidget.open();
    }, false);
