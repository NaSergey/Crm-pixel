
export function getApiDomain() {
    if(window.location.host.indexOf('localhost') == -1){
        return 'https://'+window.location.host+'/api';
    }
    else{
        return 'http://argocpm/api';
    }
    // return 'https://demo.cryptotrafpar.tech/api';
}

export function getApiToken() {
    let user_data:any = localStorage.getItem(window.location.origin+'_pixelcrm_user_data');
    if(user_data != null && user_data != undefined){
        user_data = JSON.parse(user_data);
        return user_data.auth_token;
    }
    else{
        return false;
    }
}

export async function apiRequest(url: string, body: any = null) {
    const apidomain = getApiDomain();
    const headers = {
        'Content-Type': 'application/json',
        'Auth-Token': getApiToken(),
    };
    console.log('apiRequest', url, body, headers);
    const method = body ? 'POST' : 'GET';
    
    const reqParam: RequestInit = {
        method,
        headers,
    };

    if (body !== null) {
        reqParam.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${apidomain}${url}`, reqParam);

        if (response.status === 200) {
            const res = await response.json();
            if (res.info && res.info.includes('auth undefined')) {
                console.log('warning', 'Authorization error. Please reload the page or contact support.');
            }
            console.log(res);
            return res;
        } else {
            return handleApiError(url, reqParam);
        }
    } catch (error) {
        console.log('error', `Error: ${error.message}\nURL: ${apidomain}${url}`);
        return false;
    }
}

// Функция для обработки ошибок API-запросов
async function handleApiError(url: string, reqParam: RequestInit) {
    console.error(`Error with request to ${url}`);
    return false;
}
