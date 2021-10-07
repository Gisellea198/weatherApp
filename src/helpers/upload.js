const upload = () => {
  const cloud_name = "dpeing6dx";
  const upload_preset = "wrxp92az";
  const formData = new FormData();
  formData.append("upload_preset", upload_preset);
  const options = {
    method: "POST",
    body: formData,
  };

  return fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    options
  )
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default upload;
