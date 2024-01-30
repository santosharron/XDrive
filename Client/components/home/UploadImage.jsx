import axios from "axios";
const key = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const secret = process.env.NEXT_PUBLIC_PINATA_API_SECRET;
import background from "../../assets/background.jpg";
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
            <svg
              className="text-indigo-500 w-24 mx-auto mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div className="input_field flex flex-col w-max mx-auto text-center">
              <label>
                <input
                  className="text-sm cursor-pointer w-36 hidden"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={retrieveFile}
                />
                <div className="text bg-indigo-600 text-white rounded font-semibold cursor-pointer p-1 px-5 hover:bg-indigo-500">
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
