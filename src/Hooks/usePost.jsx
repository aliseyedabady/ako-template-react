import { useState } from "react";
import { useMainContext } from "../Context";
import { useNavigate } from "react-router-dom";

export const usePost = ({
  url = "",
  sortInit = state => {
    return state;
  },
  sort = state => {
    return state;
  },
  message = false,
  redirect = false,
}) => {
  const [form, setForm] = useState({ ...sortInit() });
  const { post } = useMainContext();
  const [loading, setLoading] = useState({ send: false });
  const navigate = useNavigate();

  const setter = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const sendData = async () => {
    setLoading({ ...loading, send: true });
    const { status } = await post(url, { ...form, ...sort(form) }, message);
    if (redirect && status === 200) {
      navigate(redirect);
    }
    setLoading({ ...loading, send: false });
  };

  return { sendData, setter };
};
