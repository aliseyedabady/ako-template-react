import React from "react";
import { useForm } from "react-hook-form";
import "./style.scss";
const FormV1 = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const render = () => {};
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <div className="form-v1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>نام</label>
          <input placeholder="نام" {...register("name")} />
        </div>
        <div className="form-control">
          <label>موبایل</label>
          <input
            data-error={errors.mobile ? true : false}
            placeholder="09120000000"
            {...register("mobile", {
              required: true,

              minLength: { value: 2, message: "fawfawf" },
            })}
          />
          {console.log("e", errors)}
          {errors.mobile && (
            <span className="error-form">{errors.message}</span>
          )}
        </div>

        <button type="submit">ارسال</button>
      </form>
    </div>
  );
};

export default FormV1;
