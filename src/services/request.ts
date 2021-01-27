
interface OptionsType {
    method: string;
    credentials?: 'include' | 'omit' | 'same-origin' | undefined;
    body?: any;
    headers?: {
        xhrFields: { withCredentials: boolean };
        'X-Requested-with': string;
        LANGUAGE: string | null;
        Referer: string | null;
    };
}

export default function request(url: string, options: OptionsType) {
    let _url = url;
    let temp: any = {
        credentials: 'include',
        headers: {
            xhrFields: {
                withCredentials: true,
            },
            'X-Requested-with': 'XMLHttpRequest',
        },
    };
    if (options.method.toLowerCase() === 'get') {
        // 如果是IE就加上t，防止get服务缓存
        if (options.body && window.navigator.msSaveBlob) {
            options.body.t = parseInt((Math.random() * 1000000).toString(), 10);
        }
        if (options.body && Object.keys(options.body).length) {
            _url += `?${Object.keys(options.body)
                .map(item => `${item}=${options.body[item]}`)
                .join('&')}`;
        }
    } else {
        temp = {
            ...options,
            ...temp,
        };
    }
    return fetch(encodeURI(_url), temp)
        .then(response => response.json())
        .then(response => {
            if (response.status === 401) {
                let url = response.data.loginUrl;
                window.location.href = url;
                return;
            }
            if (response.status >= 200 && response.status < 300) {
                return response;
            }

            const error = new Error(response.statusText);
            // error.response = response;
            throw error;
        })
        .then(data => {
            return data;
        })
        .catch(err => ({
            err,
        }));
}
