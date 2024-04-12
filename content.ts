import CryptoJS from "crypto-js";


const element = document.querySelector("input[data-obliv-encrypt]");
const dataOblivEncrypt = element && element.getAttribute("data-obliv-encrypt");


const handleUpload = (file) => {
  // Need to integrate the api to upload the file to the database....
  if(file){
    alert("File encrypted and uploaded successfully.")
  }else{
    alert("File upload failed");
  }
}

if (element && dataOblivEncrypt) {
  chrome.runtime.sendMessage(
    { type: "FETCH_ENCRYPTION_KEY", serviceId: dataOblivEncrypt },
    (response) => {
      const { encryptionKey } = response
      console.log("Got Encryption Key")
      element.addEventListener("change", () => {
        const inputElement = element as HTMLInputElement
        const files = inputElement.files
        if (files && files.length > 0) {
          const file = files[0]
          const fileReader = new FileReader()
          fileReader.onload = () => {
            const data = fileReader.result as string
            const encryptedData = CryptoJS.AES.encrypt(
              data,
              encryptionKey
            ).toString();
            console.log("File Encrypted");
            const formData = new FormData()
            formData.append("file", new Blob([encryptedData]), file.name)
            handleUpload(formData)
          }
          fileReader.readAsText(file)
        }
      })
    }
  )
}