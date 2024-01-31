import axios from "axios";
const key = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const secret = process.env.NEXT_PUBLIC_PINATA_API_SECRET;
import background from "../../assets/background.png";
const UploadImage = ({ currentAccount, getEthereumContract }) => {
  const retrieveFile = (e) => {
    e.preventDefault();
    addImage(e.target.files[0]);
  };

  const addImage = async (file) => {
    if (file) {
      try {
        const { signer, contract } = await getEthereumContract();
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: key,
            pinata_secret_api_key: secret,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const contractSigner = contract.connect(signer);
        await contractSigner.add(currentAccount, ImgHash);
        alert("Successfully Image Uploaded");
        console.log(ImgHash)
        console.log(contractSigner)
        console.log(resFile)
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    } else {
      alert("Image Uploaded Failed");
    }
  };

  return (
    <div
      className="w-full bg-center bg-cover h-[38rem] bg-no-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
      }}
    >
      <div className="w-full h-full flex bg-black bg-opacity-60">
        <div className="p-4 w-max m-auto rounded-lg">
          <div className="file_upload" style={{ vw: "28.75rem" }}>
            <div className="lg:max-w-lg" style={{ textAlign: "center" }}>
            <p className="mt-3 text-gray-400">
                <span className="font-medium text-blue-500">Decentralized Storage.</span>
                <br/> Where Web3 and Blockchain Meet to Redefine Data Management—Empowering Privacy, Ensuring Security, and Revolutionizing the Way We Handle Information.
            </p>
            </div>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={retrieveFile}
                />
                <div className="text bg-indigo-600 text-white rounded-full font-semibold cursor-pointer p-3 px-6 hover:bg-indigo-500 mt-4">

                  Upload Image
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
