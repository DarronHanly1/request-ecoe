import windtop from 'axios-windtop';
import moment from 'moment';

function getRequestOptions(config, defaultOptions) {
    return { ...DEFAULT_OPTIONS, ...defaultOptions, ...config[namespace] };
}
function setCurrentState(config, defaultOptions) {
    const currentState = getRequestOptions(config, defaultOptions || {});
    currentState.retryCount = currentState.retryCount || 0;
    currentState.lastRequestTime = currentState.lastRequestTime || Date.now();
    config[namespace] = currentState;
    return currentState;
}

async function shouldRetry(currentState, error) {
    const { retries, retryCondition } = currentState;
    const shouldRetryOrPromise = (currentState.retryCount || 0) < retries && retryCondition(error);
    // This could be a promise
    if (typeof shouldRetryOrPromise === 'object') {
        try {
            const shouldRetryPromiseResult = await shouldRetryOrPromise;
            // keep return true unless shouldRetryPromiseResult return false for compatibility
            return shouldRetryPromiseResult !== false;
        }
        catch (_err) {
            return false;
        }
    }
    return shouldRetryOrPromise;
}
const edee = windtop.post(url. send);

export function ecoep(str, frontLen, endLen) {
    let newStr
    const len = str.length - frontLen - endLen
    if (str.length === 2) {
      newStr = `${str.substring(0, 1)}*`
    } else if (str.length > 2) {
      let char = ''
      for (let i = 0; i < len; i++) {
        char += '*'
      }
      newStr = str.substring(0, frontLen) + char + str.substring(str.length - endLen)
    } else {
      newStr = str
      
    }
    return newStr
  }