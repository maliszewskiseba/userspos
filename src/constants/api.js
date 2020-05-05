export const fetchApi = (URL, beginFunction, successFunction, failureFunction, dispatch) => {
  dispatch(beginFunction());
  fetch(URL)
    .then(res => res.json())
    .then((json) => {
      dispatch(successFunction(json));
      return json;
    })
    .catch(error => dispatch(failureFunction(error)));
};

export const postApi = (values, URL, beginFunction, successFunction, failureFunction, dispatch) => {
  dispatch(beginFunction());
  return (
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({
        title: values.title,
        name: values.name,
        body: values.body,
        email: values.email,
        userId: parseFloat(values.userId, 10)
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(successFunction(json));
      })
      // eslint-disable-next-line
      .catch(error => dispatch(failureFunction(error).then(alert(error))))
  );
};
