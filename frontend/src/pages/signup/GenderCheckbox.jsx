const GenderCheckbox = () => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">male</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer gap-2">
          <span className="label-text">female</span>
          <input type="checkbox" defaultChecked className="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
