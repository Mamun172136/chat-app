/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">male</span>
          <input
            type="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
