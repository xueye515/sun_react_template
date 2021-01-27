import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
// import { publicUrl } from '../services/api/_publicUrl';
import services from '../services';

const { publicUrl } = services;

function App() {

  const [apiValue, setApiValue] = useState<any[]>([])

  useEffect(() => {
    const getApiRes = async () => {
      await setApiValue([]);
      const _apiValues: any[] = [];
      const listVal = await publicUrl.getList({});
      _apiValues.push({ getList: listVal })

      const userInfo = await publicUrl.getUsersInfo({});
      _apiValues.push({ getUsersInfo: userInfo })
      setApiValue(_apiValues);
    }
    getApiRes();
  }, []);

  const logout = async () => {
    await publicUrl.UsersLogOut({ page: 'http://localhost:2345/' });
  }

  return (
    <div className={styles.App}>
      <div style={{ height: 200 }}>

      </div>
      <table>
        <thead>
          <tr>
            <th>URL_Name</th>
            <th>返回结果</th>
          </tr>
        </thead>
        <tbody>
          {apiValue.map(api => {
            const url_key = Object.keys(api)[0];
            return (<tr key={url_key}>
              <td>{url_key}</td>
              <td>{JSON.stringify(api[url_key])}</td>
            </tr>)
          })}
        </tbody>
      </table>
      <div>
        <p>操作：</p>
        <button onClick={logout}>退出登录</button>
      </div>
    </div>
  );
}

export default App;
