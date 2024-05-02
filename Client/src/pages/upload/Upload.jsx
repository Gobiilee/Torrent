// import axios from "../../axios";
// import React from "react";
// import "./upload.css";
// import FooterWibu from "../../components/FooterWibu";
// import Select from "react-select";
// import Resizer from "react-image-file-resizer";
// import NavbarWibu from "../../components/NavbarWibu";
// import { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { addAlter } from "../../services/imageServices";
// import { getCategoryValues } from '../../services/imageServices';
// const imageMimeType = /image\/(png|jpg|jpeg)/i;

// function capitalize(s) {
//   return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
// }

// function convertValueToLabel(value) {
//   const tokens = value.split(' ');

//   return tokens.map(token => {
//     return capitalize(token);
//   }).join(' ');
// }

// function Upload() {
//   const [afile, setFile] = useState(null);
//   const [fileDataURL, setFileDataURL] = useState(null);
//   const [category, setCategory] = useState([]);
//   const [text, setText] = useState("");
//   const [alternativeFile, setAlternativeFile] = useState(null);
//   const [categoryOption, setCategoryOption] = useState([]);
//   const [selectValue, setSelectValue] = useState(null);
//   const name = useState("");
//   let navigate = useNavigate();
//   useEffect(() => {
//     (async () => {
//       const data = await getCategoryValues();

//       setCategoryOption(data.name.map(name => {
//         return {
//           value: name,
//           label: convertValueToLabel(name),
//         }
//       }))
//     })();
//   }, [getCategoryValues]);



//   // const resizeFile = (afile) =>
//   //   new Promise((resolve) => {
//   //     Resizer.imageFileResizer(
//   //       afile,
//   //       300,
//   //       300,
//   //       "JPEG",
//   //       100,
//   //       0,
//   //       (uri) => {
//   //         resolve(uri);
//   //       },
//   //       "file"
//   //     );
//   //   });

//   const changeHandler = async (e) => {
//     const fileo = e.target.files[0];
//     setFile(fileo);
//     // const image = await resizeFile(fileo);
//     const image = await fileo;
//     setAlternativeFile(image);
//   };
//   useEffect(() => {
//     let fileReader,
//       isCancel = false;
//     if (afile) {
//       fileReader = new FileReader();
//       fileReader.onload = (e) => {
//         const { result } = e.target;
//         if (result && !isCancel) {
//           setFileDataURL(result);

//         }
//       };
//       fileReader.readAsDataURL(afile);
//     }
//     return () => {
//       isCancel = true;
//       if (fileReader && fileReader.readyState === 1) {
//         fileReader.abort();
//       }
//     };
//   }, [afile]);




//   function checkCate() {
//     if (category.length < 1) {
//       toast.dark("Category cannot less than 1");
//       return false;
//     } else return true;
//   }

//   // const cateOp = async () => {
//   //   const cateName = await getCate(name)
//   //   setCategoryOption(name);
//   // }

//   const handleSubmission = async () => {
//     if (!checkCate()) {
//       return;
//     }
//     toast.dark("Uploading, please wait...");
//     const formData = new FormData();
//     const alternativeForm = new FormData();
//     formData.append("file", afile);

//     formData.append("fileName", afile.name);

//     formData.append(
//       "category",
//       category.map((cate) => {
//         return cate.value;
//       })
//     );
//     formData.append("description", text);

//     alternativeForm.append("file", alternativeFile);
//     console.log(alternativeFile)
//     alternativeForm.append("fileName", alternativeFile.name);

//     alternativeForm.append(
//       "category",
//       category.map((cate) => {
//         return cate.value;
//       })
//     );
//     alternativeForm.append("description", text);
//     try {
//       const response = await axios.post("upload/", formData);
//       const response1 = await axios.post("upload/", alternativeForm);
//       addAlter(response.fileId, response1.fileId);
//       addAlter(response1.fileId, response.fileId);
//       //const alter = await axios.post("alternative/add",response.fileId ,response1.fileId);
//       // console.log(alter)
//       //const alter1 = await axios.post("alternative/add",response1.fileId ,response.fileId);
//     } catch (error) {
//       console.log(error);
//     }

//     toast.dark("Upload success");

//     setFile(null);



//   };

//   const imageStyles = { maxWidth: "10rem", maxHeight: "10rem" };
//   function ShowSquare(props) {
//     const fileDataURL = props.urlimage;
//     if (fileDataURL && afile) {
//       return (
//         <div className="img-preview-wrapper">
//           {<img src={fileDataURL} alt="preview" id="imgUpload" />}
//         </div>
//       );
//     } else {
//       return (
//         <>
//           <div className="uploadZone">
//             <input
//               type="file"
//               id="image"
//               accept=".png, .jpg, .jpeg, .mkv, .torrent, .pdf"
//               onChange={changeHandler}
//             />
//           </div>
//         </>
//       );
//     }
//   }

//   return (
//     <>
//       <NavbarWibu />
//       <div className="upload-container">
//         <ShowSquare urlimage={fileDataURL} />

//         <div className="upload__fields">
//           <div className="upload__field">
//             <p className="upload__field-label">
//               Description
//             </p>
//             <input
//               className="upload__field-input"
//               placeholder="Write description for this file"
//               onChange={(e) => setText(e.target.value)}
//             />
//           </div>

//           <div className="upload__field">
//             <p className="upload__field-label">Select category</p>
//             <Select
//               className="upload__field-select"
//               closeMenuOnSelect={true}
//               defaultValue={[category[1]]}
//               isMulti
//               name="category"
//               onChange={(e) => setCategory(e)}
//               options={categoryOption}
//               isClearable
//               // className="basic-multi-select"
//               classNamePrefix="select"
//             />
//           </div>
//           <div className="submit-button">
//             <button onClick={(e) => setFile((e.target.value = null))}>
//               Cancel
//             </button>
//             <button onClick={handleSubmission}>Submit</button>
//           </div>
//         </div>
//       </div>
//       <FooterWibu />
//     </>
//   );
// }
// export default Upload;

import axios from "../../axios";
import React from "react";
import "./upload.css";
import FooterWibu from "../../components/FooterWibu";
import Select from "react-select";
import Resizer from "react-image-file-resizer";
import NavbarWibu from "../../components/NavbarWibu";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addAlter } from "../../services/imageServices";
import { getCategoryValues } from '../../services/imageServices';
import { generateKey } from "../../services/keyServices";
import {
  handleLoginApi,

} from "../../services/userServices";
import { sha256 } from "crypto-js";
const imageMimeType = /image\/(png|jpg|jpeg)/i;

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function convertValueToLabel(value) {
  const tokens = value.split(" ");

  return tokens.map((token) => {
    return capitalize(token);
  }).join(" ");
}

// const calculateFileHash = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const fileData = event.target.result;
//       const hash = sha256(fileData).toString(); // Calculate hash using sha256
//       resolve(hash);
//     };
//     reader.onerror = (error) => {
//       reject(error);
//     };
//     reader.readAsBinaryString(file);
//   });
// };

function Upload() {
  const [afile, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [category, setCategory] = useState([]);
  const [text, setText] = useState("");
  const [alternativeFile, setAlternativeFile] = useState(null);
  const [categoryOption, setCategoryOption] = useState([]);
  const [username, setUsername] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getCategoryValues();

      setCategoryOption(
        data.name.map((name) => {
          return {
            value: name,
            label: convertValueToLabel(name),
          };
        })
      );
    })();
  }, []);

  const changeHandler = async (e) => {
    const fileo = e.target.files[0];
    setFile(fileo);
    const image = await fileo;
    setAlternativeFile(image);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (afile) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(afile);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [afile]);

  function checkCate() {
    if (category.length < 1) {
      toast.dark("Category cannot be less than 1");
      return false;
    } else return true;
  }

  const handleSubmission = async () => {
    if (!checkCate()) {
      return;
    }
    toast.dark("Uploading, please wait...");
    const formData = new FormData();
    const alternativeForm = new FormData();
    formData.append("file", afile);
    formData.append("fileName", afile.name);
    formData.append(
      "category",
      category.map((cate) => {
        return cate.value;
      })
    );
    formData.append("description", text);
    // formData.append("username", username); // Add username to form data
    formData.append("privateKey", privateKey); // Add private key to form data

    try {
      // const hash = await calculateFileHash(afile);
      const signMsg = await generateKey.signMessage(privateKey.toString(), afile);
      const data = await handleLoginApi(signMsg.afile, signMsg.signature);
      if (data.status === "success") {
        const response = await axios.post("upload/", formData);
        // formData.append("hashedFile", hash);
        toast.dark("Upload success");
        setFile(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarWibu />
      <div className="upload-container">
        <div className="img-preview-wrapper">
          {fileDataURL && afile && <img src={fileDataURL} alt="preview" id="imgUpload" />}
          {!fileDataURL && !afile && (
            <div className="uploadZone">
              <input
                type="file"
                id="image"
                accept=".png, .jpg, .jpeg, .mkv, .torrent, .pdf"
                onChange={changeHandler}
              />
            </div>
          )}
        </div>
        <div className="upload__fields">
          <div className="upload__field">
            <p className="upload__field-label">Description</p>
            <input
              className="upload__field-input"
              placeholder="Write description for this file"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="upload__field">
            <p className="upload__field-label">Select category</p>
            <Select
              className="upload__field-select"
              closeMenuOnSelect={true}
              defaultValue={[category[1]]}
              isMulti
              name="category"
              onChange={(e) => setCategory(e)}
              options={categoryOption}
              isClearable
            />
            {/* </div>
          <div className="upload__field">
            <p className="upload__field-label">Username</p>
            <input
              type="text"
              className="upload__field-input"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> */}
          </div>
          <div className="upload__field">
            <p className="upload__field-label">Enter Private Key</p>
            <input
              type="password"
              className="upload__field-input"
              placeholder="Enter private key"
              value={privateKey}
              onChange={(e) => setPrivateKey(e.target.value)}
            />
          </div>
          <div className="submit-button">
            <button onClick={() => setFile(null)}>Cancel</button>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
      </div>
      <FooterWibu />
    </>
  );
}

export default Upload;
