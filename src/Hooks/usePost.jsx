import { useState } from "react";
import { useMainContext } from "../Context";
import { useNavigate } from "react-router-dom";

export const usePost = ({
  route = "",
  initial = {},
  initialState,
  redirect = false,
  message = false,
}) => {
  const [form, setForm] = useState({ ...initialState });
  const [loading, setLoading] = useState({ send: false });
  const { post } = useMainContext();
  const navigate = useNavigate();

  const send = async () => {
    setLoading({ ...loading, send: true });
    const { status, data } = await post(
      route,
      { ...initial, ...form },
      message
    );
    if (+status === 200) {
      if (typeof redirect == "string") {
        navigate(redirect);
      } else if (typeof redirect == "function") {
        redirect(data);
      }
    }
    setForm({});
    setLoading({ ...loading, send: false });
  };

  const setter = (key, value) => setForm({ ...form, [key]: value });

  return { form, setForm, send, setter, loading };
};
