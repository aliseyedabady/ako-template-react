import { useEffect, useState } from "react";
import { useMainContext } from "../Context";
import { useSearchParams } from "react-router-dom";

export const useGet = ({ url = "", filters }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { get } = useMainContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const getData = async () => {
    setLoading(true);
    const { data } = await get(`${url}?${searchParams}`, {
      ...createObjFilter(),
    });
    setData(data);
    setLoading(false);
  };
  const createObjFilter = () => {
    let obj = {};
    filters.map(element => {
      if (searchParams.get(element.key)) {
        obj = { ...obj, [element.key]: searchParams.get(element.key) };
      }
    });
    return obj;
  };
  const changeObj = (key, value) => {
    let obj = {};
    filters.map(element => {
      if (searchParams.get(element.key)) {
        obj = { ...obj, [element.key]: searchParams.get(element.key) };
      }
    });
    setSearchParams({ ...obj, [key]: value });
  };
  const filterDelete = key => {
    let obj = {};
    filters.map(element => {
      if (element.key !== key)
        obj = { ...obj, [element.key]: searchParams.get(element.key) };
    });
    setSearchParams({ ...obj });
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};
