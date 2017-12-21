//@flow

/**
 * This is an implementation of the secure storage used by Panthalassa.
 */

import SInfo from 'react-native-sensitive-info';
import {SecureStorage} from 'BITNATION-Panthalassa/src/specification/secureStorageInterface';

export default function (si:SInfo) : SecureStorage {

    const sSImplementation:SecureStorage = {
        set: (key:string, value:any, {}) : Promise<void> => new Promise((res, rej) => si.setItem(key, value, {})
            .then(_ => res())
            .catch(rej)
        ),
        get: (key:string) => si.getItem(key
        ),
        has: (key:string) => new Promise((res, rej) => si.getItem(key)
            .then(value => rej(!!value))
            .catch(error => rej(error))
        ),
        remove: (key:string) => si.deleteItem(key),
        fetchItems: (filter: (key:string, value:any) => boolean) : Promise<Array<{key:string, value:any}>> => new Promise((res, rej) => {

            si.getAllItems()
                .then(items => res(items.filter(filter)))
                .catch(rej);

        }),
        destroyStorage: () => new Promise((res, rej) => rej(new Error("This is not implemented")))
    };

    return sSImplementation;

}
