import defaultAxios from "axios";
import { useEffect, useState } from "react";

export default function UseAxiosHook() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(
    `Loading : ${loading}\nError : ${error}\nData : ${JSON.stringify(data)}`
    //JSON.stringify로 데이터 값을 string형식으로 풀어줌
    //모든 데이터가 나옴
  );

  return (
    <div>
      <h1>Axios hook</h1>
      <h1>{data && data.status}</h1>
      <h1>{loading && "Loading"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

function useAxios(options, axiosInstance = defaultAxios) {
  //axiosInstance가 없으면 디폴트값을 전달 해줌
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!options.url) {
    return;
    //url이 필수로 필요하기 떄문에 없으면 kill
  }

  const refetch = () => {
    setState({
      ...state,
      loading: false,
    });
    setTrigger(Date.now());
    //trigger 값을 날짜에 맞춰서 중복성 없애줌
  };

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
          //data 값이 들어옴
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
          //모든 전문 state를 불러온 후 ,
          // loading 자체는 만료됐으니 false, error값 가져옴
        });
      });
  }, [trigger]);

  return { ...state, refetch };
  //state 전부와 refetch 함수를 넘겨줌
}
