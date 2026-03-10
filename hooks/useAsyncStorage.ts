import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskInterface } from "@/types/Task";
import { TASKSTORAGEKEY } from "@/constants/asyncConstant";

export const useAsyncStorage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data,setData] = useState<{val: TaskInterface[]}>({val: []})
  const [newdata,setNewData] = useState<TaskInterface>({status: 'active', title: '', description:''})

  useEffect(() => {
    if(data.val.length<1){
      getItem(TASKSTORAGEKEY)
      return
    }
    // setData(prev => ({val: [...prev.val, newdata]}))
    console.log('new task -->', newdata)
  },[newdata])

  // Create / Save data
  const createItem = async (key: string, value: TaskInterface) => {
    try {
      setLoading(true);
      const newData = {val: [...data.val, value]}
      setNewData(value)
      const jsonValue = JSON.stringify(newData);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (err: any) {
      console.log('err creating', err,key)
      setError(err);
    }
  };

  const getItem = async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    if (value == null){
        setData({val: []})
    }else setData(JSON.parse(value))
  };

  const updateItem = async (key: string,idx: number, value: any) => {
    const index = data?.val.findIndex((_,index) => index == idx)
    let taskIndexData: TaskInterface = data?.val[index]
    taskIndexData = {...taskIndexData, status: value}
    const stringifyAllData = JSON.stringify(data)
    await AsyncStorage.setItem(key, stringifyAllData)
  }

  return {
    createItem,
    updateItem,
    data,
    setData,
    newdata,
    loading,
  };
};
