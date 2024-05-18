import classes from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type={"file"}
          id={name}
          accept={"image/png, image/jpeg, image/gif"}
          name={name}
        />
      </div>
    </div>
  );
};

export default ImagePicker;
